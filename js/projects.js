/**
 * Add your work here.
 *
 * 1. Drop files into /media/projects/01/, /media/projects/02/, etc.
 * 2. Fill title, description, category, year, tools.
 * 3. Point media[].src at those files.
 *
 * media type: "image" | "video"
 * size: "featured" | "wide" | "tall" | "standard"
 *
 * Leave media empty to keep the placeholder.
 */
export const CATEGORIES = [
  "ALL",
  "VIDEO",
  "GRAPHIC DESIGN",
  "POSTERS",
  "SOCIAL MEDIA",
  "LOGOS",
  "BRANDING",
];

export const PROJECTS = [
  {
    id: "01",
    slug: "project-01",
    number: "PROJECT 01",
    title: "PIECE OF WORK",
    description: "can build cinematic reels with dynamic cuts, smooth transitions, color grading, sound design, motion graphics, and visual storytelling tailored for social media and brand content.",
    category: "VIDEO",
    year: "<-- CLICK ON THE VIDEO TO VIEW MORE",
    tools: ["Premiere Pro", "After Effects"],
    link: "",
    size: "featured",
    media: [{ type: "video", src: "media/projects/01/Club is never the intention jus wanna bring in crazy ppl and have fun ......Mysore Running, Myso.mp4" },
  { type: "video", src: "media/projects/01/vid3.mp4" },
  { type: "video", src: "media/projects/01/vidno1.mp4" },
  { type: "video", src: "media/projects/01/Join us for this Sunday , registration link in bio ....Mysore Fit Club - Mysuru Fitness - Mysore.mp4" }],
  },
  {
    id: "02",
    slug: "project-02",
    number: "PROJECT 02",
    title: "Add project title",
    description: "Short description of the brief, the idea, and the outcome.",
    category: "GRAPHIC DESIGN",
    year: "2026",
    tools: ["Photoshop", "Illustrator"],
    link: "",
    size: "wide",
    media: [
      { type: "image", src: "media/projects/02/b851017d-691e-4db2-ba09-bd112c3debe8.png" },
      { type: "image", src: "media/projects/02/ChatGPT Image Sep 23, 2026 at 09_14_26 AM.png" },
      { type: "image", src: "media/projects/02/ChatGPT Image Sep 23, 2026 at 09_14_34 AM.png" },
      { type: "image", src: "media/projects/02/ChatGPT Image Sep 23, 2026 at 09_14_44 AM.png" },
    ],
  },
  {
    id: "03",
    slug: "project-03",
    number: "PROJECT 03",
    title: "BUILDING A MYSORE FIT CLUB",
    description: "Short description of the brief, the idea, and the outcome.",
    category: "SOCIAL MEDIA",
    year: "CLICK TO VIEW MORE",
    tools: ["Photoshop", "Canva"],
    link: "",
    size: "wide",
    media: [
      { type: "image", src: "media/projects/social media/PHOTO-2026-09-22-13-28-33.jpg" },
      { type: "video", src: "" },
      { type: "image", src: "media/projects/social media/3km run, smoothie bowls, live jam 30 spots only Link in bio..jpg" },
      { type: "image", src: "media/projects/social media/3km run, smoothie bowls, live jam 30 spots only Link in bio.-3.jpg" },
       { type: "image", src: "media/projects/social media/3km run, smoothie bowls, live jam 30 spots only Link in bio.-2.jpg" },
    ],
  },
  {
    id: "04",
    slug: "project-04",
    number: "PROJECT 04",
    title: "BUILDING A FICTIONAL BRAND CALLED CYCLO", 
    description: "CYCLO — A FICTIONAL PERFORMANCE CYCLING BRAND A conceptual high-performance cycling brand created for a branding exploration. CYCLO focuses on aerodynamic design, speed, endurance, and modern athletic performance, expressed through a premium and minimal visual identity.",
    category: "BRANDING",
    year: "CLICK TO VIEW MORE",
    tools: ["Illustrator", "Photoshop"],
    link: "",
    size: "wide",
    media: [
      { type: "image", src: "media/projects/brands/ca6537f6-6ffe-4a5f-8c81-3ff408acec78.png" },
      { type: "image", src: "media/projects/brands/ea37f93d-eec4-4c98-954d-12eff754ee12.png" },
      { type: "image", src: "media/projects/brands/4de2af7f-e863-45d0-915d-75c93ae46c40.png" },
      { type: "image", src: "media/projects/brands/7ff0cbea-26c7-424d-982e-cf65a8a6b9bb.png" },],
  },
  {
    id: "06",
    slug: "project-06",
    number: "PROJECT 06",
    title: "Add logo project title",
    description: "Add a description of the logo work here.",
    category: "LOGOS",
    year: "2026",
    tools: ["Illustrator", "Photoshop"],
    link: "",
    size: "standard",
    media: [
      { type: "image", src: "media/projects/logos/0485C31F-42FA-49E6-8D34-CEAFFB13B6E3.PNG" },
      { type: "image", src: "media/projects/logos/ea37f93d-eec4-4c98-954d-12eff754ee12.png" },
      { type: "image", src: "media/projects/logos/f294321d-e4e7-4102-b415-9e6fa7e00484.png" },
      { type: "image", src: "media/projects/logos/8fdaf462-94f4-444a-a24b-ba457b465f68.png" },],
  },
  {
    id: "05",
    slug: "project-05",
    number: "PROJECT 05",
    title: "Add project title",
    description: "Short description of the brief, the idea, and the outcome.",
    category: "POSTERS",
    year: "2025",
    tools: ["Photoshop", "Illustrator"],
    link: "",
    size: "standard",
    media: [
      { type: "image", src: "media/projects/IMG_7810.jpg" },
      { type: "image", src: "media/projects/Mysore Fit Club Poster fucking final-selection.png" },
      { type: "image", src: "media/projects/86483a75-8ddf-413a-8796-1539853491df.png" },
      { type: "image", src: "media/projects/ab2f1485-cdaa-4d7b-92fa-209306962f53.png" },
    ],
  },
];
