import Balloon from "./balloon.js";

export default class HeartBalloon extends Balloon {
  constructor() {
    super();
    this.rows = 3;
    this.columns = 3;
  }

  draw(ctx) {
    super.draw(ctx);
    const x = this.sx - 20 + this.width / 2;
    const y = this.sy - 10 + this.height / 2;
    HeartBalloon.drawHeart(ctx, x, y);
  }

  static drawHeart(ctx, x, y) {
    ctx.beginPath();
    ctx.strokeStyle = "#F00";
    ctx.moveTo(x + 17, y + 14);
    ctx.lineTo(x + 17, y + 14);
    ctx.lineTo(x + 17, y + 13);
    ctx.lineTo(x + 17, y + 12);
    ctx.lineTo(x + 16, y + 11);
    ctx.lineTo(x + 15, y + 10);
    ctx.lineTo(x + 14, y + 10);
    ctx.lineTo(x + 14, y + 9);
    ctx.lineTo(x + 13, y + 9);
    ctx.lineTo(x + 12, y + 9);
    ctx.lineTo(x + 11, y + 9);
    ctx.lineTo(x + 10, y + 10);
    ctx.lineTo(x + 10, y + 11);
    ctx.lineTo(x + 10, y + 12);
    ctx.lineTo(x + 10, y + 13);
    ctx.lineTo(x + 11, y + 14);
    ctx.lineTo(x + 12, y + 14);
    ctx.lineTo(x + 12, y + 15);
    ctx.lineTo(x + 13, y + 16);
    ctx.lineTo(x + 14, y + 16);
    ctx.lineTo(x + 15, y + 17);
    ctx.lineTo(x + 16, y + 18);
    ctx.lineTo(x + 17, y + 18);
    ctx.lineTo(x + 18, y + 18);
    ctx.lineTo(x + 19, y + 18);
    ctx.lineTo(x + 20, y + 18);
    ctx.lineTo(x + 21, y + 18);
    ctx.lineTo(x + 21, y + 17);
    ctx.lineTo(x + 21, y + 16);
    ctx.lineTo(x + 21, y + 15);
    ctx.lineTo(x + 21, y + 14);
    ctx.lineTo(x + 20, y + 13);
    ctx.lineTo(x + 19, y + 12);
    ctx.lineTo(x + 18, y + 12);
    ctx.lineTo(x + 17, y + 12);
    ctx.lineTo(x + 17, y + 14);
    ctx.lineTo(x + 17, y + 15);
    ctx.lineTo(x + 17, y + 16);
    ctx.lineTo(x + 18, y + 17);
    ctx.lineTo(x + 18, y + 18);
    ctx.lineTo(x + 19, y + 18);
    ctx.lineTo(x + 20, y + 18);
    ctx.lineTo(x + 21, y + 18);
    ctx.lineTo(x + 22, y + 17);
    ctx.lineTo(x + 23, y + 16);
    ctx.lineTo(x + 24, y + 14);
    ctx.lineTo(x + 24, y + 13);
    ctx.lineTo(x + 25, y + 12);
    ctx.lineTo(x + 25, y + 11);
    ctx.lineTo(x + 25, y + 10);
    ctx.lineTo(x + 25, y + 9);
    ctx.lineTo(x + 26, y + 9);
    ctx.lineTo(x + 26, y + 8);
    ctx.lineTo(x + 27, y + 8);
    ctx.lineTo(x + 27, y + 7);
    ctx.lineTo(x + 27, y + 6);
    ctx.lineTo(x + 27, y + 5);
    ctx.lineTo(x + 27, y + 4);
    ctx.lineTo(x + 26, y + 4);
    ctx.lineTo(x + 25, y + 4);
    ctx.lineTo(x + 25, y + 5);
    ctx.lineTo(x + 24, y + 6);
    ctx.lineTo(x + 24, y + 7);
    ctx.lineTo(x + 23, y + 7);
    ctx.lineTo(x + 22, y + 7);
    ctx.lineTo(x + 22, y + 8);
    ctx.lineTo(x + 21, y + 9);
    ctx.lineTo(x + 21, y + 10);
    ctx.lineTo(x + 21, y + 11);
    ctx.lineTo(x + 21, y + 12);
    ctx.lineTo(x + 21, y + 13);
    ctx.lineTo(x + 21, y + 14);
    ctx.lineTo(x + 20, y + 14);
    ctx.lineTo(x + 19, y + 14);
    ctx.lineTo(x + 18, y + 14);
    ctx.lineTo(x + 17, y + 13);
    ctx.lineTo(x + 16, y + 13);
    ctx.lineTo(x + 16, y + 12);
    ctx.lineTo(x + 15, y + 11);
    ctx.lineTo(x + 14, y + 11);
    ctx.lineTo(x + 13, y + 11);
    ctx.lineTo(x + 13, y + 12);
    ctx.lineTo(x + 13, y + 13);
    ctx.lineTo(x + 13, y + 14);
    ctx.lineTo(x + 14, y + 14);
    ctx.lineTo(x + 15, y + 14);
    ctx.lineTo(x + 15, y + 15);
    ctx.lineTo(x + 15, y + 16);
    ctx.stroke();
    ctx.closePath();
  }
}
