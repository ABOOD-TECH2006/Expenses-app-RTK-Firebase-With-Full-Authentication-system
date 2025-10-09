let ExpensesRowBody = (props) => {
  let OnDeleteExpenseHandler = ()=>{
    props.OnDeleteExpense(props.expense.id)
  }
  return (
    <>
      <tr>
        <td>{props.expense.title}</td>

        <td>{props.expense.date}</td>
        <td>{`${props.expense.value} $`}</td>

        <td>{props.expense.description}</td>
         <td><button className="DeleteButton" onClick={OnDeleteExpenseHandler}>Delete</button></td>
      </tr>
    </>
  );
};
export default ExpensesRowBody;