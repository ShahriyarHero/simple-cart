import React from "react";
import Product from "./Product";

const Products = (props) => {
  const { products, addToCart } = props;

  return (
    <div className="p-4">
      <h1 className="text-3xl text-center">Products</h1>
      <div className="mt-5 flex flex-col gap-3">
        {products.map((product, index) => (
          <Product key={index} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Products;
