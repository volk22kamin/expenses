import React, { useState } from "react";
import ExpenseItem from "../expenseItem/ExpenseItem";
import { EXPANSES } from "../../exp";
import ExpenseFilter from "../ExpeneseFilter/ExpenseFilter";

import "./ExpanceList.css";

const ExpanseList = () => {
  const [selectedYear, setSelectedYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  return (
    <div className="item">
      <div className="filterButton">
        <ExpenseFilter
          selected={selectedYear}
          onChangeFilter={filterChangeHandler}
        />
      </div>
      {EXPANSES.map(({ id, ...otherProps }) => (
        <ExpenseItem key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default ExpanseList;
