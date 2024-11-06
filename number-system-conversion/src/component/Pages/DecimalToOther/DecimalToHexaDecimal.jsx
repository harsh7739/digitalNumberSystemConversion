import React, { useState } from 'react'

const DecimalToHexaDecimal = () => {
    const [decimalNumber,setDecimalNumber]=useState("")
    const [hexaDecimal,setHexaDecimal]=useState("")

    // function decimalToHexaDecimal(decimal) {
    //     decimal=Number(decimal)
    //     const decimalValue=decimal.toString(16).toUpperCase();
    //     setHexaDecimal(decimalValue)
    //   }


    function decimalToHexaDecimal(decimal) {
      // Split the decimal into integer and fractional parts
      const [integerPart, fractionalPart] = decimal.toString().split('.');
  
      // Convert the integer part from decimal to hexadecimal
      const integerHex = parseInt(integerPart, 10).toString(16).toUpperCase();
  
      // Convert the fractional part from decimal to hexadecimal
      let fractionalHex = '';
      if (fractionalPart) {
          let fractionalDecimal = parseFloat('0.' + fractionalPart);
          while (fractionalDecimal !== 0 && fractionalHex.length < 5) {  // Limit to 5 digits for precision
              fractionalDecimal *= 16;
              const digit = Math.floor(fractionalDecimal);
              fractionalHex += digit.toString(16).toUpperCase();
              fractionalDecimal -= digit;
          }
      }
  
      // Combine the integer and fractional hexadecimal parts
      setHexaDecimal(integerHex + (fractionalHex ? '.' + fractionalHex : ''))
  }


  return (
    <div>
          <h5>Decimal To HexaDecimal</h5>
      <div>
        <input type="text" placeholder='Enter Decimal Number' value={decimalNumber} onChange={(e)=>setDecimalNumber(e.target.value)} />
        <input type="text" placeholder='Your answer in HexaDecimal Number' value={hexaDecimal} onChange={(e)=>setHexaDecimal(e.target.value)}/>
        <button onClick={()=>decimalToHexaDecimal(decimalNumber)}>Submit</button>
      </div>
    </div>
  )
}

export default DecimalToHexaDecimal
