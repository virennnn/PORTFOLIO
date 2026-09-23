# Vishwesh Gowda S — Portfolio

Editorial personal site for video, graphic design and digital content.

## Preview locally

ES modules need a local server. From this folder:

```bash
python3 -m http.server 5173
```

Then open [http://localhost:5173](http://localhost:5173).

## Add your work

Projects stay empty until you add files. That is intentional.

1. Put images or videos in `media/projects/01/` through `media/projects/09/`.
2. Open `js/projects.js` and fill in title, description, category, year, tools, and optional `link`.
3. Point `media` at those files:

```js
media: [
  { type: "image", src: "media/projects/01/cover.jpg" },
  { type: "video", src: "media/projects/01/reel.mp4" },
]
```

Videos that are in view autoplay silently.

### Hero visual

Add a portrait or showreel to `media/hero/`, then edit `heroMedia` in `js/site.js`.

### Mysore Fit Club

Add branding / posters / reels to `media/mfc/`, then update `experience.media` in `js/site.js`.

## Contact and socials

All contact copy lives in `js/site.js`.

- Email, phone and location are already filled from the resume.
- Add your personal Instagram and LinkedIn URLs there to show them in the contact block and footer.
