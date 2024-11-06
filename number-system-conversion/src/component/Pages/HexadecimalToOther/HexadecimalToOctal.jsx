import React, { useState } from 'react'

const HexadecimalToOctal = () => {
    const [hexadecimalNumber,setHexadecimalNumber]=useState("")
    const [octalNumber,setOctalNumber]=useState("")

    function HexadecimalToOctal(hex) {
        // Check if the hexadecimal number is negative
        let isNegative = hex[0] === '-';
        if (isNegative) {
            hex = hex.slice(1); // Remove the negative sign for processing
        }
    
        // Split the input into integer and fractional parts
        let [integerPart, fractionalPart] = hex.split('.');
    
        // Conversion table for hexadecimal to decimal
        const hexToDecMap = {
            '0': 0, '1': 1, '2': 2, '3': 3,
            '4': 4, '5': 5, '6': 6, '7': 7,
            '8': 8, '9': 9, 'A': 10, 'B': 11,
            'C': 12, 'D': 13, 'E': 14, 'F': 15
        };
    
        // Step 1: Convert the integer part from hexadecimal to decimal
        let integerDecimal = 0;
        for (let i = 0; i < integerPart.length; i++) {
            let hexDigit = integerPart[i].toUpperCase();
            integerDecimal = integerDecimal * 16 + hexToDecMap[hexDigit];
        }
    
        // Step 2: Convert the fractional part from hexadecimal to decimal
        let fractionalDecimal = 0;
        if (fractionalPart) {
            for (let i = 0; i < fractionalPart.length; i++) {
                let hexDigit = fractionalPart[i].toUpperCase();
                fractionalDecimal += hexToDecMap[hexDigit] / Math.pow(16, i + 1);
            }
        }
    
        // Combine integer and fractional parts in decimal
        let decimalValue = integerDecimal + fractionalDecimal;
    
        // Step 3: Convert the integer part from decimal to octal
        let integerOctal = Math.floor(decimalValue).toString(8);
    
        // Step 4: Convert the fractional part from decimal to octal
        let fractionalOctal = '';
        let fractionalPartToConvert = decimalValue - Math.floor(decimalValue);
        const maxFractionalDigits = 10; // Limit to avoid infinite repeating decimals
    
        for (let i = 0; i < maxFractionalDigits && fractionalPartToConvert !== 0; i++) {
            fractionalPartToConvert *= 8;
            let octalDigit = Math.floor(fractionalPartToConvert);
            fractionalOctal += octalDigit.toString();
            fractionalPartToConvert -= octalDigit;
        }
    
        // Combine integer and fractional parts in octal
        let octalValue = fractionalOctal ? integerOctal + '.' + fractionalOctal : integerOctal;
    
        // Apply the negative sign if necessary
        setOctalNumber(isNegative ? '-' + octalValue : octalValue)
        // return isNegative ? '-' + octalValue : octalValue;
    }

  return (
    <div>
      <h5>Hexadecimal To Octal</h5>
      <input type="text" placeholder='Enter Hexadecimal Number' value={hexadecimalNumber} onChange={(e)=>setHexadecimalNumber(e.target.value)} />
      <input type="text" placeholder='Your Answer in Binary' value={octalNumber}/>
      <button onClick={()=>HexadecimalToOctal(hexadecimalNumber)}>Submit</button>
    </div>
  )
}

export default HexadecimalToOctal
