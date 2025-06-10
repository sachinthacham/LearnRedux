import { useEffect, useState } from "react";
import LayoutPage from "./components/LayoutPage";
import { Routes, Route } from "react-router-dom";
import Product from "./components/Product";
import Cart from "./components/Cart";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
      <Routes>
        <Route
          path="/"
          element={<LayoutPage darkMode={darkMode} setDarkMode={setDarkMode} />}
        >
          <Route index element={<Product />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
