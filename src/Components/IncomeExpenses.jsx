import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  let amounts = transactions.map((transactions) => transactions.amount);
  let income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => acc + item, 0)
    .toFixed(2);
  console.log("income", income);
  let expense =
    amounts.filter((item) => item < 0).reduce((acc, item) => acc + item, 0) *
    (-1).toFixed(2);
  console.log("expense", expense);
  return (
    <>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">
            +${income}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">
            -${expense}
          </p>
        </div>
      </div>
    </>
  );
};

export default IncomeExpenses;
