import { CssBaseline, Stack } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/item";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Personagem from "./pages/Personagem";
import { useState } from "react";
import { styled } from "@mui/system";

export default function App() {
  const [personagemID, setPersonagemID] = useState<number | null>(null);
  const Div = styled(Stack)({
    height: "100vh",
  });

  const Main = styled("main")({
    flexGrow: 1,
    background: "#fff"
  });

  return (
    <>
      <CssBaseline />
      <Div>
        <Navbar />
        <BrowserRouter>
          <Main>
            <Routes>
              <Route
                path="/"
                element={<Home setPersonagemID={setPersonagemID} />}
              ></Route>
              <Route
                path="/personagem"
                element={<Personagem personagemID={personagemID} />}
              ></Route>
            </Routes>
          </Main>
        </BrowserRouter>
        <Footer />
      </Div>
    </>
  );
}
