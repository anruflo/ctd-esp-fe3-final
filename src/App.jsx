
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import { useContext } from "react";
import { ContextGlobal } from "./Components/utils/global.context";
import ThemeStyles from "./Styles/Theme.module.css";
import NotFound from "./Routes/NotFound";
import Layout from "./Layouts/Layout";

const App = () => {
  const {state} = useContext(ContextGlobal);

  return (
    <div className={`${ThemeStyles.root} ${state.theme === "light" ? ThemeStyles.light : ThemeStyles.dark}`}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dentist/:id" element={<Detail />} />
            <Route path="/favs" element={<Favs />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
    </div>
  ); 
};

export default App;
