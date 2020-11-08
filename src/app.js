import Chat from "./chat.js";

class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.context = this.canvas.getContext("2d");
    document.body.appendChild(this.canvas);
    window.addEventListener("resize", this.resize.bind(this));

    this.chat = new Chat();
    this.resize();

    requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.width = document.body.clientWidth;
    this.height = document.body.clientHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;

    this.chat.resize(this.width, this.height);
  }

  animate(t) {
    this.chat.update();
    this.draw();
  }

  draw() {
    this.context.clearRect(0, 0, this.width, this.height);
    this.context.fillStyle = "#9BBBD4";
    this.context.fillRect(0, 0, this.width, this.height);
    this.context.fill();

    this.chat.draw(this.context);

    requestAnimationFrame(this.animate.bind(this));
  }
}

window.onload = () => {
  new App();
};
