import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

export default function Tabela() {
  const MyTableCell = styled(TableCell)({
    border: "solid 1px",
  });

  return (
    <>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <MyTableCell align="center">ID</MyTableCell>
              <MyTableCell align="center" width={'65%'}>Titulo</MyTableCell>
              <MyTableCell align="center">Tipo</MyTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <MyTableCell align="center">Teste</MyTableCell>
              <MyTableCell align="center">Teste</MyTableCell>
              <MyTableCell align="center">Teste</MyTableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
