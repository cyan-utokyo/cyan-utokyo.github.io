(() => {
  const p = window.PROFILE;
  if (!p) return;
  const byId = id => document.getElementById(id);
  const write = (id, text) => { byId(id).textContent = text; };
  const node = (tag, className, text) => {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (text) el.textContent = text;
    return el;
  };
  // 仅接受网站地址和相对文件路径，避免配置意外引入脚本链接。
  const safeUrl = value => {
    if (!value || typeof value !== "string") return null;
    const url = new URL(value, location.href);
    return ["https:", "http:"].includes(url.protocol) || (url.protocol === "file:" && !/^[a-z]+:/i.test(value)) ? url.href : null;
  };
  const link = (label, url, className) => {
    const href = safeUrl(url);
    if (!href) return null;
    const a = node("a", className, label);
    a.href = href;
    if (/^https?:/i.test(url)) { a.target = "_blank"; a.rel = "noopener noreferrer"; }
    return a;
  };
  document.title = `${p.name} · Academic Homepage`;
  document.querySelector('meta[name="description"]').content = `${p.name} — ${p.position}, ${p.institution}. Research, publications, and curriculum vitae.`;
  write("profile-name", p.name); write("local-name", p.localName);
  byId("position").replaceChildren(node("span", "", p.position), document.createElement("br"), document.createTextNode(`${p.department} · ${p.institution}`));
  write("location", p.location); write("affiliation", `${p.department} / ${p.institution}`);
  document.querySelector(".portrait > span").textContent = p.initials;
  document.querySelector(".portrait").setAttribute("aria-label", `${p.name} initials`);
  const photoUrl = safeUrl(p.photo);
  if (photoUrl) {
    const img = node("img"); img.src = photoUrl; img.alt = p.name;
    img.addEventListener("load", () => document.querySelector(".portrait").replaceChildren(img), { once: true });
  }
  byId("draft-note").hidden = !p.draft;
  p.bio.forEach(text => byId("bio").append(node("p", "", text)));
  p.research.forEach((r, i) => {
    const row = node("article", "research-row");
    const body = node("div"); body.append(node("h3", "", r.title), node("p", "", r.description));
    row.append(node("span", "row-number", String(i + 1).padStart(2, "0")), body, node("span", "research-tag", r.tags));
    byId("research-list").append(row);
  });
  const renderPublication = (pub, target) => {
    const row = node("article", "publication"); const body = node("div");
    body.append(node("span", "pub-type", pub.type), node("h3", "", pub.title), node("p", "authors", pub.authors), node("p", "venue", pub.venue));
    const links = node("div", "pub-links");
    pub.links.forEach(item => { const a = link(item.label + " ↗", item.url); if (a) links.append(a); });
    body.append(links); row.append(node("span", "pub-year", pub.year), body); byId(target).append(row);
  };
  p.publications.forEach(pub => renderPublication(pub, "publication-list"));
  (p.presentations || []).forEach(pub => renderPublication(pub, "presentation-list"));
  const timeline = (items, id) => items.forEach(item => {
    const row = node("article", "timeline-item");
    row.append(node("p", "date", item.date), node("h4", "", item.title), node("p", "", item.detail)); byId(id).append(row);
  });
  timeline(p.experience, "experience-list"); timeline(p.service, "service-list");
  const cvUrl = safeUrl(p.cv);
  if (cvUrl) { byId("cv-download").href = cvUrl; byId("cv-download").hidden = false; }
  if (p.email) {
    byId("contact-links").append(node("span", "sidebar-email", p.email.replace(/@/g, " [at] ")));
  }
  const profileLinks = node("div", "profile-links");
  p.links.forEach(item => {
    const a = link(item.label, item.url);
    if (!a) return;
    if (profileLinks.childElementCount) {
      const separator = node("span", "", "·");
      separator.setAttribute("aria-hidden", "true");
      profileLinks.append(separator);
    }
    profileLinks.append(a);
  });
  if (profileLinks.childElementCount) byId("contact-links").append(profileLinks);
  write("copyright", `© ${p.name}`); write("updated", p.updated); byId("updated").dateTime = p.updated;
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) {
        document.querySelectorAll("nav a").forEach(a => {
          if (a.hash === `#${entry.target.id}`) a.setAttribute("aria-current", "location"); else a.removeAttribute("aria-current");
        });
      } });
    }, { rootMargin: "-10% 0px -65% 0px", threshold: 0 });
    document.querySelectorAll("main section").forEach(section => observer.observe(section));
  }
})();
