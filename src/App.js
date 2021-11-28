import React, { useState, Suspense, lazy } from "react";
import { ContextReservation } from "./context/Context.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./hooks/ScrollToTop";
import Header from "./containers/Header/Header";
import Footer from "./containers/Footer/Footer";
import Homepage from "./pages/Homepage/Homepage";
// import MenuPage from "./pages/MenuPage/MenuPage";
// import ServicesPage from "./pages/ServicesPage/ServicesPage";
// import AboutPage from "./pages/AboutPage/AboutPage";
// import ContactPage from "./pages/ContactPage/ContactPage";
import { reservation } from "./content/reservation";
import "./styles/global.scss";

const MenuPage = lazy(() => import("./pages/MenuPage/MenuPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage/ServicesPage"));
const AboutPage = lazy(() => import("./pages/AboutPage/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage/ContactPage"));

const App = () => {
  const [reservationContext, setReservationContext] = useState(reservation);
  return (
    <BrowserRouter>
      <ScrollToTop />
      <>
        <ContextReservation.Provider
          value={[reservationContext, setReservationContext]}
        >
          <Header />
          <Routes>
            <Route exact path="/coffee-blend/" element={<Homepage />} />
            <Suspense fallback={<div />}>
              <Route path="/coffee-blend/menu" element={<MenuPage />} />
            </Suspense>
            <Suspense fallback={<div />}>
              <Route path="/coffee-blend/services" element={<ServicesPage />} />
            </Suspense>
            <Suspense fallback={<div />}>
              <Route path="/coffee-blend/about" element={<AboutPage />} />
            </Suspense>
            <Suspense fallback={<div />}>
              <Route path="/coffee-blend/contact" element={<ContactPage />} />
            </Suspense>
          </Routes>
          <Footer />
        </ContextReservation.Provider>
      </>
    </BrowserRouter>
  );
};
export default App;
