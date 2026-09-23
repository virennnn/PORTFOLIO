export function mediaMarkup(item, fallbackLabel, options = {}) {
  if (item?.src && item.type === "video") {
    const controls = options.controls === false ? "" : " controls";
    const muted = options.muted ? " muted" : "";
    const autoplay = options.autoplay === false ? "" : " autoplay data-autoplay";
    return `<video src="${item.src}"${controls}${muted} loop playsinline${autoplay} preload="metadata"></video>`;
  }
  if (item?.src && item.type === "image") {
    return `<img src="${item.src}" alt="${fallbackLabel || ""}" />`;
  }
  return `<div class="slot-label">${fallbackLabel || "Add media"}</div>`;
}

export function renderMedia(item, fallbackLabel, extraClass = "") {
  return `<div class="media-slot ${extraClass}">${mediaMarkup(item, fallbackLabel)}</div>`;
}

export function firstMedia(project) {
  return project.media?.[0] || null;
}

export function bindAutoplay(root = document) {
  const videos = [...root.querySelectorAll("video[data-autoplay]")];
  if (!videos.length) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    },
    { threshold: 0.35 }
  );
  videos.forEach((video) => io.observe(video));
}

export function contactLinks(contact) {
  const items = [
    { label: "Email", value: contact.email, href: contact.email ? `mailto:${contact.email}` : "" },
    { label: "Phone", value: contact.phone, href: contact.phone ? `tel:${contact.phone.replace(/\s/g, "")}` : "" },
    { label: "Location", value: contact.location, href: "" },
  ];
  return items;
}
