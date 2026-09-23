import { SITE } from "./site.js";
import { CATEGORIES, PROJECTS } from "./projects.js";
import { bindAutoplay, firstMedia, mediaMarkup } from "./media.js";

const year = new Date().getFullYear();

function navToggle() {
  const nav = document.querySelector(".nav");
  const btn = document.querySelector(".menu-btn");
  btn?.addEventListener("click", () => nav.classList.toggle("is-open"));
  nav.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => nav.classList.remove("is-open"))
  );
}

function heroMedia() {
  const item = SITE.heroMedia?.src
    ? { type: SITE.heroMedia.type, src: SITE.heroMedia.src }
    : null;
  return `
    <div class="hero-visual reveal d3">
      <div class="media-slot">
        <span class="hero-mark" aria-hidden="true"></span>
        ${mediaMarkup(item, SITE.heroMedia.label, { autoplay: true })}
      </div>
    </div>`;
}

function projectCard(project) {
  const media = firstMedia(project);
  const isGalleryProject = ["GRAPHIC DESIGN", "POSTERS", "LOGOS"].includes(project.category);
  if (isGalleryProject && project.media.length) {
    return project.media
      .map(
        (item) => `
          <article class="project-card graphic-project graphic-single" data-size="standard" data-category="${project.category}">
            <div class="project-media">
              ${mediaMarkup(item, project.title)}
            </div>
          </article>`
      )
      .join("");
  }

  const projectClass = project.id === "01" ? " project-one" : "";
  const cardStart = `<a class="project-card${projectClass}" data-size="${project.size}" data-category="${project.category}" href="work.html?p=${project.slug}">`;
  return `
    ${cardStart}
      <div class="project-media">
        ${
          media
            ? mediaMarkup(media, project.title, { autoplay: project.id === "01" })
            : `<div class="project-placeholder">
                <div>
                  <span>${project.number}</span>
                  <small>[ADD PROJECT IMAGE / VIDEO]</small>
                </div>
              </div>`
        }
      </div>
      <div class="project-meta">
        <div>
          <h3>${project.media.length ? project.title : project.number}</h3>
          <p>${project.category}</p>
        </div>
        <div class="project-year">${project.year}</div>
      </div>
    </a>`;
}

function mfcSlots() {
  return SITE.experience.media
    .map(
      (item) => `
      <div class="media-slot paper">
        ${mediaMarkup(item.src ? item : null, item.label)}
      </div>`
    )
    .join("");
}

function mfcCarousel() {
  const items = SITE.experience.carousel || [];
  return `
    <div class="mfc-carousel" data-carousel>
      <div class="mfc-carousel-track">
        ${items
          .map(
            (item, index) => `
              <div class="mfc-carousel-slide${index === 0 ? " is-active" : ""}" data-carousel-slide>
                <div class="media-slot paper">
                  ${mediaMarkup(item.src ? item : null, item.label)}
                </div>
              </div>`
          )
          .join("")}
      </div>
      <div class="mfc-carousel-controls">
        <button class="mfc-carousel-button" type="button" data-carousel-prev aria-label="Previous carousel item">&larr;</button>
        <span class="mfc-carousel-count" data-carousel-count>01 / ${String(items.length).padStart(2, "0")}</span>
        <button class="mfc-carousel-button" type="button" data-carousel-next aria-label="Next carousel item">&rarr;</button>
      </div>
    </div>`;
}

function bindCarousels(root = document) {
  root.querySelectorAll("[data-carousel]").forEach((carousel) => {
    const slides = [...carousel.querySelectorAll("[data-carousel-slide]")];
    if (slides.length < 2) return;
    const count = carousel.querySelector("[data-carousel-count]");
    let activeIndex = 0;
    const update = (nextIndex) => {
      activeIndex = (nextIndex + slides.length) % slides.length;
      slides.forEach((slide, index) => slide.classList.toggle("is-active", index === activeIndex));
      if (count) count.textContent = `${String(activeIndex + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
    };
    carousel.querySelector("[data-carousel-prev]")?.addEventListener("click", () => update(activeIndex - 1));
    carousel.querySelector("[data-carousel-next]")?.addEventListener("click", () => update(activeIndex + 1));
  });
}

function socialFooter() {
  const { email } = SITE.contact;
  const links = [
    email ? `<a href="mailto:${email}">Email</a>` : "",
  ].filter(Boolean);
  return links.join("");
}

function render() {
  const main = document.querySelector("main");
  main.innerHTML = `
    <section class="hero">
      <div class="wrap hero-grid">
        <div>
          <h1 class="display reveal">
            ${SITE.firstName}<br />${SITE.lastName}
          </h1>
          <p class="hero-role reveal d1">${SITE.role}</p>
          <p class="hero-intro reveal d2">${SITE.intro}</p>
          <div class="hero-actions reveal d3">
            <a class="btn btn-fill" href="#work">View Work</a>
            <a class="btn btn-ghost" href="#contact">Contact Me</a>
          </div>
        </div>
        ${heroMedia()}
      </div>
    </section>

    <section class="section-paper" id="skills">
      <div class="wrap skills-layout">
        <div>
          <p class="eyebrow">Capabilities</p>
          <h2 class="display">SKILLS</h2>
          <ul class="skill-list">
            ${SITE.skills
              .map(
                (skill, i) =>
                  `<li>${skill}<span>0${i + 1}</span></li>`
              )
              .join("")}
          </ul>
        </div>
        <div>
          <p class="eyebrow">Software & AI</p>
          <h2 class="display">TOOLS</h2>
          <ul class="tool-list">
            ${SITE.tools
              .map(
                (tool) =>
                  `<li>
                    <img class="tool-icon" src="${tool.icon}" alt="" />
                    <span>${tool.name}</span>
                  </li>`
              )
              .join("")}
          </ul>
          <p class="tools-note">Selected tools used across video, design and digital content.</p>
        </div>
      </div>
    </section>

    <section class="section-paper" id="work" style="padding-top:0">
      <div class="wrap">
        <div class="section-head">
          <div>
            <p class="eyebrow">Portfolio</p>
            <h2 class="display">SELECTED<br />WORK</h2>
          </div>
        </div>
        <div class="filters" id="filters">
          ${CATEGORIES.map(
            (cat, i) =>
              `<button class="filter-btn ${i === 0 ? "is-active" : ""}" data-filter="${cat}">${cat}</button>`
          ).join("")}
        </div>
        <div class="work-grid" id="work-grid">
          ${PROJECTS.filter((project) => project.id === "01").map(projectCard).join("")}
          <div class="graphic-project-row" data-category="GRAPHIC DESIGN">
            <h3 class="graphic-project-title">GRAPHIC DESIGNS</h3>
            <div class="graphic-project-items">
              ${PROJECTS
                .filter((project) => project.category === "GRAPHIC DESIGN")
                .map(projectCard)
                .join("")}
            </div>
          </div>
            <div class="graphic-project-row poster-project-row" data-category="POSTERS">
              <h3 class="graphic-project-title">POSTERS</h3>
              <div class="graphic-project-items">
                ${PROJECTS
                  .filter((project) => project.category === "POSTERS")
                  .map(projectCard)
                  .join("")}
              </div>
            </div>
            ${PROJECTS
              .filter((project) => project.category === "SOCIAL MEDIA")
              .map(projectCard)
              .join("")}
            <div class="graphic-project-row logos-project-row" data-category="LOGOS">
              <h3 class="graphic-project-title">LOGOS</h3>
              <div class="graphic-project-items">
                ${PROJECTS
                  .filter((project) => project.category === "LOGOS")
                  .map(projectCard)
                  .join("")}
              </div>
            </div>
          ${PROJECTS
              .filter(
                (project) =>
                  project.id !== "01" &&
                    !["GRAPHIC DESIGN", "POSTERS", "SOCIAL MEDIA", "LOGOS"].includes(project.category)
              )
            .map(projectCard)
            .join("")}
        </div>
      </div>
    </section>

    <section class="section-paper" id="about" style="padding-top:0">
      <div class="wrap about-grid">
        <div>
          <p class="eyebrow">Profile</p>
          <h2 class="display">ABOUT ME</h2>
        </div>
        <div>
          <p class="about-copy">${SITE.about}</p>
          <div class="edu">
            <p class="eyebrow">Education</p>
            <h4>${SITE.education.school}</h4>
            <p>${SITE.education.degree}</p>
            <p>${SITE.education.dates}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section-ink" id="experience">
      <div class="wrap exp-grid">
        <div>
          <p class="exp-kicker">Experience</p>
          <h3 class="display">${SITE.experience.company.toUpperCase()}</h3>
          <p class="exp-role">${SITE.experience.role} · ${SITE.experience.location} · ${SITE.experience.dates}</p>
          ${
            SITE.experience.instagram
              ? `<p class="exp-role" style="margin-top:8px"><a href="${SITE.experience.instagram}" target="_blank" rel="noreferrer">${SITE.experience.instagramHandle}</a></p>`
              : ""
          }
          <ul class="exp-list">
            ${SITE.experience.responsibilities.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </div>
        <div>
          <p class="eyebrow" style="color:rgba(244,241,234,.45);margin-bottom:14px">Mysore Fit Club — branding, posters, reels</p>
          <div class="mfc-grid">${mfcSlots()}</div>
          <div class="mfc-carousel-section">
            <p class="eyebrow" style="color:rgba(244,241,234,.45);margin-bottom:14px">Carousel</p>
            ${mfcCarousel()}
          </div>
        </div>
      </div>
    </section>

    <section class="section-ink contact" id="contact">
      <div class="wrap">
        <p class="eyebrow" style="color:rgba(244,241,234,.45)">Contact</p>
        <h2 class="display">LET'S WORK TOGETHER.</h2>
        <p class="contact-lead">Have a project, brand or idea that needs strong visual content?</p>
        <div class="contact-grid">
          <div>
            <span class="eyebrow">Email</span>
            <a href="mailto:${SITE.contact.email}">${SITE.contact.email}</a>
          </div>
          <div>
            <span class="eyebrow">Phone</span>
            <a href="tel:${SITE.contact.phone.replace(/\s/g, "")}">${SITE.contact.phone}</a>
          </div>
          <div>
            <span class="eyebrow">Location</span>
            <p>${SITE.contact.location}</p>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="wrap footer-inner">
        <div>
          <div class="logo">${SITE.name.toUpperCase()}</div>
          <p class="hero-role" style="margin-top:8px">${SITE.role}</p>
          <small>© ${year} ${SITE.name}</small>
        </div>
        <div class="footer-links">${socialFooter()}</div>
      </div>
    </footer>
  `;

  document.getElementById("filters").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-filter]");
    if (!btn) return;
    document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    const filter = btn.dataset.filter;
    document.querySelectorAll(".project-card, .graphic-project-row").forEach((card) => {
      const show = filter === "ALL" || card.dataset.category === filter;
      card.classList.toggle("is-hidden", !show);
    });
  });

  bindAutoplay();
  bindCarousels();
  navToggle();

  const nav = document.querySelector(".nav");
  const paperSections = [...document.querySelectorAll(".section-paper")];
  const onScroll = () => {
    const y = 80;
    const overPaper = paperSections.some((section) => {
      const r = section.getBoundingClientRect();
      return r.top <= y && r.bottom >= y;
    });
    nav.classList.toggle("on-paper", overPaper);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (location.hash) {
    document.querySelector(location.hash)?.scrollIntoView({ behavior: "instant" });
    onScroll();
  }
}

render();
