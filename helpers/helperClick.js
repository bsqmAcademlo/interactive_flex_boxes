export const clicChangeProperty = (valueContent, container, placeProperty) => {
    valueContent.forEach((element) => {
        element.addEventListener("click", (e) => {
            let property = e.target.dataset.value;
            container.style[placeProperty] = property;
        });
    });
};
