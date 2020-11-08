import Unit from "./unit.js";

export default class Balloon extends Unit {
  constructor() {
    super();
    this.isMyChat = false;
    this.rowSize = 20;
    this.columnSize = 20;
    this.paddingSize = 5;
    this.marginSize = 10;
    this.rows = 1;
    this.columns = 3 + parseInt(Math.random() * 7);
    this.order = 1;
  }

  update() {}

  draw(ctx) {
    const height = this.rowSize * this.rows + this.paddingSize * 2;
    const width = this.columnSize * this.columns + this.paddingSize * 2;
    const x = this.isMyChat
      ? this.canvasWidth - (width + this.marginSize)
      : this.marginSize;
    const y = this.canvasHeigh - (height + this.marginSize) * this.order;

    ctx.fillStyle = "#FFF";
    this.roundedRect(ctx, x, y, width, height, this.rowSize / 3);

    ctx.fillStyle = "#000";
    ctx.fillText(
      `order: ${this.order}, rwos: ${this.rows}, columns: ${this.columns}`,
      x,
      y + 10
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
