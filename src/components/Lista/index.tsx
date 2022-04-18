import { Container, Typography } from "@mui/material";
import { getComicsID } from "../../helpers/split";
import { ILista } from './ILista'
import { Li } from './styles'

export default function Lista({ listComics }: any) {
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
