import "./newExpense.css";

import ExpenseForm from "./ExpenseForm";

const newExpense = () => {
  const savaExpenseDataHandler = (enterdExpenseData) => {
    const expenseData = {
      ...enterdExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={savaExpenseDataHandler} />
    </div>
  );
};

export default newExpense;
