import {
  Box,
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
import { Fragment  } from "react";

export default function Tabela({
  list,
  setIdComic,
  idComic,
  description,
}: any) {
  
  const handleAction = (resourceURI: string) => {
    if (idComic === resourceURI) {
      setIdComic("");
    } else {
      setIdComic(resourceURI);
    }
  };

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
                      }}
                      key={item.name}
                    >
                      {item.name}
                    </MyTableCellName>
                    <MyTableCell align="center" key={item.type}>
                      {item.type}
                    </MyTableCell>
                  </TableRow>
                  {idComic === getComicsID(item.resourceURI) ? (
                    <TableRow>
                      <MyTableCellDescription colSpan={12}>
                        <Typography component={"p"} fontSize={14}>
                          {description}
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
