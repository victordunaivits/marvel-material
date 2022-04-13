import { CssBaseline } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/item";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Personagem from "./pages/Personagem";

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/personagem/:id" element={<Personagem />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </CssBaseline>
  </React.StrictMode>,
  document.getElementById("root")
);
