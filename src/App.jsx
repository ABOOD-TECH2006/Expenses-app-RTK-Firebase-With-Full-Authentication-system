import ExpensesForm from "./Components/ExpensesForm";
import ExpensesTable from "./Components/ExpensesTable";
import MAinImage from "./resources/Images/m1.png";

let App = () => {
  return (
    <div className="content-wrapper">
      <section className="top-section">
        <img src={MAinImage} alt="image-title" />
        <section>
          <span>Welcome to Expenses Manager</span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
            autem, ab suscipit nam ipsum consectetur obcaecati libero, quidem
            unde, saepe eligendi qui perferendis. Nisi architecto doloribus
            corporis a perspiciatis quod?
          </p>
          <ExpensesForm />
        </section>
      </section>
      <ExpensesTable />
    </div>
  );
};

export default App;
