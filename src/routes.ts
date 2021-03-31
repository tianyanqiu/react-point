import { PointPage, FirstDemo } from "./components";

const ROUTES = [
  {
    path: "/demo/firstChart",
    title: "简单示例",
    component: FirstDemo,
    exact: true,
  },
  {
    path: "/demo/points",
    name: "圆点图",
    component: PointPage,
    exact: true,
  },
];

export default ROUTES;
