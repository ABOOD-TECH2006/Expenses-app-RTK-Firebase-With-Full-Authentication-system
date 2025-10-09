import { useRef } from "react";
let ExpensesForm = (props) => {
  let TitleRef = useRef();
  let DateRef = useRef();
  let ValueRef = useRef();
  let DescriptionRef = useRef();
  let OnClickSubmit = function (event) {
    // ! In react don't even think about refreshing the page and By default while using The submit button
    // !  the page refreshes auto so we use the event and prevent the default functions such refreshing the page
    event.preventDefault();
    if (CheckedData()) {
      SaveExpenses();
    }
    //? console.log(TitleRef.current.value);
  };
  let CheckedData = () => {
    if (
      TitleRef.current.value != "" &&
      DateRef.current.value != "" &&
      ValueRef.current.value != "" &&
      DescriptionRef.current.value != ""
    ) {
      return true;
    }
    alert("Enter Required info");
    return false;
  };
  function SaveExpenses() {
    const ExpensesInputsValues = {
      id: Date.now(),
      title: TitleRef.current.value,
      date: DateRef.current.value,
      value: ValueRef.current.value,
      description: DescriptionRef.current.value,
    };
    console.log(ExpensesInputsValues);
    props.onNewExpense(ExpensesInputsValues);
    Clear();
  }
  let Clear = () => {
    TitleRef.current.value = "";
    DateRef.current.value = "";
    ValueRef.current.value = "";
    DescriptionRef.current.value = "";
  };

  return (
    <>
      <form onSubmit={OnClickSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              //! required
              placeholder="Title"
              ref={TitleRef}
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              name="date"
              id="date"
              //! required
              placeholder="Date"
              ref={DateRef}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="value">Value</label>
            <input
              type="number"
              name="value"
              id="value"
              //! required
              placeholder="Value"
              ref={ValueRef}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              id="description"
              //! required
              placeholder="Description"
              ref={DescriptionRef}
            />
          </div>
        </div>
        {/* ()=>::we call this arrow function and we use it here to prevent runing the alert the time we refresh or Enter the page */}
        <button
          //   onClick={() => alert("Welcome Engineer")}
          className="save-btn"
          type="submit"
        >
          Save
        </button>
      </form>
    </>
  );
};
export default ExpensesForm;
