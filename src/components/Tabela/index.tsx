import {
  Box,
  LinearProgress,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { ITabela } from "./ITabela";
import { getComicsID } from "../../helpers/split";
import { MyTableCell, MyTableCellDescription, MyTableCellName } from "./styles";
import { Fragment } from "react";
import { ts, hash } from "../../data";

export default function Tabela({
  list,
  setIdComic,
  idComic,
  description,
  setDescription,
  setStatus,
  status
}: any) {
  function apiStorie(idComic: string) {
    fetch(
      `https://gateway.marvel.com:443/v1/public/comics/${idComic}?ts=${ts}&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${hash}`
    )
      .then((res) => res.json())
      .then((res) => {
        setDescription(res.data.results[0]);
        setIdComic(idComic);
      });
  }

  // const handleAction = (resourceURI: string) => {
  //   if (idComic === resourceURI) {
  //     setIdComic("");
  //   } else {
  //     setIdComic(resourceURI);
  //     setStatus(status)
  //     setTimeout(
  //       () => {
  //         apiStorie(resourceURI);
  //       },
  //       500
  //     );
  //   }
  // };

  const handleAction = async (resourceURI: string) => {
    await setIdComic(resourceURI)
    
    if(idComic !== resourceURI){
      setStatus(true)
      setIdComic(resourceURI)
    }
    
      setTimeout(() => {
        apiStorie(resourceURI)
      }, 500)
  }


  return (
    <Box marginY={3}>
      <TableContainer>
        <Typography
          textAlign={"center"}
          variant="h6"
          fontSize={18}
          fontWeight={"bold"}
          marginBottom={2}
        >
          Histórias
        </Typography>

        <Table size="small">
          <TableHead>
            <TableRow>
              <MyTableCell align="center">ID</MyTableCell>
              <MyTableCell align="center" colSpan={5}>
                Titulo
              </MyTableCell>
              <MyTableCell align="center">Tipo</MyTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list?.map((item: ITabela) => {
              return (
                <Fragment key={getComicsID(item.resourceURI)}>
                  <TableRow>
                    <MyTableCell align="center">
                      {getComicsID(item.resourceURI)}
                    </MyTableCell>
                    <MyTableCellName
                      colSpan={5}
                      align="center"
                      onClick={() => {
                        handleAction(getComicsID(item.resourceURI));
                        setDescription('')
                        setStatus(!status)  
                      }}
                      key={item.name}
                    >
                      {item.name}
                    </MyTableCellName>
                    <MyTableCell align="center" key={item.type}>
                      {item.type}
                    </MyTableCell>
                  </TableRow>

                  {status && idComic === getComicsID(item.resourceURI) ? (
                    <TableRow>
                      <MyTableCellDescription colSpan={12}>
                        <Typography component={"p"} fontSize={14}>
                          {!description ? <LinearProgress color="inherit" /> : description}
                        </Typography>
                      </MyTableCellDescription>
                    </TableRow>
                  ) : null}
                  
                </Fragment>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
