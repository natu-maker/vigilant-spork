```jsx
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    // Add a product to the cart
    addToCart: (state, action) => {
      const product = action.payload;

      const existingItem = state.items.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...product,
          quantity: 1,
        });
      }
    },

    // Remove a product completely from the cart
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },

    // Increase product quantity
    increaseQuantity: (state, action) => {
      const item = state.items.find(
        (item) => item.id === action.payload
      );

      if (item) {
        item.quantity += 1;
      }
    },

    // Decrease product quantity
    decreaseQuantity: (state, action) => {
      const item = state.items.find(
        (item) => item.id === action.payload
      );

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.items = state.items.filter(
          (item) => item.id !== action.payload
        );
      }
    },

    // Remove everything from the cart
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
```

### Example Redux store setup

Make sure your Redux store includes the cart reducer:

```jsx
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
```

Then you can add a plant to the cart from a component:

```jsx
import { useDispatch } from "react-redux";
import { addToCart } from "./CartSlice";

function PlantCard({ plant }) {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(addToCart(plant))}>
      Add to Cart
    </button>
  );
}
```

And read the cart contents with:

```jsx
import { useSelector } from "react-redux";

const cartItems = useSelector((state) => state.cart.items);
```

This structure works well for a **Paradise Nursery** shopping cart because each plant can be stored with its `id`, `name`, `price`, image, and `quantity`.
