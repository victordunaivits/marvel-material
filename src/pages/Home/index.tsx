/* eslint-disable react-hooks/exhaustive-deps */
import { Grid, Link, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../data";

export default function Home() {
  const navigate = useNavigate();
  const Img = styled("img")({
    width: "100%",
    objectFit: "contain",
    margin: "0",
    cursor: "pointer",
    transition: 'ease-in-out .3s'
  });

  const [personagens, setPersonagens] = useState<any[]>([]);

  useEffect(() => {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((res) => setPersonagens(res.data.results));
  }, []);
  console.log(personagens);

  return (
    <>
      <Grid container width={"90%"} mx={"auto"} spacing={2} margin={2}>
        {personagens.map((personagem) => (
          <Grid
            item
            xs={6}
            sm={6}
            md={3}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            height={"100%"}
            key={personagem.id}
          >
            <Link onClick={() => navigate(`/personagem/${personagem.id}`)}>
              <Img
                src={`${personagem.thumbnail.path}.${personagem.thumbnail.extension}`}
                alt="img"
                sx={{
                  ':hover': {
                    transform: 'scale(1.05)'
                  }
                }}
              />
            </Link>
            <Typography component={"p"} mt={1}>
              {personagem.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
