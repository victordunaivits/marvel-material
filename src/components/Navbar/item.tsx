import { AppBar, Box, Link } from "@mui/material";
import { styled } from "@mui/system";
import logo from "../../assets/logo-marvel.png";

export default function Navbar() {
  const LogoMarvel = styled("img")({
    height: "50px",
  });

  const Navbar = styled(AppBar)({
    position: "static",
    boxShadow: "none",
  });

  return (
    <Navbar position="static">
      <Box
        bgcolor={"#780a0a"}
        height={75}
        display={"flex"}
        alignItems={"center"}
      >
        <Link href='/' marginLeft={'15%'}>
          <LogoMarvel src={logo} alt="logo" />
        </Link>

      </Box>
    </Navbar>
  );
}
