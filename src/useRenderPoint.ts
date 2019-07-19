import Point from "./Point";
import { useCallback, useReducer } from "react";
import reducer, { Reducer } from "./reducer";
import random from "lodash/random";

export default function useRenderPoint(
  defaultPoints: Point[]
): [Point[], (idx: number) => void] {
  const [state, dispatch] = useReducer<Reducer>(reducer, defaultPoints);

  const onPointClick = useCallback(
    (index: number) => {
      const radius = random(2, 10);
      const x = random(0, 598 - state[index].x - 2 * radius);
      const y = random(0, 598 - state[index].y - 2 * radius);
      const color = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`; // 生成十六进制色值
      const newPoint = state[index]
        .move(x, y)
        .changeColor(color)
        .changeRadius(radius);

      dispatch({
        type: "POINT_MOVE",
        payload: { idx: index, point: newPoint }
      });
    },
    [state]
  );

  return [state, onPointClick];
}
