import React, { useState } from 'react'

const DecimalToOctal = () => {
    const [decimalNumber,setDecimalNumber]=useState("")
    const [octalNumber,setOctalNumber]=useState("")

    // function decimalToOctal(decimal) {
    //     decimal=Number(decimal)
    //     const decimalValue=decimal.toString(8);
    //     setOctalNumber(decimalValue)
    //   }


    function decimalToOctal(decimal) {
      // Split the decimal into integer and fractional parts
      const [integerPart, fractionalPart] = decimal.toString().split('.');
  
      // Convert the integer part from decimal to octal
      const integerOctal = parseInt(integerPart, 10).toString(8);
  
      // Convert the fractional part from decimal to octal
      let fractionalOctal = '';
      if (fractionalPart) {
          let fractionalDecimal = parseFloat('0.' + fractionalPart);
          while (fractionalDecimal !== 0 && fractionalOctal.length < 5) {  // Limit to 5 digits for precision
              fractionalDecimal *= 8;
              const digit = Math.floor(fractionalDecimal);
              fractionalOctal += digit.toString(8);
              fractionalDecimal -= digit;
          }
      }
  
      // Combine the integer and fractional octal parts
      setOctalNumber(integerOctal + (fractionalOctal ? '.' + fractionalOctal : ''))
      // return integerOctal + (fractionalOctal ? '.' + fractionalOctal : '');
  }
  


  return (
    <div>
         <h5>Decimal To Octal</h5>
      <div>
        <input type="text" placeholder='Enter Decimal Number' value={decimalNumber} onChange={(e)=>setDecimalNumber(e.target.value)} />
        <input type="text" placeholder='Your answer in Binary Number' value={octalNumber} onChange={(e)=>setOctalNumber(e.target.value)}/>
        <button onClick={()=>decimalToOctal(decimalNumber)}>Submit</button>
      </div>
    </div>
  )
}

export default DecimalToOctal
