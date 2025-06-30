import { Link } from "react-router-dom";

const Item = ({ producto }) => (
  <div className="col-md-4 mb-4">
    <div className="card h-100">
      <img
        src={producto.thumbnail}
        className="card-img-top"
        alt={producto.title}
        style={{ height: 200, objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h5>{producto.title}</h5>
        <p className="mt-auto fw-bold">${producto.price}</p>
        <Link to={`/item/${producto.id}`} className="btn btn-primary mt-2">
          Ver detalle
        </Link>
      </div>
    </div>
  </div>
);

export default Item;
