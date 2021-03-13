import BaseShape, { Origin } from "./baseShapeModel.js";

export default class MoonShapeModel extends BaseShape {
  constructor() {
    super("Moon", new Origin({
      width: 162,
      height: 149,
      path: "M75 0C88 0 100 3 111 9L112 10 111 10C81 17 58 43 58 75 58 107 81 133 111 140L112 140 111 141C100 147 88 150 75 150 34 150 0 116 0 75 0 34 34 0 75 0z"
    }));
  }
}
