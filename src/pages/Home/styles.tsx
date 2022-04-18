import { Card, Grid } from "@mui/material";
import { styled } from "@mui/system";

export const Img = styled("img")({
    width: '100%',
    objectFit: 'contain',
    cursor: "pointer",
    transition: 'ease-in-out .3s',
    filter: 'grayscale(1)',
    '&:hover': {
      transform: 'scale(1.05)',
      filter: 'grayscale(0)'
    }
  });

  export const MyCard = styled(Card)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0px 3px 5px #cccccc',
    borderRadius: '3px',
  })

  export const GridContainer = styled(Grid)({
    display: 'flex',
    justifyContent: 'space-around',
    flex: 1,
  })