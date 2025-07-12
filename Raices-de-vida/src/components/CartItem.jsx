import { useCart } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { removeItem } = useCart();

  return (
    <div className="cart-item">
      <h4>{item.name}</h4>
      <p>Cantidad: {item.quantity}</p>
      <p>Precio unitario: ${item.price}</p>
      <p>Subtotal: ${item.quantity * item.price}</p>
      <button onClick={() => removeItem(item.id)}>Eliminar</button>
    </div>
  );
};

export default CartItem;
