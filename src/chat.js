import Unit from "./unit.js";
import Balloon from "./balloon.js";
import HeartBalloon from "./heartballoon.js";

export default class Chat extends Unit {
  constructor() {
    super();
    this.balloons = [];
    this.lastCreatedAt = new Date();
  }

  update() {
    this.createBalloon();
    this.updateBalloons();
    this.removeHiddenBalloons();
  }

  draw(ctx) {
    this.balloons.forEach((b) => b.draw(ctx));
  }

  addHeartBalloon(isMyChat = true) {
    const balloon = new HeartBalloon();
    balloon.isMyChat = isMyChat;
    balloon.resize(this.canvasWidth, this.canvasHeigh);
    this.balloons.unshift(balloon);
    this.lastCreatedAt = new Date();
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

  updateBalloons() {
    let preBalloonStartY = this.canvasHeigh;
    this.balloons.forEach((b, i) => {
      b.order = i + 1;
      b.update();
      b.sy = preBalloonStartY - b.fullHeight;
      preBalloonStartY = b.sy;
    });
  }

  removeHiddenBalloons() {
    const hiddenBalloons = this.balloons.filter((b) => b.ey < 0);
    this.balloons.splice(
      this.balloons.length - hiddenBalloons.length,
      hiddenBalloons.length
    );
  }
}
