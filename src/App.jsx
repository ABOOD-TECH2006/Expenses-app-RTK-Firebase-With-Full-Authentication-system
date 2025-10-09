import ExpensesForm from "./Components/ExpensesForm";
import ExpensesTable from "./Components/ExpensesTable";
import MAinImage from "./resources/Images/m1.png";
import { useState } from "react";
let App = () => {
  //? const Expenses = []; stateless
  // ! State Management - useState Hook >> this's stateful
  let [Expenses,SetExpenses] = useState([]);
  let onNewExpenseHandler = (Expense) => {
    // alert(`New Expense ${Expense.title}`);
    //? Expenses.unshift(Expense);
    // !                           the element that you add it it appears at the begining of the array
    SetExpenses(prevState=>{return[Expense,...prevState]})
    console.log(Expenses);
};
let OnDeleteExpenseHandler = (id)=>{
  // alert(id)
  let FilteredArray = Expenses.filter(element=>element.id != id)
  SetExpenses(FilteredArray);
}
  return (
    <>
      <div className="content-wrapper">
        <section className="top-section">
          <img src={MAinImage} alt="image-title" />
          <section>
            <span>Welcome to Expenses Manager</span>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Architecto autem, ab suscipit nam ipsum consectetur obcaecati
              libero, quidem unde, saepe eligendi qui perferendis. Nisi
              architecto doloribus corporis a perspiciatis quod?
            </p>
            <ExpensesForm onNewExpense={onNewExpenseHandler} />
          </section>
        </section>
        <ExpensesTable Expenses={Expenses} OnDeleteExpense={OnDeleteExpenseHandler}/>
    
      </div>
    </>
  );
};
export default App;
// ! Let's just break down the child parent way okay keep in mind in the first place that the attribute that you give it to the child component in the father section
// ! is a props.attribute that you past it recently so here :
// ? the attribute is OnDeleteExpense nnd in the page of Taple we pass props.OnDeleteExpense and etc .....
// ! so in our state we used this way to pass the id from the the smallest child to the big father or in onther way to pass the function from the Biggest1 father to the smallest child