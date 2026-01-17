import { useState } from "react";

import "./App.css";
import { preconnect } from "react-dom";

function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  let tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function restAll() {
    setBill("");
    setPercentage1("");
    setPercentage2("");
  }
  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPrecentage percentage={percentage1} onSelect={setPercentage1}>
        How did you like the service
      </SelectPrecentage>
      <SelectPrecentage percentage={percentage2} onSelect={setPercentage2}>
        How did your friend like the service
      </SelectPrecentage>
      {bill && (
        <>
          <OutPut bill={bill} tip={tip} />
          <Reset onReset={restAll} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label htmlFor="billInput">How much was the bill?</label>
      <input
        type="text"
        id="billInput"
        value={bill}
        onChange={(e) => onSetBill(+e.target.value)}
      />
    </div>
  );
}
function SelectPrecentage({ children, percentage, onSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select
        name=""
        id=""
        value={percentage}
        onChange={(e) => {
          onSelect(Number(e.target.value));
        }}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}
function OutPut({ bill, tip }) {
  console.log(typeof bill);
  return (
    <div>
      <h3>
        You pay ${bill + tip} ({` $${bill} Order`} + ${tip} Tip)
      </h3>
    </div>
  );
}
function Reset({ onReset }) {
  return (
    <button
      onClick={() => {
        onReset();
      }}
    >
      Reset
    </button>
  );
}
export default App;
