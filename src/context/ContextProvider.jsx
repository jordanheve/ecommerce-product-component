import { createContext, useState } from "react";
import toast from 'react-hot-toast'

const ItemsContext = createContext();

const ContextProvider = ({ children }) => {
  const [order, setOrder] = useState([]);

  const handleAddToCart = ({ ...product }, quantity) => {
    
    const existingProductIndex = order.findIndex((orderProduct) => orderProduct.id === product.id);
    if (quantity > 0) {
      
      if (existingProductIndex !== -1) {
        const updatedOrder = [...order];
        updatedOrder[existingProductIndex].quantity = quantity;
      setOrder(updatedOrder);
      toast.success('Product Updated')
      
    } else {
      setOrder([...order, {quantity, ...product}]);
      toast.success('Product Added')
    }
  } else {
    toast.error("Product can't be 0 ")
  }
} 
  
  const removeFromCart = (id) => {
    const filteredOrder = order.filter(order => order.id !==id)
    setOrder(filteredOrder)
  }

  return ( 
    <ItemsContext.Provider
      value={{
        order,
        handleAddToCart,
        removeFromCart
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
}

export default ContextProvider;
export { ItemsContext };
