export const initVal = { count: {}, products: [], cart: [] };
export const INCREMENT = "increment";
export const DECREMENT = "decrement";
export const PRODUCTS = "products";
export const DELETE_ITEM = "delete";
export const RESET = "reset";
export const REMOVE_FROM_CART = "removed";

export function reducer(state, action) {
  switch (action.type) {
    case PRODUCTS:
      return { ...state, products: action.payload };

    case INCREMENT:
      const { id } = action.payload;
      const newCount = (state.count[id] || 0) + 1;
      const product = state.products.find((prod) => prod.id === id);
      const cartIndex = state.cart.findIndex((item) => item.id === id);
      let updatedCart;

      if (cartIndex === -1) {
        updatedCart = [...state.cart, { ...product, quantity: 1 }];
      } else {
        updatedCart = state.cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      return {
        ...state,
        count: { ...state.count, [id]: newCount },
        cart: updatedCart,
      };

    case DECREMENT: {
      const { id } = action.payload;
      const newCount = Math.max((state.count[id] || 0) - 1, 0);
      const updatedCart = state.cart
        .map((cart) =>
          cart.id === id
            ? { ...cart, quantity: Math.max(cart.quantity - 1, 0) }
            : cart
        )
        .filter((item) => item.quantity > 0);

      return {
        ...state,
        count: { ...state.count, [id]: newCount },
        cart: updatedCart,
      };
    }
    case DELETE_ITEM: {
      const { id } = action.payload;

      const updatedCart = state.cart.filter((item) => item.id !== id);
      return {
        ...state,
        cart: updatedCart,
      };
    }
    case RESET:
      return { ...state, cart: [], count: {} };
    case REMOVE_FROM_CART:
      const removeCart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      return { ...state, cart: removeCart };

    default:
      return state;
  }
}
