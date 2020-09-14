import React, { useState } from 'react';


const Calculator = props => {
    
    
    const [firstInput, setFirstInput] = useState( '' );
    const [secondInput, setSecondInput] = useState( '' );
    const [newOption, setNewOption] = useState( 'addition' );
    const [result, setResult]= useState( '' );
    const firstInputNumber = parseFloat(firstInput);
    const secondInputNumber = parseFloat(secondInput);
    
    

    // submit event function
    const displayCalculate  = event => {
        event.preventDefault();       
        selectOpearator();                
    } 
    // select operator
    const selectOpearator = () => 
    {
        if (newOption ==='addition')
        {
            setResult(firstInputNumber + secondInputNumber);            
        }
        else if (newOption === 'substraction')
        {
            setResult(firstInputNumber - secondInputNumber);            
        }
        else if (newOption === 'multiplication')
        {
            setResult(firstInputNumber * secondInputNumber);            
        }
        else 
        {
            setResult(firstInputNumber / secondInputNumber);            
        }
    } 
    
    //Retrun(JSX) 
    return (
      
        <div>
            <h1>
                Welcome to my Calculator!
            </h1> 
            <form onSubmit={displayCalculate}>
                <label htmlFor="firstInput">Input 1:</label>
                <input type="text" 
                       id="firstInput"
                       onChange={e => { setFirstInput( e.target.value ) }}
                       value={firstInput} />
                
                <label htmlFor="selectBox"> Operation:</label>
                <select id="selectBox" onChange={e => {setNewOption (e.target.value)}} value={newOption} htmlFor="selectBox">
                        <option value="addition">+ (Add)</option>
                        <option value="substraction">- (Sub)</option>
                        <option value="multiplication">* (Mul)</option>
                        <option value="division">/ (Div)</option>
                </select>

                <label htmlFor="secondInput">Input 2:</label>
                <input type="text" 
                       id="secondInput"
                       onChange={e => { setSecondInput( e.target.value ) }}
                       value={secondInput} />

                <input type='submit' value="Calculate!" />
            </form>
            <p>Result : {result} </p>
        </div>
      
    );
}
  
export default Calculator