import Point from "../Point";
import random from "lodash/random";

export default function createPoints() {
  const points = [];
  for (let i = 0; i < 100; i++) {
    const x = random(0, 590);
    const y = random(0, 590);
    const color = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`; // 生成十六进制色值
    const point = new Point(x, y, 5, color);

    points.push(point);
  }

  return points;
}
