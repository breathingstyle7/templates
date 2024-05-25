import footerTpl from "../templates/footer_tpl.hbs";

const bodyRef = document.querySelector("body");
const footer = footerTpl();

bodyRef.insertAdjacentHTML("beforeend", footer);
