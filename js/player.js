class Player {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.left = 60;
    this.top = 550;
    this.width = 40;
    this.height = 80;
    this.directionX = 0;
    this.directionY = 0;
    this.element = document.createElement("img");
    this.element.src = "../images/car.png";
    this.element.style.position = "absolute";
    this.element.style.height = `${this.height}px`;
    this.element.style.width = `${this.width}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
    this.gameScreen.appendChild(this.element);
  }
  move() {
    if (this.left >= 60) {
      this.left += this.directionX;
    } else {
      this.top = 0;
    }
    if (this.left <= 440 - this.width) {
    }
  }
}
