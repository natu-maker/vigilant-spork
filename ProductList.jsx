```jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./CartSlice";
import { Link } from "react-router-dom";
import "./ProductList.css";

// Houseplant products
const categories = [
  {
    name: "Indoor Plants",
    plants: [
      {
        id: 1,
        name: "Snake Plant",
        price: 25,
        image:
          "https://images.unsplash.com/photo-1593482892290-f54927ae2c8a?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: 2,
        name: "Peace Lily",
        price: 30,
        image:
          "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: 3,
        name: "Monstera Deliciosa",
        price: 45,
        image:
          "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: 4,
        name: "ZZ Plant",
        price: 35,
        image:
          "https://images.unsplash.com/photo-1632207691144-4e4c1e7c4b8a?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: 5,
        name: "Rubber Plant",
        price: 40,
        image:
          "https://images.unsplash.com/photo-1597055181300-df90eaa4a6b5?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: 6,
        name: "Chinese Money Plant",
        price: 28,
        image:
          "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=500&q=80",
      },
    ],
  },

  {
    name: "Succulents",
    plants: [
      {
        id: 7,
        name: "Aloe Vera",
        price: 20,
        image:
          "https://images.unsplash.com/photo-1596547609652-9cf5d8b4a1c0?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: 8,
        name: "Echeveria",
        price: 18,
        image:
          "https://images.unsplash.com/photo-1515964388890-7a96b6f5a2a5?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: 9,
        name: "Jade Plant",
        price: 22,
        image:
          "https://images.unsplash.com/photo-1602923668104-8f9e8e5c8d8a?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: 10,
        name: "Haworthia",
        price: 19,
        image:
          "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: 11,
        name: "String of Pearls",
        price: 26,
        image:
          "https://images.unsplash.com/photo-1596547609652-9cf5d8b4a1c0?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: 12,
        name: "Burro's Tail",
        price: 24,
        image:
          "https://images.unsplash.com/photo-1533460004989-cef01064af7e?auto=format&fit=crop&w=500&q=80",
      },
    ],
  },

  {
    name: "Flowering Plants",
    plants: [
      {
        id: 13,
        name: "African Violet",
        price: 32,
        image:
          "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: 14,
        name: "Orchid",
        price: 50,
        image:
          "https://images.unsplash.com/photo-1566847438217-76e82d383f84?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: 15,
        name: "Anthurium",
        price: 38,
        image:
          "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: 16,
        name: "Begonia",
        price: 29,
        image:
          "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: 17,
        name: "Bromeliad",
        price: 42,
        image:
          "https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: 18,
        name: "Geranium",
        price: 27,
        image:
          "https://images.unsplash.com/photo-1495231916356-a86217efff12?auto=format&fit=crop&w=500&q=80",
      },
    ],
  },
];

function ProductList() {
  const dispatch = useDispatch();

  // Get cart items from Redux
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate total number of items in cart
  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Check whether a product is already in the cart
  const isInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  };

  // Add product to cart
  const handleAddToCart = (plant) => {
    if (!isInCart(plant.id)) {
      dispatch(addToCart(plant));
    }
  };

  return (
    <div className="product-page">
      {/* Navbar */}
      <nav className="product-navbar">
        <Link to="/" className="navbar-logo">
          🌿 Paradise Nursery
        </Link>

        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>

          <Link to="/cart" className="cart-link">
            🛒 Cart
            <span className="cart-count">{cartCount}</span>
          </Link>
        </div>
      </nav>

      {/* Page Header */}
      <header className="products-header">
        <p>PARADISE NURSERY</p>
        <h1>Our Plants</h1>
        <span>
          Discover beautiful plants to bring nature into your home.
        </span>
      </header>

      {/* Product Categories */}
      <main className="products-container">
        {categories.map((category) => (
          <section className="category" key={category.name}>
            <h2>{category.name}</h2>

            <div className="product-grid">
              {category.plants.map((plant) => {
                const added = isInCart(plant.id);

                return (
                  <article className="product-card" key={plant.id}>
                    <img
                      src={plant.image}
                      alt={plant.name}
                      className="plant-image"
                    />

                    <div className="product-info">
                      <h3>{plant.name}</h3>

                      <p className="price">
                        ${plant.price.toFixed(2)}
                      </p>

                      <button
                        className="add-button"
                        onClick={() => handleAddToCart(plant)}
                        disabled={added}
                      >
                        {added ? "Added to Cart ✓" : "Add to Cart"}
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default ProductList;
```

You can pair it with this CSS:

```css
* {
  box-sizing: border-box;
}

.product-page {
  min-height: 100vh;
  background: #f7faf5;
  color: #24352a;
  font-family: Arial, Helvetica, sans-serif;
}

/* Navbar */
.product-navbar {
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

.navbar-logo {
  color: #315c3b;
  text-decoration: none;
  font-size: 22px;
  font-weight: bold;
}

.navbar-links {
  display: flex;
  align-items: center;
  gap: 30px;
}

.navbar-links a {
  color: #315c3b;
  text-decoration: none;
  font-weight: 600;
}

.navbar-links a:hover {
  color: #6c925b;
}

.cart-link {
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
.products-header {
  text-align: center;
  padding: 70px 20px 50px;
}

.products-header p {
  color: #71915e;
  letter-spacing: 3px;
  font-weight: bold;
  font-size: 13px;
}

.products-header h1 {
  font-size: 52px;
  margin: 12px 0;
}

.products-header span {
  color: #6b776e;
  font-size: 17px;
}

/* Products */
.products-container {
  width: 86%;
  max-width: 1300px;
  margin: auto;
  padding-bottom: 80px;
}

.category {
  margin-bottom: 70px;
}

.category h2 {
  font-size: 30px;
  margin-bottom: 25px;
  padding-left: 15px;
  border-left: 5px solid #71915e;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}

/* Product Card */
.product-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(30, 60, 35, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 30px rgba(30, 60, 35, 0.13);
}

.plant-image {
  width: 100%;
  height: 240px;
  display: block;
  object-fit: cover;
}

.product-info {
  padding: 22px;
}

.product-info h3 {
  margin: 0 0 10px;
  font-size: 21px;
}

.price {
  margin: 0 0 18px;
  color: #63834f;
  font-size: 19px;
  font-weight: bold;
}

/* Add Button */
.add-button {
  width: 100%;
  border: none;
  padding: 13px;
  border-radius: 8px;
  background: #315c3b;
  color: white;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}

.add-button:hover:not(:disabled) {
  background: #47754f;
}

.add-button:disabled {
  background: #a8b6a7;
  cursor: not-allowed;
}

/* Responsive */
@media (max-width: 900px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .product-navbar {
    height: auto;
    padding: 18px 5%;
    flex-direction: column;
    gap: 15px;
  }

  .navbar-links {
    gap: 15px;
  }

  .products-header h1 {
    font-size: 40px;
  }

  .product-grid {
    grid-template-columns: 1fr;
  }

  .products-container {
    width: 90%;
  }
}
```

### What this implementation covers

* **18 unique plants** — 6 in each of 3 categories.
* Each plant has a **thumbnail, name, and price**.
* **Add to Cart** dispatches the Redux `addToCart` action.
* Once added, the button changes to **“Added to Cart ✓”** and becomes disabled.
* The navbar contains **Home, Plants, and Cart**.
* The cart icon displays the **total quantity dynamically**.
* Redux state is used to determine which products have already been added.
