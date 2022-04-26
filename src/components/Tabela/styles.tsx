import { Stack, TableCell } from "@mui/material";
import { styled } from "@mui/system";

export const MyTableCell = styled(TableCell)({
  border: "solid 1px",
});

export const MyTableCellDescription = styled(TableCell)({
  border: "solid 1px #380400",
  background: "#d43f3f",
  padding: "20px 30px",
  color: "#fff",
});

export const MyTableCellName = styled(TableCell)({
  border: "solid 1px #000",
  transition: "ease-in-out .2s",
  cursor: "pointer",
  "&:hover": {
    background: "#d43f3f",
    color: '#fff'
  },
});

export const TableFlex = styled(Stack)({
  flexDirection: "row",
});
