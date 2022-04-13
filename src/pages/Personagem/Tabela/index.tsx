import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import { ITabela } from "./ITabela";
import { getComicsID } from "../../../helpers/split";

export default function Tabela({ list }: any) {
  const MyTableCell = styled(TableCell)({
    border: "solid 1px",
  });

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
              <MyTableCell align="center" width={"65%"}>
                Titulo
              </MyTableCell>
              <MyTableCell align="center">Tipo</MyTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list?.map((item: ITabela) => {
              return (
                <TableRow key={getComicsID(item.resourceURI)}>
                  <MyTableCell align="center">
                    {getComicsID(item.resourceURI)}
                  </MyTableCell>
                  <MyTableCell align="center">{item.name}</MyTableCell>
                  <MyTableCell align="center">{item.type}</MyTableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
