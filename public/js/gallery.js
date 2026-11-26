// Add one entry per individual design. Use actual artwork and project details.
// Example shape: { title: "", image: "images/graphic-design/file.webp", alt: "", story: "", tools: "" }
const projects = [
  {
    "title": "District-wide promotional signage",
    "image": "images/graphic-design/district-promotion.webp",
    "alt": "24 × 36-inch tool promotion poster",
    "story": "While studying at NAIT, I was approached by a regional merchandising manager to improve signage that did not clearly explain a qualifying tool purchase and its free products. I created an initial mockup in Canva and completed the design using Illustrator and Photoshop. The 24 × 36-inch poster was distributed to all stores in the district. Sales impact was not measured.",
    "tools": "Canva, Adobe Illustrator, Adobe Photoshop"
  },
  {
    "title": "In-store poster 1",
    "image": "images/graphic-design/store-poster-1.webp",
    "alt": "In-store marketing artwork 1 — pending upload",
    "story": "Artwork and individual project details coming soon. Part of a collection of approximately six to seven posters used in-store to communicate promotions, services and customer applications.",
    "tools": ""
  },
  {
    "title": "In-store poster 2",
    "image": "images/graphic-design/store-poster-2.webp",
    "alt": "In-store marketing artwork 2 — pending upload",
    "story": "Artwork and individual project details coming soon. Part of a collection of approximately six to seven posters used in-store to communicate promotions, services and customer applications.",
    "tools": ""
  },
  {
    "title": "In-store poster 3",
    "image": "images/graphic-design/store-poster-3.webp",
    "alt": "In-store marketing artwork 3 — pending upload",
    "story": "Artwork and individual project details coming soon. Part of a collection of approximately six to seven posters used in-store to communicate promotions, services and customer applications.",
    "tools": ""
  },
  {
    "title": "In-store poster 4",
    "image": "images/graphic-design/store-poster-4.webp",
    "alt": "In-store marketing artwork 4 — pending upload",
    "story": "Artwork and individual project details coming soon. Part of a collection of approximately six to seven posters used in-store to communicate promotions, services and customer applications.",
    "tools": ""
  },
  {
    "title": "In-store poster 5",
    "image": "images/graphic-design/store-poster-5.webp",
    "alt": "In-store marketing artwork 5 — pending upload",
    "story": "Artwork and individual project details coming soon. Part of a collection of approximately six to seven posters used in-store to communicate promotions, services and customer applications.",
    "tools": ""
  },
  {
    "title": "In-store poster 6",
    "image": "images/graphic-design/store-poster-6.webp",
    "alt": "In-store marketing artwork 6 — pending upload",
    "story": "Artwork and individual project details coming soon. Part of a collection of approximately six to seven posters used in-store to communicate promotions, services and customer applications.",
    "tools": ""
  },
  {
    "title": "In-store poster 7",
    "image": "images/graphic-design/store-poster-7.webp",
    "alt": "In-store marketing artwork 7 — pending upload",
    "story": "Artwork and individual project details coming soon. Part of a collection of approximately six to seven posters used in-store to communicate promotions, services and customer applications.",
    "tools": ""
  }
];

const gallery = document.querySelector("#design-gallery");
const dialog = document.querySelector("#design-dialog");
const closeButton = dialog.querySelector(".dialog-close");
document.querySelector("#gallery-empty").hidden = projects.length > 0;

for (const project of projects) {
  const tile = document.createElement("button");
  tile.type = "button";
  tile.className = "design-tile";
  tile.setAttribute("aria-label", "Learn more about " + project.title);

  const image = document.createElement("img");
  image.addEventListener("error", () => { image.src = "images/placeholder.svg"; }, { once: true });
  image.src = project.image;
  image.alt = project.alt || project.title;
  image.loading = "lazy";

  const overlay = document.createElement("span");
  overlay.className = "design-overlay";
  const title = document.createElement("strong");
  title.textContent = project.title;
  const action = document.createElement("span");
  action.textContent = "Learn More";
  overlay.append(title, action);
  tile.append(image, overlay);
  tile.addEventListener("click", () => {
    document.querySelector("#design-title").textContent = project.title;
    const fullImage = document.querySelector("#design-image");
    fullImage.onerror = () => { fullImage.onerror = null; fullImage.src = "images/placeholder.svg"; };
    fullImage.src = project.image;
    fullImage.alt = project.alt || project.title;
    document.querySelector("#design-story").textContent = project.story;
    document.querySelector("#design-tools").textContent = project.tools ? "Tools: " + project.tools : "";
    dialog.showModal();
  });
  gallery.append(tile);
}
closeButton.addEventListener("click", () => dialog.close());
