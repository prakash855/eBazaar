import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const StateContext = createContext();

const ContextProvider = ({ children }) => {
  const [state, setState] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const {
          data: { products },
        } = await axios.get(`api/products`);
        setState(products);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);
  return (
    <StateContext.Provider value={state}>{children}</StateContext.Provider>
  );
};

const useDataContext = () => useContext(StateContext);

export { ContextProvider, useDataContext };
