import ItemCount from "./ItemCount";
import { useCart } from "../context/CartContext";

const ItemDetail = ({ producto }) => {
  const { addItem } = useCart();

  const handleAdd = (qty) => {
    addItem(producto, qty);
  };

  return (
    <div className="container mt-4">
      <div className="card">
        <img
          src={producto.thumbnail}
          className="card-img-top"
          alt={producto.title}
          style={{ maxHeight: 400, objectFit: "cover" }}
        />
        <div className="card-body">
          <h2>{producto.title}</h2>
          <p>{producto.description}</p>
          <h4>${producto.price}</h4>
          <ItemCount stock={producto.stock} initial={1} onAdd={handleAdd} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
