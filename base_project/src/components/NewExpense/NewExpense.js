import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [activeView, setActiveView] = useState("defaultView");

  const saveExpenseFormHandler = (formValue) => {
    props.onAddNewExpense({ ...formValue, id: Math.random().toString() });
    setActiveView("defaultView");
  };
  const cancelExpenseFormHandler = (event) => {
    setActiveView("defaultView");
  };
  const viewChangeHandler = (event) => {
    setActiveView("addExpenseView");
  };

  return (
    <div className="new-expense">
      {activeView === "defaultView" && (
        <button onClick={viewChangeHandler}>Add New Expense</button>
      )}
      {activeView === "addExpenseView" && (
        <ExpenseForm
          onSaveFormEvent={saveExpenseFormHandler}
          onCancelFormEvent={cancelExpenseFormHandler}
        ></ExpenseForm>
      )}
    </div>
  );
};
export default NewExpense;
