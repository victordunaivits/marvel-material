import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import imagemPersonagem from "../../../assets/personagem.jpg";
import React from "react";
import Tabela from "../Tabela";

export default function Personagem() {
  const ImgPersonagem = styled("img")({
    width: "100%",
    marginTop: 20,
    objectFit: "contain",
  });

  return (
    <Box
      marginTop={3}
      width={"100%"}
      display={"flex"}
      justifyContent={"center"}
      marginBottom={4}
    >
      <Box width={"70%"} marginRight={"1rem"}>
        <Box>
          <Typography variant="h6" component="h6">
            Personagem Marvel
          </Typography>
          <Typography variant="h4" component="h4">
            Hulk
          </Typography>

          <Typography component="p" fontSize={15} marginTop={4}>
            Caught in a gamma bomb explosion while trying to save the life of a
            teenager, Dr. Bruce Banner was transformed into the incredibly
            powerful creature called the Hulk. An all too often misunderstood
            hero, the angrier the Hulk gets, the stronger the Hulk gets.
          </Typography>

          <ImgPersonagem src={imagemPersonagem} />
          <Tabela />
        </Box>
      </Box>
    </Box>
  );
}
