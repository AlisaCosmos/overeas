import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import * as cx from "classnames";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Agreement from "../src/pages/Agreement/Agreement";
import HelpModal from './components/HelpModal/HelpModal';

function App() {
  // открытие формы
  const [openedHelpModal, setOpenedHelpModal] = useState(false);
  const [openedRequestModal, setOpenedRequestModal] = useState(false);
  const handleHelpModal = () => {
    setOpenedHelpModal((curr) => !curr);
  }

  const { pathname } = useLocation();

  // снятие выделения на странице и скролл в начало при обновлении/открытии новой страницы
  useEffect(() => {
    clearSelection();
    window.scrollTo(0, 0);
    document.body.style = "";
  }, [pathname]);

  const clearSelection = () => {
    if (window.getSelection) {
      window.getSelection().removeAllRanges();
    } else {
      // старый IE
      document.selection.empty();
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    document.body.style = "";
  };

  return (
    <div className="App">
      <HelpModal handleModal={handleHelpModal} opened={openedHelpModal} />
      <Header scrollToTop={scrollToTop} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agreement" element={<Agreement />} />
        </Routes>
      </main>
      <Footer scrollToTop={scrollToTop}  handleModal={handleHelpModal}/>
    </div>
  );
}

export default App;
