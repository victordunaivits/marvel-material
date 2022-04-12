import React from "react";
import { Grid, List, ListItem, Typography } from "@mui/material";
import styled from "@emotion/styled";

const comic: String[] = [
  "FREE COMIC BOOK DAY 2013 1 (2013) #1",
  "Hulk (2008) #53",
  "Hulk (2008) #53",
  "Hulk (2008) #53",
];

function index() {
  const ListItens = styled(ListItem)({
    display: "list-item",
    listStyle: "circle",
  });

  return (
    <Grid
      bgcolor={"#a11818"}
      color={"#fff"}
      height={"100%"}
      padding={3}
      xs={12}
      sm={12}
      md={12}
      marginRight={{
        xs: "0",
        sm: "0",
        md: "7rem",
      }}
    >
      <List>
        <Typography fontSize={18} component="h4" marginLeft={2}>
          Lista de Aparições (comics)
        </Typography>
        {comic.map((item, index) => (
          <ListItens key={index}>{item}</ListItens>
        ))}
      </List>
    </Grid>
  );
}

export default index;
