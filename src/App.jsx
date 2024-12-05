
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import { useContext } from "react";
import { ContextGlobal } from "./Components/utils/global.context";
import ThemeStyles from "./Styles/Theme.module.css";

const App = () => {
  const {state} = useContext(ContextGlobal);

  return (
    <div className={`${ThemeStyles.root} ${state.theme === "light" ? ThemeStyles.light : ThemeStyles.dark}`}>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dentist/:id" element={<Detail />} />
          <Route path="/favs" element={<Favs />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
