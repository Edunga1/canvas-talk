import Unit from "./unit.js";

export default class Balloon extends Unit {
  constructor() {
    super();
    this.isMyChat = false;
    this.rowSize = 30;
    this.columnSize = 30;
    this.paddingSize = 10;
    this.marginSize = 10;
    this.radius = this.rowSize / 3;
    this.rows = 1 + parseInt(Math.random() * 1.12);
    this.columns = 5 + parseInt(Math.random() * 5);
    this.order = 1;
    this.height = 0;
    this.width = 0;
    this.height = 0;
    this.fullWidth = 0;
    this.fullHeight = 0;
    this.sx = 0;
    this.sy = 0;
    this.ex = 0;
    this.ey = 0;
  }

  update() {
    this.width = this.columnSize * this.columns + this.paddingSize * 2;
    this.height = this.rowSize * this.rows + this.paddingSize * 2;
    this.fullWidth = this.width + this.marginSize;
    this.fullHeight = this.height + this.marginSize;
    this.sx = this.isMyChat
      ? this.canvasWidth - this.fullWidth
      : this.marginSize;
    this.ex = this.sx + this.fullWidth;
    this.ey = this.sy + this.fullHeight;
  }

  draw(ctx) {
    ctx.fillStyle = "#FFF";
    this.roundedRect(
      ctx,
      this.sx,
      this.sy,
      this.width,
      this.height,
      this.radius
    );
  }

  roundedRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x, y + radius);
    ctx.lineTo(x, y + height - radius);
    ctx.arcTo(x, y + height, x + radius, y + height, radius);
    ctx.lineTo(x + width - radius, y + height);
    ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
    ctx.lineTo(x + width, y + radius);
    ctx.arcTo(x + width, y, x + width - radius, y, radius);
    ctx.lineTo(x + radius, y);
    ctx.arcTo(x, y, x, y + radius, radius);
    ctx.fill();
  }
}
