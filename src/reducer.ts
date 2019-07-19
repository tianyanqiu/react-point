import Point from "./Point";
import produce from "immer";

interface PointMoveAction {
  type: "POINT_MOVE";
  payload: { idx: number; point: Point };
}

export interface Reducer {
  (state: Point[], action: PointMoveAction): Point[];
}

const reducer = produce((draft: Point[], action: PointMoveAction) => {
  switch (action.type) {
    case "POINT_MOVE":
      draft[action.payload.idx] = action.payload.point;
      break;
    default:
      return draft;
  }
});

export default reducer;
