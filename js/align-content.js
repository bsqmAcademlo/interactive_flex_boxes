import { clicChangeProperty } from "../helpers/helperClick.js";

const valueAlignContent = document.querySelectorAll(
    "#buttons_align_content button"
);
const containerAlignContent = document.querySelector(".align-content");

export const alignContentClick = () =>
    clicChangeProperty(
        valueAlignContent,
        containerAlignContent,
        "alignContent"
    );
