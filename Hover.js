function Hover(element, whatToSee) {
  this.element = element;
  this.whatToSee = whatToSee;
}

Hover.prototype.listenersLoad = function listenersLoad() {
  this.element.addEventListener("pointerenter", this.showDropdown.bind(this));
  this.element.addEventListener("pointerleave", this.hideDropdown.bind(this));
};

Hover.prototype.showDropdown = function showDropdown() {
  this.element.appendChild(this.whatToSee);
};

Hover.prototype.hideDropdown = function hideDropdown() {
  this.element.removeChild(this.whatToSee);
};

export default Hover;
