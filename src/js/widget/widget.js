import { Tooltip } from "../tooltip/tooltip";
import "./widget.css";
const tooltip = new Tooltip();
export default class Widget {
  constructor(parentEl) {
    this.parentEl = parentEl;

    this.onClick = this.onClick.bind(this);
  }

  static get markup() {
    return `
            <button class="toggle">Click to toggle popover</button>
        `;
  }

  static get selector() {
    return ".toggle";
  }

  bindToDOM() {
    this.parentEl.innerHTML = Widget.markup;

    this.element = this.parentEl.querySelector(Widget.selector);

    this.element.addEventListener("click", this.onClick);
  }

  onClick(e) {
    e.preventDefault();

    if (e.target.classList.contains("active")) {
      tooltip.removeTooltip();
      e.target.classList.remove("active");
    } else {
      tooltip.showTooltip(e.target);
      e.target.classList.add("active");
    }
  }
}
