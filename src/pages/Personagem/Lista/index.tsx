import { Container, Typography } from "@mui/material";
import { styled } from "@mui/material";
import { ILista } from './ILista'
import { getComicsID } from "../../../helpers/split";


export default function Lista({ listComics }: any) {
  const Li = styled("li")({
    marginTop: "3px",
    fontSize: ".9rem",
  });

  return (
    <Container>
      <Typography component={"h1"} fontSize={15} fontWeight={"500"}>
        Lista de aparições (comics)
      </Typography>
      
      {listComics?.map((item: ILista) => (
        <Li key={getComicsID(item.resourceURI)}>{item.name}</Li>
      ))}

    </Container>
  );
}
