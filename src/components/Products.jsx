import React from "react";
import CartItem from "./CartItem";
import Product from "./Product";

const Products = (props) => {
  const { products, cart, addToCart, removeProduct, removeSingle } = props;

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl text-center">Products</h1>
      <div className="mt-5 flex flex-col gap-3">
        {products.map((product, index) => {
          const item = cart.find((item) => item.id === product.id);
          return item ? (
            <CartItem
              key={index}
              product={item}
              removeProduct={removeProduct}
              addToCart={addToCart}
              removeSingle={removeSingle}
            />
          ) : (
            <Product key={index} product={product} addToCart={addToCart} />
          );
        })}
      </div>
      {cart.length !== 0 ? (
        <div className="flex justify-end bg-gray-500 text-white p-5">
          <p className="font-bold">Total Price : {getTotalPrice()}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Products;
