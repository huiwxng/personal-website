const projects = document.getElementsByClassName("projects");
const projectTitles = document.getElementsByClassName("project_titles");
const projectImages = document.getElementsByClassName("project_images");

const closeModalButton = document.getElementById("close_button");
const overlay = document.getElementById("overlay");
const modal = document.getElementById("project_popup");

function openModal() {
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal() {
    modal.classList.remove('active');
    overlay.classList.remove('active');
}

closeModalButton.onclick = closeModal;
overlay.onclick = closeModal;

for (let i = 0; i < projects.length; i++) {
    let project = projects[i];
    let projectTitle = projectTitles[i];
    let projectImage = projectImages[i];

    let popupTitle = document.getElementById("popup_title");
    let popupImage = document.getElementById("popup_img");

    popupTitle.innerHTML = projectTitle.innerHTML;
    popupImage.src = projectImage.src;

    project.onclick = openModal;
}