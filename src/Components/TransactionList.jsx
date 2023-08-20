import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import Transactions from "./Transactions";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transactions) => {
          return (
            <Transactions key={transactions.id} transactions={transactions} />
          );
        })}
      </ul>
    </>
  );
};

export default TransactionList;
