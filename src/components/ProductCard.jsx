function ProductCard({ title, price, image, onAddToCart }) {
  return (
    <div className="card">
      <img src={image} alt={title} />

      <h3>{title}</h3>

      <p>R$ {price}</p>

      <button onClick={onAddToCart}>
        Comprar
      </button>
    </div>
  );
}

export default ProductCard;