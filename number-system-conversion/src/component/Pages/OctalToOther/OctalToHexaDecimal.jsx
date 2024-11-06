import React, { useState } from 'react'

const OctalToHexaDecimal = () => {
    const [octalNumber,setOctalNumber]=useState("")
    const [hexadecimalNumber,setHexadecimalNumber]=useState("")

    function octalToHexaDecimal(octal) {
        // Check if the octal number is negative
        let isNegative = octal[0] === '-';
        if (isNegative) {
            octal = octal.slice(1); // Remove the negative sign for processing
        }
    
        // Split the input into integer and fractional parts
        let [integerPart, fractionalPart] = octal.split('.');
    
        // Step 1: Convert the integer part from octal to decimal
        let integerDecimal = 0;
        for (let i = 0; i < integerPart.length; i++) {
            integerDecimal = integerDecimal * 8 + parseInt(integerPart[i], 10);
        }
    
        // Step 2: Convert the fractional part from octal to decimal
        let fractionalDecimal = 0;
        if (fractionalPart) {
            for (let i = 0; i < fractionalPart.length; i++) {
                fractionalDecimal += parseInt(fractionalPart[i], 10) / Math.pow(8, i + 1);
            }
        }
    
        // Step 3: Convert the integer part from decimal to hexadecimal
        let integerHex = integerDecimal.toString(16).toUpperCase();
    
        // Step 4: Convert the fractional part from decimal to hexadecimal
        let fractionalHex = '';
        let fractionalPartToConvert = fractionalDecimal;
        const maxFractionalDigits = 10; // Limit to avoid infinite repeating decimals
    
        for (let i = 0; i < maxFractionalDigits && fractionalPartToConvert !== 0; i++) {
            fractionalPartToConvert *= 16;
            let hexDigit = Math.floor(fractionalPartToConvert);
            fractionalHex += hexDigit.toString(16).toUpperCase();
            fractionalPartToConvert -= hexDigit;
        }
    
        // Combine integer and fractional parts in hexadecimal
        let hexadecimalValue = fractionalHex ? integerHex + '.' + fractionalHex : integerHex;
    
        // Apply the negative sign if necessary
        setHexadecimalNumber(isNegative ? '-' + hexadecimalValue : hexadecimalValue)
        // return isNegative ? '-' + hexadecimalValue : hexadecimalValue;
    }
  return (
    <div>
      <h5>Octal To Hexadecimal</h5>
      <input type="text" placeholder='Enter Octal Number' value={octalNumber} onChange={(e)=>setOctalNumber(e.target.value)} />
      <input type="text" placeholder='Your Answer in Hexadecimal' value={hexadecimalNumber} />
      <button onClick={()=>octalToHexaDecimal(octalNumber)} >Submit</button>
    </div>
  )
}

export default OctalToHexaDecimal
