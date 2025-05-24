import React from "react";
import Navbar from "./NavBar";
import { Provider } from "react-redux";
import store from "../store/Store";
import { Outlet } from "react-router-dom";

const LayoutPage = () => {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <main>
          <Outlet />
        </main>
      </div>
    </Provider>
  );
};

export default LayoutPage;
