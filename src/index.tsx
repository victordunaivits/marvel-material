import { CssBaseline } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/item";
import Personagem from "./pages/Personagem";
import Home from "./pages/Home";
import Footer from "./pages/Personagem/Footer";

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/personagem" element={<Personagem />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </CssBaseline>
  </React.StrictMode>,
  document.getElementById("root")
);
