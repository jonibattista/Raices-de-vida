import { useState } from "react";
import { useCart } from "../context/CartContext";
import { db } from "/src/firebaseConfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const CheckoutForm = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const [orderId, setOrderId] = useState(null);
  const [buyer, setBuyer] = useState({ nombre: "", email: "", telefono: "" });

  const handleChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!buyer.nombre || !buyer.email || !buyer.telefono) return;

    const order = {
      buyer,
      items: cart.map(({ id, title, price, quantity }) => ({
        id,
        title,
        price,
        quantity,
      })),
      total: cartTotal,
      date: Timestamp.fromDate(new Date()),
    };

    try {
      const ordersRef = collection(db, "orders");
      const doc = await addDoc(ordersRef, order);
      setOrderId(doc.id);
      clearCart();
    } catch (error) {
      console.error("Error al generar orden:", error);
    }
  };

  if (orderId) {
    return (
      <div className="container mt-5 text-center">
        <h2 className="text-success">¡Gracias por tu compra!</h2>
        <p className="mt-3">Tu código de orden es:</p>
        <h4 className="text-primary">{orderId}</h4>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2>Finalizar compra</h2>
      <form onSubmit={handleSubmit} className="row g-3 mt-3">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            name="nombre"
            placeholder="Nombre"
            value={buyer.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6">
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Email"
            value={buyer.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6">
          <input
            type="tel"
            className="form-control"
            name="telefono"
            placeholder="Teléfono"
            value={buyer.telefono}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-12 mt-3">
          <button type="submit" className="btn btn-success">
            Comprar
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
