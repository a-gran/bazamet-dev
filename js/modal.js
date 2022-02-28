// modal window for filters

const modalBtnFilter = document.querySelector("#modalBtnFilter");
const popupFilter = document.querySelector("#popupFilter");
const menuFilter = document.querySelector("#menuFilter").cloneNode(1);
const bodyFilter = document.body;

modalBtnFilter.addEventListener("click", modalBtnHandler);

function modalBtnHandler(e) {
    e.preventDefault();
    popupFilter.classList.toggle("open");
    modalBtnFilter.classList.toggle("active");
    bodyFilter.classList.toggle("noscroll");
    renderPopup();
}

function renderPopupFilter() {
    popupFilter.appendChild(menuFilter);
}