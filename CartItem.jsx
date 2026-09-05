```jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "./CartSlice";
import { Link } from "react-router-dom";
import "./CartItem.css";

function CartItem() {
  const dispatch = useDispatch();

  // Get cart items from Redux
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate total number of plants
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Calculate total cost of the cart
  const totalCost = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Checkout message
  const handleCheckout = () => {
    alert("Coming Soon! Checkout functionality will be available soon.");
  };

  return (
    <div className="cart-page">
      {/* Navbar */}
      <nav className="cart-navbar">
        <Link to="/" className="cart-logo">
          🌿 Paradise Nursery
        </Link>

        <div className="cart-nav-links">
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>

          <Link to="/cart" className="active-cart">
            🛒 Cart
            <span className="cart-count">{totalItems}</span>
          </Link>
        </div>
      </nav>

      {/* Page Header */}
      <header className="cart-header">
        <p>PARADISE NURSERY</p>
        <h1>Shopping Cart</h1>
      </header>

      <main className="cart-container">
        {cartItems.length === 0 ? (
          /* Empty Cart */
          <div className="empty-cart">
            <div className="empty-icon">🛒</div>
            <h2>Your cart is empty</h2>
            <p>
              You haven't added any plants to your cart yet.
            </p>

            <Link to="/plants" className="continue-shopping">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <section className="cart-items">
              {cartItems.map((item) => {
                const itemTotal = item.price * item.quantity;

                return (
                  <div className="cart-item" key={item.id}>
                    {/* Thumbnail */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-item-image"
                    />

                    {/* Product Information */}
                    <div className="cart-item-info">
                      <h2>{item.name}</h2>
                      <p>
                        Unit Price:{" "}
                        <strong>${item.price.toFixed(2)}</strong>
                      </p>

                      {/* Quantity Controls */}
                      <div className="quantity-controls">
                        <button
                          onClick={() =>
                            dispatch(decreaseQuantity(item.id))
                          }
                          aria-label={`Decrease ${item.name} quantity`}
                        >
                          −
                        </button>

                        <span>{item.quantity}</span>

                        <button
                          onClick={() =>
                            dispatch(increaseQuantity(item.id))
                          }
                          aria-label={`Increase ${item.name} quantity`}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Item Total and Delete */}
                    <div className="cart-item-right">
                      <p className="item-total">
                        ${(itemTotal).toFixed(2)}
                      </p>

                      <button
                        className="delete-button"
                        onClick={() =>
                          dispatch(removeFromCart(item.id))
                        }
                        aria-label={`Remove ${item.name} from cart`}
                      >
                        🗑 Delete
                      </button>
                    </div>
                  </div>
                );
              })}
            </section>

            {/* Cart Summary */}
            <section className="cart-summary">
              <div className="summary-row">
                <span>Total Plants</span>
                <strong>{totalItems}</strong>
              </div>

              <div className="summary-row total-row">
                <span>Total Cost</span>
                <strong>${totalCost.toFixed(2)}</strong>
              </div>

              {/* Checkout */}
              <button
                className="checkout-button"
                onClick={handleCheckout}
              >
                Checkout
              </button>

              {/* Continue Shopping */}
              <Link
                to="/plants"
                className="continue-shopping-summary"
              >
                Continue Shopping
              </Link>
            </section>
          </>
        )}
      </main>
    </div>
  );
}

export default CartItem;
```

### `CartItem.css`

```css
* {
  box-sizing: border-box;
}

.cart-page {
  min-height: 100vh;
  background: #f7faf5;
  color: #24352a;
  font-family: Arial, Helvetica, sans-serif;
}

/* Navbar */
.cart-navbar {
  height: 75px;
  padding: 0 7%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
  position: sticky;
  top: 0;
  z-index: 100;
}

.cart-logo {
  color: #315c3b;
  text-decoration: none;
  font-size: 22px;
  font-weight: bold;
}

.cart-nav-links {
  display: flex;
  align-items: center;
  gap: 30px;
}

.cart-nav-links a {
  color: #315c3b;
  text-decoration: none;
  font-weight: 600;
}

.cart-nav-links a:hover {
  color: #6c925b;
}

.active-cart {
  display: flex;
  align-items: center;
  gap: 8px;
}

.cart-count {
  min-width: 24px;
  height: 24px;
  padding: 3px 7px;
  border-radius: 50%;
  background: #315c3b;
  color: white;
  font-size: 13px;
  text-align: center;
}

/* Header */
.cart-header {
  text-align: center;
  padding: 60px 20px 40px;
}

.cart-header p {
  color: #71915e;
  letter-spacing: 3px;
  font-size: 13px;
  font-weight: bold;
}

.cart-header h1 {
  font-size: 48px;
  margin: 12px 0;
}

/* Container */
.cart-container {
  width: 86%;
  max-width: 1100px;
  margin: auto;
  padding-bottom: 80px;
}

/* Cart Items */
.cart-items {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.cart-item {
  background: white;
  border-radius: 15px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 25px;
  box-shadow: 0 4px 15px rgba(30, 60, 35, 0.07);
}

.cart-item-image {
  width: 130px;
  height: 130px;
  border-radius: 12px;
  object-fit: cover;
}

.cart-item-info {
  flex: 1;
}

.cart-item-info h2 {
  margin: 0 0 12px;
  font-size: 23px;
}

.cart-item-info p {
  color: #68756b;
  margin-bottom: 18px;
}

/* Quantity */
.quantity-controls {
  display: flex;
  align-items: center;
  gap: 12px;
}

.quantity-controls button {
  width: 34px;
  height: 34px;
  border: 1px solid #cbd8c6;
  background: #f4f8f2;
  color: #315c3b;
  border-radius: 6px;
  font-size: 20px;
  cursor: pointer;
}

.quantity-controls button:hover {
  background: #dfead9;
}

.quantity-controls span {
  min-width: 25px;
  text-align: center;
  font-weight: bold;
}

/* Right side */
.cart-item-right {
  min-width: 130px;
  text-align: right;
}

.item-total {
  color: #315c3b;
  font-size: 21px;
  font-weight: bold;
  margin-bottom: 20px;
}

.delete-button {
  border: none;
  background: transparent;
  color: #b34d4d;
  cursor: pointer;
  font-weight: bold;
}

.delete-button:hover {
  text-decoration: underline;
}

/* Summary */
.cart-summary {
  background: white;
  margin-top: 30px;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(30, 60, 35, 0.07);
  margin-left: auto;
  max-width: 450px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  color: #68756b;
}

.total-row {
  border-top: 1px solid #dce5d9;
  margin-top: 10px;
  padding-top: 20px;
  color: #24352a;
  font-size: 22px;
}

/* Checkout */
.checkout-button {
  width: 100%;
  border: none;
  padding: 15px;
  margin-top: 25px;
  border-radius: 8px;
  background: #315c3b;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}

.checkout-button:hover {
  background: #47754f;
}

/* Continue Shopping */
.continue-shopping,
.continue-shopping-summary {
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
}

.continue-shopping {
  margin-top: 20px;
  padding: 14px 25px;
  border-radius: 8px;
  background: #315c3b;
  color: white;
}

.continue-shopping-summary {
  width: 100%;
  margin-top: 15px;
  padding: 12px;
  border: 1px solid #315c3b;
  border-radius: 8px;
  color: #315c3b;
}

/* Empty Cart */
.empty-cart {
  background: white;
  padding: 70px 30px;
  text-align: center;
  border-radius: 15px;
}

.empty-icon {
  font-size: 60px;
  margin-bottom: 20px;
}

.empty-cart h2 {
  font-size: 28px;
}

.empty-cart p {
  color: #68756b;
  margin-bottom: 20px;
}

/* Responsive */
@media (max-width: 700px) {
  .cart-navbar {
    height: auto;
    padding: 18px 5%;
    flex-direction: column;
    gap: 15px;
  }

  .cart-nav-links {
    gap: 15px;
  }

  .cart-header h1 {
    font-size: 38px;
  }

  .cart-container {
    width: 92%;
  }

  .cart-item {
    flex-wrap: wrap;
  }

  .cart-item-image {
    width: 100px;
    height: 100px;
  }

  .cart-item-info {
    min-width: 60%;
  }

  .cart-item-right {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .item-total {
    margin: 0;
  }
}
```

### Add the routes in `App.jsx`

Your routing should include all three pages:

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./ProductList";
import CartItem from "./CartItem";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

This gives you the required flow:

**Home → Plants → Add to Cart → Cart → Increase/Decrease/Delete → Checkout / Continue Shopping**

The cart totals are calculated directly from the Redux state, so they update automatically whenever the quantity changes or an item is removed.
