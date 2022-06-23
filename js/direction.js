import { clicChangeProperty } from "../helpers/helperClick.js";

const valueDirection = document.querySelectorAll("#buttons_direction button");
const containerDirection = document.querySelector(".direction");

export const directionClick = () =>
    clicChangeProperty(valueDirection, containerDirection, "flexDirection");
