/* eslint-disable react-hooks/exhaustive-deps */
import { CircularProgress, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { IPersonagem } from "./IPersonagem";
import Lista from "../../components/Lista";
import Descricao from "../../components/Descricao";
import Tabela from "../../components/Tabela";
import { ts, hash } from "../../data";
import { useNavigate } from "react-router-dom";
import { MyStack } from "../../components/Loading/item";
import { IDescriptionComics } from "../../components/Tabela/ITabela";
import { getComicsID } from "../../helpers/split";

export default function Personagem({
  personagemID,
}: {
  personagemID: number | null;
}) {
  const [personagem, setPersonagem] = useState<IPersonagem>();
  const [description, setDescription] = useState<IDescriptionComics>();
  const [idComic, setIdComic] = useState<string>();
  
  let navigate = useNavigate();

  function apiStorie(idComic: string) {
    fetch(
      `https://gateway.marvel.com:443/v1/public/comics/${idComic}?ts=${ts}&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${hash}`
    )
      .then((res) => res.json())
      .then((res) => { setDescription(res.data.results[0])
        setIdComic(idComic)
    });
  }

  useEffect(() => {
    if (personagemID === null) {
      navigate("/");
    } else {
      setTimeout(() => {
        fetch(
          `http://gateway.marvel.com/v1/public/characters/${personagemID}?ts=${ts}&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${hash}`
        )
          .then((res) => res.json())
          .then((res) => {
            const data = res.data.results[0];
            apiStorie(`${getComicsID(data.stories.items[0].resourceURI)}`);
            setPersonagem(res.data.results[0]);
          });
      }, 500);
    }
  }, []);
  
  useEffect(() => {
    if(idComic){
      apiStorie(idComic)
    }
  }, [idComic]);

  return (
    <>
      {!personagem ? (
        <MyStack>
          <CircularProgress color="error" />
        </MyStack>
      ) : (
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
            <Tabela
              list={personagem?.stories.items}
              setIdComic={setIdComic}
              idComic={idComic}
              description={description?.description}
            />
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
      )}
    </>
  );
}
