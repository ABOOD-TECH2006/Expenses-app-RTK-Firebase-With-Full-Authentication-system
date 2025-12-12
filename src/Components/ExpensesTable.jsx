// ExpensesTable.jsx
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Skeleton,
} from "@mui/material";
import ExpensesRow from "./ExpensesRowBody";
import { useSelector } from "react-redux";

const ExpensesTable = ({ isloading }) => {
  const skeletonRows = 6;
  const { expenses } = useSelector((state) => state.expenses);
    
  return (
    <TableContainer component={Paper} elevation={6}>
      <Table>
        <TableHead>
          <TableRow >
            <TableCell>Title</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Value</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isloading
            ? Array.from({ length: skeletonRows }).map((_, idx) => (
                <TableRow key={idx}>
                  <TableCell>
                    <Skeleton />
                  </TableCell>
                  <TableCell>
                    <Skeleton />
                  </TableCell>
                  <TableCell>
                    <Skeleton />
                  </TableCell>
                  <TableCell>
                    <Skeleton />
                  </TableCell>
                  <TableCell>
                    <Skeleton />
                  </TableCell>
                </TableRow>
              ))
            : expenses.map((expense) => (
                <ExpensesRow key={expense.firebaseId} expense={expense} />
              ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ExpensesTable;
