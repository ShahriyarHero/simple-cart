import React from "react";

const Product = (props) => {
  const { product, addToCart } = props;
  return (
    <div className="p-4 bg-slate-200 items-center grid grid-cols-3 gap-3">
      <h1 className="text-xl">{product.name}</h1>
      <p>${product.price}</p>
      <button
        className="bg-black text-white p-2"
        onClick={() => addToCart(product)}
      >
        Add to cart
      </button>
    </div>
  );
};

export default Product;
