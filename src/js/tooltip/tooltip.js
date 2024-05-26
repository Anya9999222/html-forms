import "./tooltip.css";
export class Tooltip {
  constructor() {
    this._tooltip;
  }

  showTooltip(element) {
    const tooltipElement = document.createElement("div");
    const title = document.createElement("h2");
    const text = document.createElement("div");
    const arrow = document.createElement("span");

    title.textContent = "Popover title";
    text.textContent =
      "And here`s some amazing content. It`s very engaging. Right?";

    tooltipElement.appendChild(title);
    tooltipElement.appendChild(text);
    tooltipElement.appendChild(arrow);

    tooltipElement.classList.add("popover");
    text.classList.add("content");
    arrow.classList.add("arrow");

    const { left, top } = element.getBoundingClientRect();

    this._tooltip = tooltipElement;

    document.body.appendChild(tooltipElement);

    tooltipElement.style.left =
      left + element.offsetWidth / 2 - tooltipElement.offsetWidth / 2 + "px";
    tooltipElement.style.top = top - tooltipElement.offsetHeight - 10 + "px";
  }

  removeTooltip() {
    this._tooltip.remove();

    this._tooltip = null;
  }
}
