import { useContext } from "react";
import { ItemsContext } from "./ContextProvider"; 

export default function useItems() {
  return useContext(ItemsContext);
}
