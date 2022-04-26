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
    color: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    borderBottom: 'solid 3px #780808',
    transition: 'ease-in-out .1s',
    borderRadius: '3px',
    background: '#ad1818',
    '&:hover': {
      transform: 'scale(1.02)'
    }
  })

  export const GridContainer = styled(Grid)({
    display: 'flex',
    justifyContent: 'space-around',
    flex: 1,
  })