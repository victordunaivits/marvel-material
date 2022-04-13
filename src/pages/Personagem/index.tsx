/* eslint-disable react-hooks/exhaustive-deps */
import { Grid } from "@mui/material";
import { ts, publicKey, hash } from "../../data";
import { useEffect, useState } from "react";
import { IPersonagem } from "./IPersonagem";
import Lista from "./Lista";
import Descricao from "./Descricao";
import Tabela from "./Tabela";
import { useParams } from "react-router-dom";

export default function Personagem() {
  const { id } = useParams();
  const [personagem, setPersonagem] = useState<IPersonagem>();

  useEffect(() => {
    fetch(`http://gateway.marvel.com/v1/public/characters/${id}?ts=${ts}&apikey=${publicKey}&hash=${hash}`)
      .then((res) => res.json())
      .then((res) => setPersonagem(res.data.results[0]));
  }, []);

  return (
    <Grid
      container
      direction={{
        xs: "column",
        sm: "column",
        md: "row",
      }}
    >
      <Grid
        item
        width={{
          xs: "100%",
          sm: "100%",
          md: "65%",
        }}
        paddingLeft={{
          xs: "5%",
          sm: "5%",
          md: "15%",
        }}
        paddingRight={"2%"}
        paddingY={"20px"}
      >
        <Descricao
          nome={personagem?.name}
          descricao={personagem?.description}
          imagem={`${personagem?.thumbnail.path}.${personagem?.thumbnail.extension}`}
        />
        <Tabela list={personagem?.stories.items} />
      </Grid>

      <Grid
        item
        bgcolor="#bf2d2d"
        color={"#fff"}
        width={{
          xs: "100%",
          sm: "100%",
          md: "25%",
        }}
        paddingY={"30px"}
      >
        <Lista listComics={personagem?.comics.items} />
      </Grid>
    </Grid>
  );
}
