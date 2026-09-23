import { SITE } from "./site.js";
import { PROJECTS } from "./projects.js";
import { bindAutoplay, mediaMarkup } from "./media.js";

const params = new URLSearchParams(location.search);
const slug = params.get("p");
const project = PROJECTS.find((item) => item.slug === slug) || PROJECTS[0];
const index = PROJECTS.findIndex((item) => item.slug === project.slug);
const next = PROJECTS[(index + 1) % PROJECTS.length];
const prev = PROJECTS[(index - 1 + PROJECTS.length) % PROJECTS.length];

document.title = `${project.number} — ${SITE.name}`;

const filled = project.media.length > 0;
const displayTitle = filled ? project.title : project.number;
const cover = project.media[0];
const rest = project.media.slice(1);

document.getElementById("case").innerHTML = `
  <div class="wrap case-hero">
    <div class="case-stage">
      ${
        cover
          ? `<div class="media-slot">${mediaMarkup(cover, project.title, {
              controls: project.id === "01",
            })}</div>`
          : `<div class="case-empty">
              <div>
                <p class="display" style="font-size:64px">${project.number}</p>
                <p class="eyebrow" style="margin-top:16px">[ADD PROJECT IMAGE / VIDEO]</p>
                <p style="margin-top:16px;color:rgba(244,241,234,.45)">Image, video or a sequence of stills will live here.</p>
              </div>
            </div>`
      }
    </div>
    <div class="case-meta">
      <div>
        <p class="eyebrow">${project.number} · ${project.category}</p>
        <h1 class="display">${displayTitle}</h1>
        <p class="contact-lead">${filled ? project.description : "Case study details will appear here once this project is added."}</p>
        ${project.link ? `<a class="btn btn-ghost" href="${project.link}" target="_blank" rel="noreferrer">View project</a>` : ""}
      </div>
      <dl class="case-facts">
        <div><dt>Year</dt><dd>${project.year}</dd></div>
        <div><dt>Category</dt><dd>${project.category}</dd></div>
        <div><dt>Tools</dt><dd>${project.tools.join(" · ")}</dd></div>
      </dl>
    </div>
    ${
      rest.length
        ? `<div class="gallery">${rest
            .map(
              (item) =>
                `<div class="media-slot">${mediaMarkup(item, project.title, {
                  controls: project.id === "01",
                })}</div>`
            )
            .join("")}</div>`
        : `<div class="gallery">
            <div class="media-slot paper" style="min-height:36svh"><div class="slot-label">Additional still / frame</div></div>
            <div class="media-slot paper" style="min-height:36svh"><div class="slot-label">Additional still / frame</div></div>
          </div>`
    }
    <div class="footer-inner" style="margin-top:48px;border-top:1px solid var(--line-light);padding-top:28px">
      <a href="work.html?p=${prev.slug}">← ${prev.number}</a>
      <a href="index.html#work">All work</a>
      <a href="work.html?p=${next.slug}">${next.number} →</a>
    </div>
  </div>
`;

bindAutoplay();
