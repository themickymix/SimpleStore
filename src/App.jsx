import "./App.css";
import { MainContext } from "./Context";
import { INCREMENT, REMOVE_FROM_CART } from "./Reducer";

function App() {
  const {
    state: { count, products, cart },
    dispatch,
  } = MainContext();

  const handleAddToCart = (id) => {
    dispatch({ type: INCREMENT, payload: { id } });
  };

  const handleRemoveFromCart = (id) => {
    dispatch({ type: REMOVE_FROM_CART, payload: { id } });
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-10 p-2">
        {products.map((item) => {
          const counted = count[item.id] || 0;
          const isInCart = cart.some((cartItem) => cartItem.id === item.id);

          return (
            <div key={item.id} className="product-card">
              <img
                src={item.image.desktop}
                className="product-image rounded-md"
                alt={item.name}
              />
              <span>{item.name}</span>
              <div>{"$"+item.price}</div>

              <div className="flex justify-evenly items-center">
                {!isInCart ? (
                  <button
                    onClick={() => handleAddToCart(item.id)}
                    className="add-to-cart-btn bg-purple-800 text-white rounded-full px-5">
                    Add to Cart
                  </button>
                ) : (
                  <>
                    <button
                      onClick={() => handleRemoveFromCart(item.id)}
                      className="remove-cart-btn text-xs text-white rounded-full px-5">
                      Remove from Cart
                    </button>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
