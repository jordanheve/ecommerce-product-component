import { createContext, useState } from "react";
import product from "../data/data";

const ItemsContext = createContext();

const ContextProvider = ({ children }) => {
  const [order, setOrder] = useState([]);

  const handleAddToCart = ({ ...product }) => {
    const existingProductIndex = order.findIndex((orderProduct) => orderProduct.id === product.id);
    if (existingProductIndex !== -1) {
      const updatedOrder = [...order];
      updatedOrder[existingProductIndex].quantity += 1;
      setOrder(updatedOrder);
    } else {
      setOrder([...order, product]);
    }
  }

  return (
    <ItemsContext.Provider
      value={{
        order,
        handleAddToCart
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
}

export default ContextProvider;
export { ItemsContext };
