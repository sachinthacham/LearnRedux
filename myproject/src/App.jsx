import LayoutPage from "./components/LayoutPage";
import { Routes, Route } from "react-router-dom";
import Product from "./components/Product";
import Cart from "./components/Cart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutPage />}>
        <Route index element={<Product />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;
