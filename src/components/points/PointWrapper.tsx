import styled from "styled-components";

interface Props {
  x: number;
  y: number;
  radius: number;
  color: string;
}

const PointWrapper = styled.span<Props>`
  position: absolute;
  width: ${props => props.radius * 2}px;
  height: ${props => props.radius * 2}px;
  border-radius: 50%;
  background-color: ${props => props.color};
  left: ${props => props.x}px;
  top: ${props => props.y}px;
  cursor: pointer;
`;

export default PointWrapper;
