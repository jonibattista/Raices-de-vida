import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    new Promise((res) => setTimeout(res, 500))
      .then(() => fetch(`https://dummyjson.com/products/${itemId}`))
      .then((r) => r.json())
      .then((data) => setProducto(data))
      .finally(() => setLoading(false));
  }, [itemId]);

  if (loading) return <p className="text-center mt-5">Cargando detalle...</p>;
  if (!producto)
    return <p className="text-center mt-5">Producto no encontrado.</p>;

  return <ItemDetail producto={producto} />;
};

export default ItemDetailContainer;
