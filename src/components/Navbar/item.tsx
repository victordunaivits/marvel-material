import { Box, Link } from "@mui/material";
import logo from "../../assets/logo-marvel.png";
import { MyNavbar, LogoMarvel } from './styles'

export default function Navbar() {
  return (
    <MyNavbar position="static">
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
    </MyNavbar>
  );
}
