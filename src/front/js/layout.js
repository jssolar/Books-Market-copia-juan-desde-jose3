import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
/* REGISTROS */
import Login from "./component/login/Login";
import Register from "./pages/Register";
import RegisterBook from "./pages/registerBook";

/* CATEGORIAS */
import { AllBooks } from "./pages/allBooks";
import { BookDetails } from "./pages/bookDetails";
import { SaleBooks } from "./pages/saleBooks";
import { ExchangeBooks } from "./pages/exchangeBooks";
import { DonacionesRealizadas } from "./pages/donacionesRalizadas";

import BookReviews from "./pages/BookReviews";

import Intercambio from "./pages/Intercambio";

import  PurchasedBooks  from "./pages/purchasedBooks";

import { Profile } from "./pages/profile";

import { SoldBooks } from "./pages/soldBooks";

/* FOOTERS */
import { MySaleBooks } from "./pages/mySaleBooks";
import { MyExchangeBooks } from "./pages/myExchangeBooks";
import { MyBuyDetails } from "./pages/myBuyDetails";
import { SobreNosotros } from "./pages/sobreNosotros";
import { NuestraHistoria } from "./pages/nuestraHistoria";
import { ComoDonar } from "./pages/comoDonar";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { MyInformation } from "./pages/myInformation";
import { OtherProfile } from "./pages/otherProfile";
import { MySoldDetails } from "./pages/mySoldDetails";
import { MyExchangeBookDetails } from "./pages/myExchangeBookDetails";
import { MySaleBookDetails } from "./pages/mySaleBookDetails";

const Layout = () => {
  const basename = process.env.BASENAME || "/";
  const [useAlternateNavbar, setUseAlternateNavbar] = useState(false); // Estado para controlar el Navbar alternativo
  if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "")
    return <BackendURL />;

  return (
    <div>
      <BrowserRouter>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<AllBooks />} path="/allBooks" />
            <Route element={<BookDetails />} path="/allBooks/bookDetails/:id" />
            <Route element={<SaleBooks />} path="/saleBooks" />
            <Route element={<ExchangeBooks />} path="/exchangeBooks" />
            <Route element={<MySaleBooks />} path="/mySaleBooks" />
            <Route element={<MyExchangeBooks />} path="/myExchangeBooks" />
            <Route element={<MyBuyDetails />} path="/myBuyDetails/:id" />
            <Route element={<MySoldDetails />} path="/mySoldDetails/:id" />
            <Route element={<SobreNosotros />} path="/sobreNosotros" />
            <Route element={<NuestraHistoria />} path="/nuestraHistoria" />
            <Route
              element={<DonacionesRealizadas />}
              path="/donacionesRalizadas"
            />
            <Route
              element={<MySaleBookDetails />}
              path="/mySaleBooks/mySaleBookDetails/:id"
            />
            <Route
              element={<MyExchangeBookDetails />}
              path="/myExchangeBooks/myExchangeBookDetails/:id"
            />
            <Route element={<MyInformation />} path="/myInformation" />

            <Route element={<ComoDonar />} path="/comoDonar" />
            <Route element={<BookReviews />} path="/bookreviews" />
            <Route element={<Login />} path="/login" />
            <Route element={<Intercambio />} path="/intercambio" />
            <Route element={<Register />} path="/register" />
            <Route element={<RegisterBook />} path="/registerBook" />
            <Route element={<PurchasedBooks />} path="/purchasedBooks" />

            <Route element={<Profile />} path="/profile" />
            <Route element={<OtherProfile />} path="/otherProfile/:id" />
            <Route element={<SoldBooks />} path="/soldBooks" />
            <Route element={<PurchasedBooks /> }  path='purchasedBooks'>
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
