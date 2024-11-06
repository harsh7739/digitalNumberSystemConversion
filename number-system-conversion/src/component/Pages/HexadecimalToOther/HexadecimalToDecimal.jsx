import React, { useState } from 'react'

const HexadecimalToDecimal = () => {
    const [hexadecimalNumber,setHexadecimalNumber]=useState("")
    const [decimalNumber,setDecimalNumber]=useState("")
    const [error,setError]=useState("")

    function HexadecimalToDecimal(hex) {
        // Check if the hex string is a valid number
        if (typeof hex !== 'string' || hex.trim() === '') {
          setError('Invalid input');
          
        }
      
        // Remove leading/trailing spaces and handle negative numbers
        let isNegative = hex.trim().startsWith('-');
        if (isNegative) {
          hex = hex.trim().slice(1); // Remove the negative sign for easier parsing
        }
      
        // Split the hexadecimal number into integer and fractional parts if any
        let [integerPart, fractionalPart] = hex.split('.');
      
        // Convert the integer part from hexadecimal to decimal
        let decimalInteger = parseInt(integerPart, 16);
      
        if (isNaN(decimalInteger)) {
            setError('Invalid hexadecimal number')
        }
      
        let decimalFraction = 0;
      
        // If there's a fractional part, convert it
        if (fractionalPart) {
          let fracLength = fractionalPart.length;
          for (let i = 0; i < fracLength; i++) {
            let hexDigit = fractionalPart[i];
            // Convert each hex digit to its decimal equivalent
            let decimalDigit = parseInt(hexDigit, 16);
            if (isNaN(decimalDigit)) {
                setError('Invalid hexadecimal number')
            }
            decimalFraction += decimalDigit / Math.pow(16, i + 1);
          }
        }
      
        // Combine integer and fractional parts, and handle negative sign if necessary
        let decimalNum = decimalInteger + decimalFraction;
        if (isNegative) {
          decimalNum = -decimalNum;
        }
      setDecimalNumber(decimalNum)
        // return decimalNumber;
      }

  return (
    <div>
          <h5>Hexadecimal To Decimal</h5>
      <input type="text" placeholder='Enter Hexadecimal Number' value={hexadecimalNumber} onChange={(e)=>setHexadecimalNumber(e.target.value)} />
      <input type="text" placeholder='Your Answer in Decimal' value={decimalNumber}/>
      <button onClick={()=>HexadecimalToDecimal(hexadecimalNumber)}>Submit</button>
        <p>{error ? error : ""}</p>
    </div>
  )
}

export default HexadecimalToDecimal
