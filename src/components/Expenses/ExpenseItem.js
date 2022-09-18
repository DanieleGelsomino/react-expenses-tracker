import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  //   const expenseDate = new Date(2022, 2, 28);
  //   const expenseTitle = "Car Insurance";       <---- is not dynamic
  //   const expenseAmount = 294.67;

  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated!");
    console.log("cliccato");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
};

export default ExpenseItem;
