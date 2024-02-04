import "../styles/Cart.css";

function Cart() {
  const plants = ["Monstera", "Lierre", "Fleurs"];
  const prices = [8, 10, 15];
  return (
    <div className="lmj-cart">
      <h2>Panier</h2>
      <ul>
        <li>
          {plants[0]} : {prices[0]}€
        </li>
        <li>
          {plants[1]} : {prices[1]}€
        </li>
        <li>
          {plants[2]} : {prices[2]}€
        </li>
      </ul>
      Total : {prices.reduce((a, b) => a + b, 0)}€
    </div>
  );
}

export default Cart;
