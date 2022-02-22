// modal window

const modalBtnFilter = document.querySelector("#modalBtnFilter");
const popupFilter = document.querySelector("#popupFilter");
const menuFilter = document.querySelector("#menuFilter").cloneNode(1);
const body = document.body;

modalBtnFilter.addEventListener("click", modalBtnHandler);

function modalBtnHandler(e) {
    e.preventDefault();
    popupFilter.classList.toggle("open");
    modalBtnFilter.classList.toggle("active");
    body.classList.toggle("noscroll");
    renderPopup();
}

function renderPopup() {
    popupFilter.appendChild(menuFilter);
}