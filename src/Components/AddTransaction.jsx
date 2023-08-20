import React, { useContext, useState } from "react";
import { GlobalContext } from "../Context/GlobalState";

const AddTransaction = () => {
  const [text, settext] = useState("");
  const [amount, setamount] = useState(0);
  const [errorText, setErrorText] = useState("");
  const [errorAmount, setErrorAmount] = useState("");
  const { addTransaction } = useContext(GlobalContext);
  const onSubmit = (e) => {
    e.preventDefault();

    //ERROR HANDLING
    if (text.trim() === "") {
      setErrorText("Please enter text");
      return;
    }
    if (amount === 0) {
      setErrorAmount("Please enter amount");
      return;
    }
    //reset error if field is valid
    setErrorText("");
    setErrorAmount("");

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
    settext("");
    setamount(0);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit} id="form">
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            value={text}
            onChange={(e) => {
              settext(e.target.value);
              setErrorText("");
            }}
            placeholder="Enter text..."
          />
          {errorText && (
            <p className="error" style={{ color: "red" }}>
              {errorText}
            </p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => {
              setamount(e.target.value);
              setErrorAmount("");
            }}
            placeholder="Enter amount..."
          />
          {errorAmount && (
            <p className="error" style={{ color: "red" }}>
              {errorAmount}
            </p>
          )}
        </div>
        <button className="btn" disabled={errorText || errorAmount}>
          Add transaction
        </button>
      </form>
    </>
  );
};

export default AddTransaction;
