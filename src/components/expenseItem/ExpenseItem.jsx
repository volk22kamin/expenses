import React, { useState } from "react";

import "./expenseItem.css";
import ExpanseDate from "../ExpenseDate/ExpenseDate";

const ExpenseItem = ({ date, title, amount }) => {
  const [stateTitle, setStateTitle] = useState(title);

  const changeHandler = () => {
    setStateTitle("updated");
    console.log(stateTitle);
  };

  return (
    <div className="expense-item">
      <ExpanseDate date={date} />
      <div className="expense-item__description">
        <h2>{stateTitle}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
      <button onClick={changeHandler}>click me</button>
    </div>
  );
};

export default ExpenseItem;
