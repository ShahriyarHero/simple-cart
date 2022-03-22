import React from "react";

const CartItem = (props) => {
  const { product } = props;

  return (
    <div className="p-4 bg-slate-200 grid grid-cols-7 items-center">
      <h1 className="text-xl col-span-2">{product.name}</h1>
      <p>{product.price}</p>
      <p>{product.quantity}</p>

      <div className="col-span-3 grid grid-cols-4 w-full">
        <button
          className="text-white bg-red-500 p-2"
          onClick={() => props.removeSingle(product.id)}
        >
          -
        </button>

        <button
          className="text-white bg-green-500 p-2"
          onClick={() => props.addToCart(product)}
        >
          +
        </button>

        <button
          className="text-white bg-black p-2 col-span-2"
          onClick={() => props.removeProduct(product.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
