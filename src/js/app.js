import Widget from "./widget/widget";

const container = document.querySelector(".container");

const widget = new Widget(container);

widget.bindToDOM();
