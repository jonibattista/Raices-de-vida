import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [cantidad, setCantidad] = useState(initial);
  const inc = () => cantidad < stock && setCantidad(cantidad + 1);
  const dec = () => cantidad > 1 && setCantidad(cantidad - 1);

  return (
    <div className="d-flex gap-2 align-items-center mt-3">
      <button
        className="btn btn-secondary"
        onClick={dec}
        disabled={cantidad <= 1}
      >
        -
      </button>
      <span>{cantidad}</span>
      <button
        className="btn btn-secondary"
        onClick={inc}
        disabled={cantidad >= stock}
      >
        +
      </button>
      <button className="btn btn-primary" onClick={() => onAdd(cantidad)}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
