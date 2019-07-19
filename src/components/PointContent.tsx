import React from "react";
import Point from "../Point";
import PointWrapper from "./PointWrapper";

interface Props {
  point: Point;
  onClick: () => void;
}

function PointContent(props: Props) {
  const { point } = props;
  return (
    <PointWrapper
      x={point.x}
      y={point.y}
      radius={point.radius}
      color={point.color}
      onClick={props.onClick}
    />
  );
}

export default React.memo(PointContent);
