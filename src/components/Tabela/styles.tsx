import { IconButton, Stack, TableCell } from "@mui/material";
import { styled } from "@mui/system";

export const MyTableCell = styled(TableCell)({
  border: "solid 1px",
});

export const MyTableCellDescription = styled(TableCell)({
  border: 'solid 1px #000',
  background: '#ab0a0a',
  padding: '20px 30px',
  color: '#fff',
});


export const MyTableCellName = styled(TableCell)({
  border: "solid 1px",
  transition: 'ease-in-out .2s',
  cursor: 'pointer',
  '&:hover': {
    background: '#d43f3f'
  }
});

export const TableFlex = styled(Stack)({
  flexDirection: 'row',
});

export const ButtonArrow = styled(IconButton)({
  margin: '0 20px 0 10px'
})