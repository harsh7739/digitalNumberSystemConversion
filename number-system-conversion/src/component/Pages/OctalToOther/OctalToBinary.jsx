import React, { useState } from 'react'

const OctalToBinary = () => {
    const [octalNumber,setOctalNumber]=useState("")
    const [binaryNumber,setBinaryNumber]=useState("")
    function octalToBinary(octalNumber) {
        // Split the octal into integer and fractional parts
        const [integerPart, fractionalPart] = octalNumber.split('.');
    
        // Convert the integer part (octal to decimal)
        const integerDecimal = parseInt(integerPart, 8);
        let binaryInteger = integerDecimal.toString(2);
    
        // Convert the fractional part (octal to binary)
        let binaryFraction = '';
        if (fractionalPart) {
            let fractionalDecimal = 0;
            for (let i = 0; i < fractionalPart.length; i++) {
                // Octal digit (0-7), use it to compute its contribution in the fractional part
                fractionalDecimal += parseInt(fractionalPart[i], 8) * Math.pow(8, -(i + 1));
            }
    
            // Convert the fractional decimal part to binary
            let fractionBinary = '';
            let fractionTemp = fractionalDecimal;
            while (fractionTemp !== 0 && fractionBinary.length < 10) { // Limit to 10 binary digits for precision
                fractionTemp *= 2;
                const digit = Math.floor(fractionTemp);
                fractionBinary += digit;
                fractionTemp -= digit;
            }
            binaryFraction = '.' + fractionBinary;
        }
    
        // Combine the integer part and fractional part
        setBinaryNumber(binaryInteger + binaryFraction)
    }
  return (
    <div>
      <h5>Octal To Binary</h5>
      <input type="text" placeholder='Enter your octal Number' value={octalNumber} onChange={(e)=>setOctalNumber(e.target.value)}/>
      <input type="text" placeholder='Your Answer in Binary Number' value={binaryNumber} />
      <button onClick={()=>octalToBinary(octalNumber)}>Submit</button>
    </div>
  )
}

export default OctalToBinary
