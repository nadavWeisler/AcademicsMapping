(() => {
  "use strict";

  const data = window.ATLAS_DATA;
  if (!data?.root) {
    console.error("ATLAS_DATA missing");
    return;
  }

  const state = {
    path: [data.root],
    search: "",
    quartiles: new Set(["Q1", "Q2", "Q3", "Q4"]),
    ifMin: 0,
    predatory: "all",
    sort: "if-desc",
  };

  const els = {
    crumbs: document.getElementById("crumbs"),
    children: document.getElementById("children"),
    journals: document.getElementById("journals"),
    journalsTitle: document.getElementById("journals-title"),
    scopeStats: document.getElementById("scope-stats"),
    search: document.getElementById("search"),
    ifMin: document.getElementById("if-min"),
    ifLabel: document.getElementById("if-label"),
    sort: document.getElementById("sort"),
    quartileChart: document.getElementById("quartile-chart"),
    donutCenter: document.getElementById("donut-center"),
    ifBars: document.getElementById("if-bars"),
    healthChart: document.getElementById("health-chart"),
    disclaimer: document.getElementById("disclaimer"),
    dataUpdated: document.getElementById("data-updated"),
    heroCanvas: document.getElementById("hero-canvas"),
    sourcesList: document.getElementById("sources-list"),
    fetchMethod: document.getElementById("fetch-method"),
  };

  els.disclaimer.textContent = data.disclaimer;
  els.dataUpdated.textContent = data.updated;

  const sourceById = new Map((data.sources || []).map((s) => [s.id, s]));

  function renderSources() {
    if (!els.sourcesList) return;
    if (data.fetch && els.fetchMethod) {
      els.fetchMethod.textContent = `${data.fetch.method} Local file: ${data.fetch.localFile}.`;
    }
    els.sourcesList.replaceChildren();
    for (const source of data.sources || []) {
      const article = document.createElement("article");
      article.className = "source-card";
      const links = [`<a href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(source.provider)}</a>`];
      if (source.secondaryUrl) {
        links.push(
          `<a href="${escapeHtml(source.secondaryUrl)}" target="_blank" rel="noopener noreferrer">Secondary link</a>`
        );
      }
      article.innerHTML = `
        <p class="source-field">${escapeHtml(source.field)}</p>
        <h3>${escapeHtml(source.provider)}</h3>
        <p>${escapeHtml(source.howWeUse)}</p>
        <p class="source-access"><strong>Access:</strong> ${escapeHtml(source.access)}</p>
        <p class="source-links">${links.join(" · ")}</p>`;
      els.sourcesList.appendChild(article);
    }
  }

  function currentNode() {
    return state.path[state.path.length - 1];
  }

  function collectJournals(node, out = []) {
    if (Array.isArray(node.journals)) {
      for (const j of node.journals) {
        out.push({ ...j, domainPath: node._pathName || node.name });
      }
    }
    if (Array.isArray(node.children)) {
      for (const child of node.children) {
        collectJournals(child, out);
      }
    }
    return out;
  }

  function annotatePaths(node, trail = []) {
    node._pathName = [...trail, node.name].join(" › ");
    node._depth = trail.length;
    if (node.children) {
      for (const child of node.children) {
        annotatePaths(child, [...trail, node.name]);
      }
    }
  }

  annotatePaths(data.root);

  function syncFiltersFromDom() {
    state.search = els.search.value.trim();
    state.ifMin = Number(els.ifMin.value) || 0;
    els.ifLabel.textContent = String(state.ifMin);
    state.sort = els.sort.value;
    state.quartiles = new Set(
      [...document.querySelectorAll("#quartile-filters input:checked")].map(
        (el) => el.value
      )
    );
    const pred = document.querySelector('#pred-filters input[name="pred"]:checked');
    state.predatory = pred ? pred.value : "all";
  }

  function matchesFilters(journal) {
    if (!state.quartiles.has(journal.quartile)) return false;
    if (journal.if < state.ifMin) return false;
    if (state.predatory === "safe" && journal.predatory) return false;
    if (state.predatory === "only" && !journal.predatory) return false;
    if (state.search) {
      const q = state.search.toLowerCase();
      const hay = [
        journal.name,
        journal.issn,
        journal.publisher,
        journal.focus,
        journal.domainPath,
      ]
        .join(" ")
        .toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  }

  function sortJournals(list) {
    const copy = [...list];
    switch (state.sort) {
      case "if-asc":
        return copy.sort((a, b) => a.if - b.if || a.name.localeCompare(b.name));
      case "name":
        return copy.sort((a, b) => a.name.localeCompare(b.name));
      case "quartile":
        return copy.sort(
          (a, b) =>
            a.quartile.localeCompare(b.quartile) || b.if - a.if || a.name.localeCompare(b.name)
        );
      case "if-desc":
        return copy.sort((a, b) => b.if - a.if || a.name.localeCompare(b.name));
      default: {
        const _exhaustive = state.sort;
        return copy;
      }
    }
  }

  function countSubtree(node) {
    const journals = collectJournals(node);
    return {
      journals: journals.length,
      predatory: journals.filter((j) => j.predatory).length,
      meanIf:
        journals.length === 0
          ? 0
          : journals.reduce((s, j) => s + j.if, 0) / journals.length,
      children: node.children?.length || 0,
    };
  }

  function renderCrumbs() {
    els.crumbs.replaceChildren();
    state.path.forEach((node, index) => {
      if (index > 0) {
        const sep = document.createElement("span");
        sep.className = "sep";
        sep.textContent = "/";
        sep.setAttribute("aria-hidden", "true");
        els.crumbs.appendChild(sep);
      }
      if (index === state.path.length - 1) {
        const cur = document.createElement("span");
        cur.className = "current";
        cur.textContent = node.name;
        els.crumbs.appendChild(cur);
      } else {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.textContent = node.name;
        btn.addEventListener("click", () => {
          state.path = state.path.slice(0, index + 1);
          render();
        });
        els.crumbs.appendChild(btn);
      }
    });
  }

  function renderChildren() {
    const node = currentNode();
    els.children.replaceChildren();
    if (!node.children?.length) {
      const note = document.createElement("p");
      note.className = "empty";
      note.style.margin = "0";
      note.style.padding = "0.85rem 1rem";
      note.textContent = "Leaf domain — browse journals below.";
      els.children.appendChild(note);
      return;
    }

    node.children.forEach((child, i) => {
      const stats = countSubtree(child);
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "domain-chip";
      btn.style.animationDelay = `${i * 0.04}s`;
      btn.innerHTML = `<span class="name">${escapeHtml(child.name)}</span>
        <span class="meta">${stats.journals} journals · ${stats.children} sub-domains${
        stats.predatory ? ` · ${stats.predatory} risk` : ""
      }</span>`;
      btn.addEventListener("click", () => {
        state.path = [...state.path, child];
        render();
        els.journals.scrollIntoView({ behavior: "smooth", block: "nearest" });
      });
      els.children.appendChild(btn);
    });
  }

  function escapeHtml(str) {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }

  function maxIfInData() {
    return Math.max(...collectJournals(data.root).map((j) => j.if), 1);
  }

  const globalMaxIf = maxIfInData();

  function renderJournals() {
    syncFiltersFromDom();
    const node = currentNode();
    const all = collectJournals(node);
    const filtered = sortJournals(all.filter(matchesFilters));

    els.journalsTitle.textContent =
      state.path.length <= 1
        ? "Journals across academia"
        : `Journals in ${node.name}`;

    const preds = all.filter((j) => j.predatory).length;
    els.scopeStats.innerHTML = `<strong>${filtered.length}</strong>
      shown of ${all.length} in scope
      <div style="margin-top:0.45rem">${preds} predatory flagged · mean IF ${
      all.length ? (all.reduce((s, j) => s + j.if, 0) / all.length).toFixed(1) : "—"
    }</div>`;

    drawQuartileDonut(filtered);
    drawIfBars(filtered);

    els.journals.replaceChildren();
    if (!filtered.length) {
      const empty = document.createElement("li");
      empty.className = "empty";
      empty.textContent = "No journals match these filters. Widen quartile or IF range.";
      els.journals.appendChild(empty);
      return;
    }

    filtered.forEach((journal, index) => {
      const li = document.createElement("li");
      li.className = `journal${journal.predatory ? " is-predatory" : ""}`;
      li.style.animationDelay = `${Math.min(index, 12) * 0.03}s`;
      const pct = Math.min(100, (journal.if / globalMaxIf) * 100);
      const sourceIds = journal.metricSourceIds?.length
        ? journal.metricSourceIds
        : journal.predatory
          ? ["predatory", "jcr", "jcr-quartile"]
          : ["jcr", "jcr-quartile"];
      const sourceChips = sourceIds
        .map((id) => sourceById.get(id))
        .filter(Boolean)
        .map(
          (s) =>
            `<a class="source-chip" href="#sources" title="${escapeHtml(s.provider)}">${escapeHtml(
              s.field
            )}</a>`
        )
        .join("");

      li.innerHTML = `
        <div>
          <div class="journal-top">
            <h4>${escapeHtml(journal.name)}</h4>
            <span class="badge badge-${journal.quartile.toLowerCase()}">${journal.quartile}</span>
            ${journal.predatory ? '<span class="badge badge-pred">Predatory</span>' : ""}
            ${journal.openAccess ? '<span class="badge badge-oa">Open access</span>' : ""}
          </div>
          <p class="journal-meta">${escapeHtml(journal.publisher)} · ISSN ${escapeHtml(
            journal.issn
          )} · ${escapeHtml(journal.domainPath || node.name)}</p>
          <p class="journal-focus">${escapeHtml(journal.focus || "")}</p>
          <p class="journal-sources"><span>Metrics basis:</span> ${sourceChips}</p>
        </div>
        <div class="journal-if">
          <div>
            <div class="value">${journal.if.toFixed(1)}</div>
            <div class="label">Impact factor</div>
          </div>
          <div class="meter" aria-hidden="true"><span style="width:${pct}%"></span></div>
        </div>`;
      els.journals.appendChild(li);
    });
  }

  function drawQuartileDonut(journals) {
    const canvas = els.quartileChart;
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    const size = 220;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, size, size);

    const counts = { Q1: 0, Q2: 0, Q3: 0, Q4: 0 };
    for (const j of journals) counts[j.quartile] = (counts[j.quartile] || 0) + 1;
    const total = journals.length || 1;
    const colors = { Q1: "#0f766e", Q2: "#0369a1", Q3: "#a16207", Q4: "#c2410c" };
    const cx = size / 2;
    const cy = size / 2;
    const radius = 86;
    const inner = 52;
    let start = -Math.PI / 2;

    const entries = Object.keys(counts);
    let drawn = 0;
    for (const key of entries) {
      const value = counts[key];
      if (!value) continue;
      const angle = (value / total) * Math.PI * 2;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, radius, start, start + angle);
      ctx.closePath();
      ctx.fillStyle = colors[key];
      ctx.fill();
      start += angle;
      drawn += value;
    }

    if (!drawn) {
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fillStyle = "#d7e4ea";
      ctx.fill();
    }

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(cx, cy, inner, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalCompositeOperation = "source-over";

    const q1pct = Math.round((counts.Q1 / total) * 100) || 0;
    els.donutCenter.innerHTML = `${journals.length}<small>journals<br>${q1pct}% Q1</small>`;
  }

  function drawIfBars(journals) {
    const bins = [
      { label: "0–2", min: 0, max: 2 },
      { label: "2–5", min: 2, max: 5 },
      { label: "5–10", min: 5, max: 10 },
      { label: "10–20", min: 10, max: 20 },
      { label: "20–40", min: 20, max: 40 },
      { label: "40+", min: 40, max: Infinity },
    ];
    const counts = bins.map(
      (b) => journals.filter((j) => j.if >= b.min && j.if < b.max).length
    );
    const max = Math.max(...counts, 1);
    els.ifBars.replaceChildren();
    bins.forEach((bin, i) => {
      const height = Math.max(4, (counts[i] / max) * 130);
      const col = document.createElement("div");
      col.className = "bar";
      col.innerHTML = `<i style="height:${height}px"></i><span>${bin.label}<br>${counts[i]}</span>`;
      els.ifBars.appendChild(col);
    });
  }

  function renderHealth() {
    const top = data.root.children || [];
    const rows = top.map((node) => {
      const journals = collectJournals(node);
      const mean =
        journals.length === 0
          ? 0
          : journals.reduce((s, j) => s + j.if, 0) / journals.length;
      const predatory = journals.filter((j) => j.predatory).length;
      return { name: node.name, mean, predatory, count: journals.length };
    });
    rows.sort((a, b) => b.mean - a.mean);
    const maxMean = Math.max(...rows.map((r) => r.mean), 1);

    els.healthChart.replaceChildren();
    rows.forEach((row, i) => {
      const el = document.createElement("div");
      el.className = "health-row";
      el.style.animationDelay = `${i * 0.06}s`;
      const width = (row.mean / maxMean) * 100;
      el.innerHTML = `
        <div class="label">${escapeHtml(row.name)}</div>
        <div class="health-track"><i style="width:${width}%"></i></div>
        <div class="nums">IF̄ ${row.mean.toFixed(1)} · ${row.count} titles
          ${row.predatory ? `<span class="warn"> · ${row.predatory} predatory</span>` : ""}
        </div>`;
      els.healthChart.appendChild(el);
    });
  }

  function render() {
    renderCrumbs();
    renderChildren();
    renderJournals();
  }

  function bindFilters() {
    els.search.addEventListener("input", () => {
      state.search = els.search.value.trim();
      renderJournals();
    });

    els.ifMin.addEventListener("input", () => {
      state.ifMin = Number(els.ifMin.value);
      els.ifLabel.textContent = String(state.ifMin);
      renderJournals();
    });
    els.ifMin.addEventListener("change", () => {
      state.ifMin = Number(els.ifMin.value);
      els.ifLabel.textContent = String(state.ifMin);
      renderJournals();
    });

    els.sort.addEventListener("change", () => {
      state.sort = els.sort.value;
      renderJournals();
    });

    document.querySelectorAll("#quartile-filters input").forEach((input) => {
      input.addEventListener("change", () => {
        state.quartiles = new Set(
          [...document.querySelectorAll("#quartile-filters input:checked")].map(
            (el) => el.value
          )
        );
        renderJournals();
      });
    });

    document.querySelectorAll('#pred-filters input[name="pred"]').forEach((input) => {
      input.addEventListener("change", () => {
        if (input.checked) {
          state.predatory = input.value;
          renderJournals();
        }
      });
    });
  }

  function initHeroCanvas() {
    const canvas = els.heroCanvas;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let t = 0;

    const nodes = [];
    function rebuildNodes(w, h) {
      nodes.length = 0;
      const count = Math.min(48, Math.floor((w * h) / 18000));
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: 2 + Math.random() * 4,
          vx: -0.15 + Math.random() * 0.3,
          vy: -0.1 + Math.random() * 0.2,
          ring: Math.random() > 0.7,
          hue: 160 + Math.random() * 40,
        });
      }
    }

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      rebuildNodes(rect.width, rect.height);
    }

    function frame() {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      t += 0.004;
      ctx.clearRect(0, 0, w, h);

      const grd = ctx.createLinearGradient(0, 0, w, h);
      grd.addColorStop(0, "#0c2433");
      grd.addColorStop(0.45, "#0f3d45");
      grd.addColorStop(1, "#085f6b");
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, w, h);

      // nested domain rings
      for (let i = 0; i < 5; i++) {
        const cx = w * 0.62 + Math.sin(t + i) * 18;
        const cy = h * 0.42 + Math.cos(t * 0.8 + i) * 12;
        ctx.beginPath();
        ctx.arc(cx, cy, 40 + i * 55 + Math.sin(t * 2 + i) * 6, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(103, 232, 249, ${0.08 + i * 0.03})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // treemap-ish blocks
      const cols = 8;
      const rows = 5;
      const pad = 8;
      const gw = w * 0.55;
      const gh = h * 0.55;
      const ox = w * 0.38;
      const oy = h * 0.22;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const pulse = 0.35 + 0.65 * (0.5 + 0.5 * Math.sin(t * 3 + c * 0.4 + r * 0.7));
          const x = ox + (c * gw) / cols + pad;
          const y = oy + (r * gh) / rows + pad;
          const bw = gw / cols - pad * 2;
          const bh = gh / rows - pad * 2;
          ctx.fillStyle = `rgba(15, 118, 110, ${0.08 + pulse * 0.18})`;
          ctx.fillRect(x, y, bw, bh);
          if ((c + r) % 5 === 0) {
            ctx.strokeStyle = `rgba(8, 145, 178, ${0.25 + pulse * 0.35})`;
            ctx.strokeRect(x + 1, y + 1, bw - 2, bh - 2);
          }
        }
      }

      for (const n of nodes) {
        if (!reduced) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > w) n.vx *= -1;
          if (n.y < 0 || n.y > h) n.vy *= -1;
        }
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${n.hue}, 70%, 65%, 0.55)`;
        ctx.fill();
        if (n.ring) {
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r + 6 + Math.sin(t * 4 + n.x) * 2, 0, Math.PI * 2);
          ctx.strokeStyle = `hsla(${n.hue}, 70%, 70%, 0.25)`;
          ctx.stroke();
        }
      }

      // connection lines among nearby nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(167, 243, 208, ${0.18 * (1 - dist / 120)})`;
            ctx.stroke();
          }
        }
      }

      if (!reduced) raf = requestAnimationFrame(frame);
    }

    resize();
    frame();
    window.addEventListener("resize", () => {
      cancelAnimationFrame(raf);
      resize();
      frame();
    });
  }

  bindFilters();
  renderSources();
  renderHealth();
  render();
  initHeroCanvas();
})();
