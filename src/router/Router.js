import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Main from "../components/Main";
import Tables from "../components/Tables";
import Charts from "../components/Charts";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Main />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="/charts" element={<Charts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
