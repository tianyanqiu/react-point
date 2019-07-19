import React, { useMemo } from "react";
import PointContent from "./PointContent";
import useRenderPoint from "../useRenderPoint";
import createPoints from "../utils/createPoints";
import styled from "styled-components";

const Layout = styled.div`
  width: 600px;
  height: 600px;
  border: 1px solid rgba(0, 0, 0, 0.87);
`;

function PointPage() {
  const defaultPoints = useMemo(() => createPoints(), []);
  const [points, onPointClick] = useRenderPoint(defaultPoints);

  return (
    <Layout>
      {points.map((point, idx) => (
        <PointContent point={point} onClick={() => onPointClick(idx)} />
      ))}
    </Layout>
  );
}

export default PointPage;
