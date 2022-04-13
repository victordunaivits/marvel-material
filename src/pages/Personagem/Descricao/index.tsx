import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import { IDescription } from "./IDescricao";

export default function Descricao({ nome, descricao, imagem }: IDescription) {
  const Imagem = styled("img")({
    width: "100%",
    objectFit: "contain",
  });

  return (
    <>
      <Typography component="h6" fontSize={15} fontWeight={"500"}>
        Personagem Marvel
      </Typography>
      <Typography component="h5" fontSize={22} fontWeight={"500"}>
        {nome}
      </Typography>
      <Typography component="p" marginY={3}>
        {descricao}
      </Typography>
      <Imagem src={imagem} />
    </>
  );
}
