import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import newPastCalculate from "../actions/pastCalculate";
import './Calculator.css';

const Calculator = (props) => {
  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState("");
  const [newOption, setNewOption] = useState("addition");
  const [result, setResult] = useState("");
  const [detailedResult, setDetailedResult] = useState("");
  const firstInputNumber = parseFloat(firstInput);
  const secondInputNumber = parseFloat(secondInput);

  // submit event function
  const displayCalculate = (event) => {
    event.preventDefault();
    if(isNumber()){
        
        alert('please enter number only!');
    }
    else
    {
        selectOpearator();
    }
    
  };

  // Check input validity
  const isNumber = () => {
      if(isNaN(firstInput) || isNaN(secondInput))
      {
        return true;
      } 
      return false;
    }

  // select operator
  const selectOpearator = () => {

    if (newOption === "addition") {
      setResult(firstInputNumber + secondInputNumber);
      setDetailedResult(
        `${firstInputNumber}+${secondInputNumber}=${
          firstInputNumber + secondInputNumber
        }`
      );
    } else if (newOption === "substraction") {
      setResult(firstInputNumber - secondInputNumber);
      setDetailedResult(
        `${firstInputNumber}-${secondInputNumber}=${
          firstInputNumber - secondInputNumber
        }`
      );
    } else if (newOption === "multiplication") {
      setResult(firstInputNumber * secondInputNumber);
      setDetailedResult(
        `${firstInputNumber}*${secondInputNumber}=${
          firstInputNumber * secondInputNumber
        }`
      );
    } else {
      setResult(firstInputNumber / secondInputNumber);
      setDetailedResult(
        `${firstInputNumber}/${secondInputNumber}=${
          firstInputNumber / secondInputNumber
        }`
      );
    }
  };

  //  Code borrowed start : 
  const dispatch = useDispatch();
  useEffect(() => {
    //props
    dispatch(newPastCalculate(detailedResult));
  }, [detailedResult, dispatch]);

  // Code borrowed end 
  // Credit : Zhen Liu
  /**
   * Initially I put props.dispatch(newPastCalculate(detailedResult)); 
   * in a submit event code block. But it is not updating most recent state 
   * of the detailedResult and it leaves first list item empty. So, I used useEffect 
   * update current change whenever change happens.
   */  

  //Retrun(JSX)
  return (
    <div className="calculator">
      <h1>Calculator!</h1>
      <form onSubmit={displayCalculate}>
        <label htmlFor="firstInput">Input 1:</label>
        <input
          type="text"
          id="firstInput"
          onChange={(e) => {
            setFirstInput(e.target.value);
          }}
          value={firstInput}
        />

        <label htmlFor="selectBox"> Operation:</label>
        <select
          id="selectBox"
          onChange={(e) => {
            setNewOption(e.target.value);
          }}
          value={newOption}
          htmlFor="selectBox"
        >
          <option value="addition">+ (Add)</option>
          <option value="substraction">- (Sub)</option>
          <option value="multiplication">* (Mul)</option>
          <option value="division">/ (Div)</option>
        </select>

        <label htmlFor="secondInput">Input 2:</label>
        <input
          type="text"
          id="secondInput"
          onChange={(e) => {
            setSecondInput(e.target.value);
          }}
          value={secondInput}
        />

        <input type="submit" value="Calculate!" />
      </form>
      <p>Result : {result} </p>
    </div>
  );
};

export default connect((state) => {
  return { listItems: state };
})(Calculator);
