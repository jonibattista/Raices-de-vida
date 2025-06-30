import Item from "./Item";

const ItemList = ({ productos }) => (
  <div className="row">
    {productos.map((p) => (
      <Item key={p.id} producto={p} />
    ))}
  </div>
);

export default ItemList;
