import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../redux/store";

let ExpensesForm = () => {
  const TitleRef = useRef();
  const DateRef = useRef();
  const ValueRef = useRef();
  const DescriptionRef = useRef();
  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
      
    e.preventDefault();
    if (
      !TitleRef.current.value ||
      !DateRef.current.value ||
      !ValueRef.current.value ||
      !DescriptionRef.current.value
    ) {
      return alert("Enter required info");
    }

   let expense = {
     id: Date.now(),
     title: TitleRef.current.value,
     date: DateRef.current.value,
     value: ValueRef.current.value,
     description: DescriptionRef.current.value,
   };
    dispatch(addExpense(expense));

    TitleRef.current.value = "";
    DateRef.current.value = "";
    ValueRef.current.value = "";
    DescriptionRef.current.value = "";
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" placeholder="Title" ref={TitleRef} />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input type="date" id="date" ref={DateRef} />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="value">Value</label>
          <input type="number" id="value" ref={ValueRef} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input type="text" id="description" ref={DescriptionRef} />
        </div>
      </div>
      <button type="submit" className="save-btn">
        Save
      </button>
    </form>
  );
};

export default ExpensesForm;
