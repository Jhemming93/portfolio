// Add one entry per individual design. Use actual artwork and project details.
// Example shape: { title: "", image: "images/graphic-design/file.webp", alt: "", story: "", tools: "" }
const projects = [];

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
    fullImage.src = project.image;
    fullImage.alt = project.alt || project.title;
    document.querySelector("#design-story").textContent = project.story;
    document.querySelector("#design-tools").textContent = project.tools ? "Tools: " + project.tools : "";
    dialog.showModal();
  });
  gallery.append(tile);
}
closeButton.addEventListener("click", () => dialog.close());
