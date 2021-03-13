import { Paper } from './paper';

export default function (origin, dest) {
  // 支持复合路径
  const CompoundPath = new Paper.CompoundPath(origin.path);
  CompoundPath.scale((dest.width) / (origin.width), (dest.height) / (origin.height), new Paper.Point(0, 0));
  return CompoundPath.pathData;
}
