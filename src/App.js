import React, { useState, Suspense, lazy } from "react";
import { ContextReservation } from "./context/Context.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./hooks/ScrollToTop";
// import Header from "./containers/Header/Header";
// import Footer from "./containers/Footer/Footer";
import Homepage from "./pages/Homepage/Homepage";
import MenuPage from "./pages/MenuPage/MenuPage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import { reservation } from "./content/reservation";
import "./styles/global.scss";

const Header = lazy(() => import("./containers/Header/Header"));
const Footer = lazy(() => import("./containers/Footer/Footer"));

const App = () => {
  const [reservationContext, setReservationContext] = useState(reservation);
  return (
    <BrowserRouter>
      <ScrollToTop />
      <>
        <ContextReservation.Provider
          value={[reservationContext, setReservationContext]}
        >
          <Suspense fallback={<div />}>
            <Header />
          </Suspense>
          <Routes>
            <Route exact path="/coffee-blend/" element={<Homepage />} />
            <Route path="/coffee-blend/menu" element={<MenuPage />} />
            <Route path="/coffee-blend/services" element={<ServicesPage />} />
            <Route path="/coffee-blend/about" element={<AboutPage />} />
            <Route path="/coffee-blend/contact" element={<ContactPage />} />
          </Routes>
          <Suspense fallback={<div />}>
            <Footer />
          </Suspense>
        </ContextReservation.Provider>
      </>
    </BrowserRouter>
  );
};
export default App;
