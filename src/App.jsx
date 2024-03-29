import { useState, useEffect } from "react";
import Products from "./components/Products";

const App = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data.products));

    const localCart = JSON.parse(localStorage.getItem("cart"));
    setCart(localCart || []);
  }, []);

  const updateCart = (newCart) => {
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
  };

  const addToCart = (product) => {
    const item = cart.find((item) => item.id === product.id);

    if (!item) {
      return updateCart([...cart, { ...product, quantity: 1 }]);
    }

    updateCart(
      cart.map((item) =>
        item.id == product.id
          ? { ...product, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const removeProduct = (productId) => {
    const newCart = cart.filter((item) => item.id !== productId);
    updateCart(newCart);
  };

  const removeSingle = (productId) => {
    const item = cart.find((item) => item.id === productId);

    if (item && item.quantity > 1) {
      const newCart = cart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      );

      return setCart(newCart);
    }

    removeProduct(productId);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <Products
        products={products}
        addToCart={addToCart}
        cart={cart}
        removeProduct={removeProduct}
        removeSingle={removeSingle}
      />
    </div>
  );
};

export default App;
