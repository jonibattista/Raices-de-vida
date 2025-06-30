import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const url = categoryId
      ? `https://dummyjson.com/products/category/${categoryId}`
      : "https://dummyjson.com/products";

    new Promise((res) => setTimeout(res, 300))
      .then(() => fetch(url))
      .then((r) => r.json())
      .then((data) => setProducts(data.products || []))
      .finally(() => setLoading(false));
  }, [categoryId]);

  if (loading) return <p className="text-center mt-5">Cargando...</p>;

  return (
    <div className="container mt-4">
      <h2>{categoryId ? `Categoría: ${categoryId}` : "Todos los productos"}</h2>
      <ItemList productos={products} />
    </div>
  );
};

export default ItemListContainer;
