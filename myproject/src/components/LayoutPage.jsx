import React from "react";
import Navbar from "./NavBar";
import { Provider } from "react-redux";
import store from "../store/Store";
import { Outlet } from "react-router-dom";

const LayoutPage = ({ darkMode, setDarkMode }) => {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="container mx-auto px-4 py-8">
          <Outlet />
        </main>
      </div>
    </Provider>
  );
};

export default LayoutPage;
