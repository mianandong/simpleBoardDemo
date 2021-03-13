import BaseShape, { Origin } from "./baseShapeModel.js";

export default class LoveShapeModel extends BaseShape {
  constructor() {
    super("Love", new Origin({
      width: 162,
      height: 149,
      path: 'M 80.8138 148.668 l -67.0907 -67.0907 c -18.2975 -18.2975 -18.2975 -48.7932 0 -67.7684 c 18.2975 -18.2975 48.1156 -18.2975 67.0907 -0.677684 c 18.9752 -17.6198 48.1156 -17.6198 67.0907 0.677684 c 18.2975 18.2975 18.2975 48.7932 0 67.7684 l -0.677684 0.677684 l -0.677684 0.677684 l -65.7353 65.7353 Z'
    }));
  }
}
