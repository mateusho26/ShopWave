function Cart({ cartCount }) {
  return (
    <div className="cart">
      🛒 Carrinho: <strong>{cartCount}</strong> produto(s)
    </div>
  );
}

export default Cart;