import { createContext, useEffect, useState, useReducer } from "react";

export const initialState = {theme: "", data: []}

const themeReducer = (state, action) => {
  switch(action.type) {
      case "LIGHT":
          return {
            clase: ""
          };
      case "DARK":
          return {
            clase: "dark"};
      default: 
          return state;
  }
};

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const initialState = {clase:""};

  const [state, dispatch] = useReducer(themeReducer, initialState);

  const [dataDentistas, setDataDentistas] = useState([]);
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setDataDentistas(data);
    })
    .catch((e) => console.log(e))
    }, []);

  return (
    <ContextGlobal.Provider value={{dataDentistas, setDataDentistas, state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;
