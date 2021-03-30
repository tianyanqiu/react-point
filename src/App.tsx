import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Route, BrowserRouter } from "react-router-dom";
import ROUTES from "./routes";
import NavList from "./components/NavList";
import { defaultTheme } from "@sinoui/theme";

const Layout = styled.div`
  display: flex;
`;

const ContentLayout = styled.div`
  position: relative;
  margin: 16px;
  box-sizing: border-box;
`;

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Layout>
          <NavList />
          <ContentLayout>
            {ROUTES.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                component={route.component}
                exact={route.exact}
              ></Route>
            ))}
          </ContentLayout>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
