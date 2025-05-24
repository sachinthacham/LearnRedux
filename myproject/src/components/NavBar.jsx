import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/cart");
  };

  const cartProducts = useSelector((state) => state.cart);
  return (
    <nav className="bg-white shadow-md w-full">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-indigo-600">
          WebApp
        </a>

        <div className="flex items-center space-x-8">
          <button onClick={handleNavigate}>My Bag {cartProducts.length}</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
