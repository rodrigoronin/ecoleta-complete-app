import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import CreatePoint from "./pages/CreatePoint";

const Routes = () => {
  return (
    <BrowserRouter>
      {/* Necessário usar o "exact" na home, pois caso as outras rotas tenham "/" sempre vai cair na home */}
      {/* "exact" espera o caminho idêntico ao especificado no "path" */}
      <Route component={Home} path="/" exact />{" "}
      <Route component={CreatePoint} path="/create-point" />
    </BrowserRouter>
  );
};

export default Routes;
