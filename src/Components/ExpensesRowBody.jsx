import { useDispatch } from "react-redux";
import { deleteExpense } from "../redux/store";

let ExpensesRowBody = ({ expense }) => {
  const dispatch = useDispatch();
  return (
    <tr>
      <td>{expense.title}</td>
      <td>{expense.date}</td>
      <td>{expense.value} $</td>
      <td>{expense.description}</td>
      <td>
        <button
          className="DeleteButton"
          onClick={() => dispatch(deleteExpense(expense.id))}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ExpensesRowBody;
