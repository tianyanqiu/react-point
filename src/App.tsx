import React from "react";
import { PointPage } from "./components";
import { ThemeProvider } from "styled-components";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={{}}>
      <PointPage />
    </ThemeProvider>
  );
};

export default App;
