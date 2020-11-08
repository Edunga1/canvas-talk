import Unit from "./unit.js";
import Balloon from "./balloon.js";

export default class Chat extends Unit {
  constructor() {
    super();
    this.balloons = [];
    this.lastCreatedAt = new Date();
  }

  update() {
    this.createBalloon();
    this.balloons.forEach((b, i) => {
      b.order = i + 1;
      b.update();
    });
  }

  draw(ctx) {
    console.log(this.balloons.length);
    this.balloons.forEach((b) => b.draw(ctx));
  }

  createBalloon() {
    const now = new Date();

    if (now - this.lastCreatedAt < 1000) {
      return;
    }

    this.lastCreatedAt = now;

    const balloon = new Balloon();
    balloon.isMyChat = Math.random() > 0.5;
    balloon.resize(this.canvasWidth, this.canvasHeigh);
    this.balloons.unshift(balloon);
  }
}
