import { Suspense, lazy, useEffect } from "react";
import qs from "qs";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setAddProduct } from "./utils/slices/cartSlice";
import { setViewedProducts } from "./utils/slices/singleProductSlice";
import { setSinglePortfolio } from "./utils/slices/singlePortfolioSlice";

import "./scss/GlobalStyles.scss"

const App = () => {
  return (
    <></>
  );
}

export default App;
