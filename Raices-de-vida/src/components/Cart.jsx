import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart, cartTotal, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container mt-5 text-center">
        <h2>Carrito vacío</h2>
        <Link to="/" className="btn btn-primary mt-3">
          Volver al catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Tu carrito</h2>
      <div className="row">
        {cart.map((item) => (
          <div key={item.id} className="col-12 mb-3">
            <CartItem item={item} />
          </div>
        ))}
      </div>
      <h3 className="mt-4">Total: ${cartTotal.toFixed(2)}</h3>
      <div className="d-flex gap-3 mt-3">
        <button className="btn btn-warning" onClick={clearCart}>
          Vaciar carrito
        </button>
        <Link to="/checkout" className="btn btn-success">
          Finalizar compra
        </Link>
      </div>
    </div>
  );
};

export default Cart;
