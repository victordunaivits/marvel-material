/* eslint-disable react-hooks/exhaustive-deps */
import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Md5 } from "ts-md5";
import { useEffect, useState } from "react";

export default function Home() {
  const data: Date = new Date();
  const ts: number = data.getTime();
  const publicKey: string = "5ff1f65e5691411fe10ab2373e041485";
  const privateKey: string = "1f2d5b9a38886d3c869a27f266365d690f897a39";
  const hash: string = Md5.hashStr(`${ts}${privateKey}${publicKey}`);
  const baseUrl: string = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

  const Img = styled("img")({
    width: "100%",
    objectFit: "contain",
    margin: "0",
  });

  const [personagens, setPersonagens] = useState<any[]>([]);

  useEffect(() => {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((res) => setPersonagens(res.data.results));
  }, []);

  return (
    <>
      <Grid container width={"90%"} mx={"auto"} spacing={2} margin={2}>
        {personagens.map((perso) => (
          <Grid
            item
            xs={6}
            sm={6}
            md={3}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            height={"100%"}
            key={perso.id}
          >
            <Img src={perso.thumbnail.path + ".jpg"} alt="img" />
            <Typography component={"p"} mt={1}>
              {perso.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
