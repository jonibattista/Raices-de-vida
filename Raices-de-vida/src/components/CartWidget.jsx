import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cartQuantity } = useCart();

  return (
    <Link to="/cart" className="text-white position-relative">
      <span role="img" aria-label="carrito" style={{ fontSize: "1.5rem" }}>
        🛒
      </span>
      {cartQuantity > 0 && (
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {cartQuantity}
        </span>
      )}
    </Link>
  );
};

export default CartWidget;
