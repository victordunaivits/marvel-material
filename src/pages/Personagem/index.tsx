import Descricao from "./Descricao";
import Lista from "./Lista";
import { Grid } from "@mui/material";

function App() {
  return (
    <>
      <Grid container xs={12} sm={12} md={12} lg={12} xl={12}>
        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
          <Descricao />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Lista />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
