const CartWidget = ({ count = 0 }) => {
  return (
    <a href="#" className="text-white position-relative">
      <span role="img" aria-label="carrito" style={{ fontSize: "1.5rem" }}>
        🛒
      </span>
      {count > 0 && (
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {count}
        </span>
      )}
    </a>
  );
};

export default CartWidget;
