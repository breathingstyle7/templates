import headerTpl from "../templates/header_tpl.hbs";

const bodyRef = document.querySelector("body");

const header_tpl = headerTpl();

bodyRef.insertAdjacentHTML("beforebegin", header_tpl);
