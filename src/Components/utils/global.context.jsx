import axios from "axios";
import { createContext, useEffect, useReducer } from "react";

export const initialState = {
  theme: {
    light: "light",
    dark: "dark",
  },
  data: [],
  favs: JSON.parse(localStorage.getItem("favs")) || []
};

export const ContextGlobal = createContext(undefined); 

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_THEME": {
      const newTheme = state.theme === "light" ? "dark" : "light";
      return { ...state, theme: newTheme };
    }
    case "SET_FAV": {
      return { ...state, data: action.payload };
    }
    case "ADD_FAV": {
      return { ...state, favs: [...state.favs, action.payload] };
    }
    case "REMOVE_FAV": {
      return { ...state, favs: state.favs.filter((fav) => fav.id !== action.payload.id) };
    }
    default: {
      return state;
    }
  }
};

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(reducer, {...initialState, theme: "light"});

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs))
  }, [state.favs]);
  console.log(state);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) =>{
        dispatch({type: "SET_FAV", payload: response.data})
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const toggleTheme = () => {
    dispatch({
      type: "SET_THEME",
    });
  };
  return (
    <ContextGlobal.Provider value={{ state, dispatch, toggleTheme}}>
      {children}
    </ContextGlobal.Provider>
  );
};
