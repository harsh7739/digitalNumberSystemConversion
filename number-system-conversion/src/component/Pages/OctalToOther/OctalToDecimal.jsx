import React, { useState } from 'react'

const OctalToDecimal = () => {
    const [octalNumber,setOctalNumber]=useState("")
    const [decimalNumber,setDecimalNumber]=useState("")

    function OctalToDecimal(octal) {
        // Check if the octal number is negative
        let isNegative = octal[0] === '-';
        if (isNegative) {
            octal = octal.slice(1); // Remove the negative sign for processing
        }
    
        // Split the input into integer and fractional parts
        let [integerPart, fractionalPart] = octal.split('.');
    
        // Convert the integer part
        let integerDecimal = 0;
        for (let i = 0; i < integerPart.length; i++) {
            integerDecimal = integerDecimal * 8 + parseInt(integerPart[i], 10);
        }
    
        // Convert the fractional part
        let fractionalDecimal = 0;
        if (fractionalPart) {
            for (let i = 0; i < fractionalPart.length; i++) {
                fractionalDecimal += parseInt(fractionalPart[i], 10) / Math.pow(8, i + 1);
            }
        }
    
        // Combine integer and fractional parts
        let decimalValue = integerDecimal + fractionalDecimal;
    
        // Apply the negative sign if necessary
        setDecimalNumber(isNegative ? -decimalValue : decimalValue)
        // return isNegative ? -decimalValue : decimalValue;
    }
  return (
    <div>
      <h5>Octal To Decimal</h5>
      <input type="text" placeholder='Enter Octal Number' value={octalNumber} onChange={(e)=>setOctalNumber(e.target.value)} />
      <input type="text" placeholder='Your answer in Decimal Number' value={decimalNumber} />
      <button onClick={()=>OctalToDecimal(octalNumber)} >Submit</button>
    </div>
  )
}

export default OctalToDecimal
