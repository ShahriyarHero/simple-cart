import React from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
  const { cartItems, removeProduct, addToCart, removeSingle } = props;

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl text-center">Cart</h1>

      {cartItems.length == 0 ? (
        <h1 className="text-red-500 text-center my-5 font-bold">
          Nothing in the cart
        </h1>
      ) : null}

      <div className="mt-5 flex flex-col gap-3 transition-all">
        {cartItems.map((product, index) => (
          <CartItem
            key={index}
            product={product}
            removeProduct={removeProduct}
            addToCart={addToCart}
            removeSingle={removeSingle}
          />
        ))}
      </div>

      {cartItems.length !== 0 ? (
        <div className="flex justify-end bg-gray-500 text-white p-5">
          <p className="font-bold">Total Price : {getTotalPrice()}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Cart;
