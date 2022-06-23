import { clicChangeProperty } from "../helpers/helperClick.js";

const valueWrap = document.querySelectorAll("#buttons_wrap button");
const containerWrap = document.querySelector(".wrap");

export const wrapClick = () =>
    clicChangeProperty(valueWrap, containerWrap, "flexWrap");
