import { useSelector } from "react-redux";
import ExpensesRowBody from "./ExpensesRowBody";

let ExpensesTable = () => {
  const expenses = useSelector((state) => state.expenses);

  return (
    <section className="bottom-section">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Value</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <ExpensesRowBody key={expense.id} expense={expense} />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ExpensesTable;
