/* eslint-disable react-hooks/exhaustive-deps */
import { CircularProgress, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MyStack } from "../../components/Loading/item";
import { ts, hash } from "../../data";
import { IHome } from "./IHome";
import { GridContainer, Img, MyCard } from "./styles";

export default function Home({
  setPersonagemID,
}: {
  setPersonagemID: React.Dispatch<React.SetStateAction<number | null>>;
}) {
  const [personagens, setPersonagens] = useState<IHome[] | null>(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(
        `http://gateway.marvel.com/v1/public/characters?series=22547&ts=${ts}&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${hash}`
      )
        .then((res) => res.json())
        .then((res) => setPersonagens(res.data.results));
    }, 500);
  }, []);
  // console.log(personagens);

  return (
    <>
      {!personagens ? (
        <MyStack>
          <CircularProgress color="error" />
        </MyStack>
      ) : (
        <GridContainer container spacing={2} paddingX={3} marginBottom={3}>
          {personagens.map((personagem) => (
            <Grid
              item
              xs={6}
              sm={6}
              md={3}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              key={personagem.id}
              marginTop={2}
            >
              <MyCard>
                <Link
                  to="/personagem"
                  onClick={() => setPersonagemID(personagem.id)}
                >
                  <Img
                    src={`${personagem.thumbnail.path}.${personagem.thumbnail.extension}`}
                    alt="img"
                  />
                </Link>
                <Typography component={"p"} marginY={1} padding={1}>
                  {personagem.name}
                </Typography>
              </MyCard>
            </Grid>
          ))}
        </GridContainer>
      )}
    </>
  );
}
