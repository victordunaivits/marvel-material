import { AppBar, Box } from "@mui/material";
import { styled } from "@mui/system";
import logo from "../../assets/logo-marvel.png";

export default function Navbar() {
  const LogoMarvel = styled("img")({
    height: "50px",
    position: "relative",
    left: "15%",
  });

  return (
    <AppBar position="static">
      <Box
        bgcolor={"#780a0a"}
        height={80}
        display={"flex"}
        alignItems={"center"}
      >
        <LogoMarvel src={logo} alt="logo" />
      </Box>
    </AppBar>
  );
}
