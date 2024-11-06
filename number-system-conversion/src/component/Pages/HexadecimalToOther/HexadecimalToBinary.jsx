import React, { useState } from 'react'

const HexadecimalToBinary = () => {
    const [hexadecimalNumber,setHexadecimalNumber]=useState("")
    const [binaryNumber,setBinaryNumber]=useState("")
    function HexadecimalToBinary(hex) {
        // Check if the hexadecimal number is negative
        let isNegative = hex[0] === '-';
        if (isNegative) {
            hex = hex.slice(1); // Remove the negative sign for processing
        }
    
        // Split the input into integer and fractional parts
        let [integerPart, fractionalPart] = hex.split('.');
    
        // Conversion table for hexadecimal to binary (each hex digit to 4-bit binary)
        const hexToBinMap = {
            '0': '0000', '1': '0001', '2': '0010', '3': '0011',
            '4': '0100', '5': '0101', '6': '0110', '7': '0111',
            '8': '1000', '9': '1001', 'A': '1010', 'B': '1011',
            'C': '1100', 'D': '1101', 'E': '1110', 'F': '1111'
        };
    
        // Convert the integer part from hexadecimal to binary
        let integerBinary = '';
        for (let i = 0; i < integerPart.length; i++) {
            let hexDigit = integerPart[i].toUpperCase();
            integerBinary += hexToBinMap[hexDigit] || ''; // Convert each hex digit to binary
        }
    
        // Convert the fractional part from hexadecimal to binary
        let fractionalBinary = '';
        if (fractionalPart) {
            for (let i = 0; i < fractionalPart.length; i++) {
                let hexDigit = fractionalPart[i].toUpperCase();
                fractionalBinary += hexToBinMap[hexDigit] || ''; // Convert each hex digit to binary
            }
        }
    
        // Combine integer and fractional parts in binary
        let binaryValue = fractionalBinary ? integerBinary + '.' + fractionalBinary : integerBinary;
    
        // Apply the negative sign if necessary
        setBinaryNumber(isNegative ? '-' + binaryValue : binaryValue)
        // return isNegative ? '-' + binaryValue : binaryValue;
    }
  return (
    <div>
      <h5>Hexadecimal To Binary</h5>
      <input type="text" placeholder='Enter Hexadecimal Number' value={hexadecimalNumber} onChange={(e)=>setHexadecimalNumber(e.target.value)} />
      <input type="text" placeholder='Your Answer in Binary' value={binaryNumber}/>
      <button onClick={()=>HexadecimalToBinary(hexadecimalNumber)}>Submit</button>
    </div>
  )
}

export default HexadecimalToBinary
