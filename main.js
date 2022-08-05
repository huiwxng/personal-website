const projects = document.getElementsByClassName("projects");
const projectTitles = document.getElementsByClassName("project_titles");
const projectImages = document.getElementsByClassName("project_images");

const closeModalButton = document.getElementById("close_button");
const overlay = document.getElementById("overlay");
const modal = document.getElementById("project_popup");

function openModal() {
    let popupTitle = document.getElementById("popup_title");
    let popupImage = document.getElementById("popup_img");
    let popupRepo = document.getElementById("popup_repo_link");
    let popupPages = document.getElementById("popup_pages_link");

    popupTitle.innerHTML = this.children[1].innerHTML;
    popupImage.src = this.children[0].src;
    popupRepo.href = this.children[2].innerHTML;
    popupPages.href = this.children[3].innerHTML;
    
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal() {
    modal.classList.remove('active');
    overlay.classList.remove('active');
}

closeModalButton.onclick = closeModal;
overlay.onclick = closeModal;

for (let project of projects) {
    project.onclick = openModal;
}