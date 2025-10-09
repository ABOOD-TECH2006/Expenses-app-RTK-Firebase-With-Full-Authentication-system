import ExpensesRowBody from "./ExpensesRowBody";
let ExpensesTable = (props) => {
  return (
    <>
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
            {props.Expenses.map(element=>(
              // ! The key is a unique value for the component inside the list that generates multiple of Components 
               <ExpensesRowBody key={element.id} expense={element} OnDeleteExpense={props.OnDeleteExpense} />
            ))}

          </tbody>
        </table>
      </section>
    </>
  );
};
export default ExpensesTable;
