import React from "react";
import { MainContext } from "./Context";
import { DECREMENT, INCREMENT, RESET } from "./Reducer";

function MyCart() {
  const {
    state: { cart },
    dispatch,
  } = MainContext();

  const totalcart = cart.reduce((item, total) => item + total.quantity, 0);
  const totalprice = cart.reduce(
    (item, total) => item + total.quantity * total.price,
    0
  );

  return (
    <div className="md:pl-[20%] md:pr-[20%] pt-5">
      {cart.length > 0 ? (
        <ul className="space-y-4">
          {cart.map((item) => {
            const total = item.quantity * item.price;
            return (
              <li key={item.id} className="flex justify-between items-center">
                <span className="flex items-center w-full">
                  <img
                    src={item.image.desktop}
                    alt={item.name}
                    className="w-20 rounded-md shadow"
                  />
                  <div className="flex flex-col ml-2 w-full">
                    <span>{item.name}</span>

                    <span className=" w-full flex">
                      <div className="flex-shrink-0">
                        <span>Subtotal: ${total.toFixed(2)}</span>
                      </div>
                      <div className="flex-grow flex justify-end items-center ">
                        <span className="flex gap-5">
                          <button
                            onClick={() =>
                              dispatch({
                                type: DECREMENT,
                                payload: { id: item.id },
                              })
                            }>
                            -
                          </button>
                          <span>{item.quantity}</span>{" "}
                          <button
                            onClick={() =>
                              dispatch({
                                type: INCREMENT,
                                payload: { id: item.id },
                              })
                            }>
                            +
                          </button>
                        </span>
                      </div>
                    </span>
                  </div>
                </span>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No items in cart</p>
      )}

      <footer className="flex justify-end items-center   text-base-content p-10">
        <aside>
          <div>
            <p>Total items: {totalcart}</p>
            <p>Total price: ${totalprice.toFixed(2)}</p>
            <button className="btn" onClick={() => dispatch({ type: RESET })}>
              Check Out
            </button>
          </div>
        </aside>
      </footer>
    </div>
  );
}

export default MyCart;
