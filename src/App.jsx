import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import Layout from "./Layout/Layout";
import { RouterProvider } from "react-router";
const App = () => {
  const myLuxury = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<Layout />} />
  ));

  return (
    <>
      <RouterProvider router={myLuxury} />
    </>
  );
};

export default App;
