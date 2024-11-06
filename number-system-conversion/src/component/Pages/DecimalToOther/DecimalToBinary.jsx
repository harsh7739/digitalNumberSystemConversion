import React, { useState } from 'react'

const DecimalToBinary = () => {
    const [binaryNumber,setBinaryNumber]=useState("")
    const [decimalNumber,setDecimalNumber]=useState("")

    // function decimalToBinary(decimal) {
    //     decimal=Number(decimal)
    //     const decimalValue=decimal.toString(2);
    //     setBinaryNumber(decimalValue)
    //   }


    function decimalToBinary(decimal) {
      // Split the decimal into integer and fractional parts
      const [integerPart, fractionalPart] = decimal.toString().split('.');
  
      // Convert the integer part from decimal to binary
      const integerBinary = parseInt(integerPart, 10).toString(2);
  
      // Convert the fractional part from decimal to binary
      let fractionalBinary = '';
      if (fractionalPart) {
          let fractionalDecimal = parseFloat('0.' + fractionalPart);
          while (fractionalDecimal !== 0 && fractionalBinary.length < 5) {  // Limit to 5 digits for precision
              fractionalDecimal *= 2;
              const digit = Math.floor(fractionalDecimal);
              fractionalBinary += digit.toString();
              fractionalDecimal -= digit;
          }
      }
  
      // Combine the integer and fractional binary parts
      setBinaryNumber(integerBinary + (fractionalBinary ? '.' + fractionalBinary : ''))
      // return integerBinary + (fractionalBinary ? '.' + fractionalBinary : '');
  }


  return (
    <div>
          <h5>Decimal To Binary</h5>
      <div>
        <input type="text" placeholder='Enter Decimal Number' value={decimalNumber} onChange={(e)=>setDecimalNumber(e.target.value)} />
        <input type="text" placeholder='Your answer in Binary Number' value={binaryNumber} onChange={(e)=>setBinaryNumber(e.target.value)}/>
        <button onClick={()=>decimalToBinary(decimalNumber)}>Submit</button>
      </div>
    </div>
  )
}

export default DecimalToBinary
