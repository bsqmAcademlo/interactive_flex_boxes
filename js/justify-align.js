import { clicChangeProperty } from "../helpers/helperClick.js";

const valueJustifyContent = document.querySelectorAll(
        "#buttons_justify_content button"
    ),
    valueAlingItems = document.querySelectorAll("#buttons_align_items button"),
    containerAlination = document.querySelector(".alineacion");

export const justyfiContentClick = () =>
    clicChangeProperty(
        valueJustifyContent,
        containerAlination,
        "justifyContent"
    );

export const alingItemsClick = () =>
    clicChangeProperty(valueAlingItems, containerAlination, "alignItems");
