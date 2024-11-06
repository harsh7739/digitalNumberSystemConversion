import React, { useState } from 'react'

const BinaryToHexaDecimal = () => {
    const [binaryNumber,setBinaryNumber]=useState("")
    const [hexaDecimalNumber,setHexaDecimalNumber]=useState("")
    // function BinaryToHexaDecimal(binaryString) {
    //     // Convert binary to decimal
    //     const decimal = parseInt(binaryString, 2);
        
    //     // Convert decimal to octal
    //     const octal = decimal.toString(16).toUpperCase();
        
    //     setHexaDecimalNumber(octal)
    // }


    function binaryToHexaDecimal(binary) {
      // Split the binary into integer and fractional parts
      const [integerPart, fractionalPart] = binary.split('.');
  
      // Convert the integer part from binary to hexadecimal
      let integerHex = parseInt(integerPart, 2).toString(16).toUpperCase();
  
      // Convert the fractional part from binary to hexadecimal
      let fractionalHex = '';
      if (fractionalPart) {
          let fractionalBinary = fractionalPart;
          let fractionalHexParts = '';
          
          // Group binary digits into sets of 4 starting from the left
          while (fractionalBinary.length % 4 !== 0) {
              fractionalBinary += '0'; // Pad with zeros if needed
          }
  
          // Convert each 4-bit group to a hexadecimal digit
          for (let i = 0; i < fractionalBinary.length; i += 4) {
              const group = fractionalBinary.slice(i, i + 4);
              fractionalHexParts += parseInt(group, 2).toString(16).toUpperCase();
          }
  
          fractionalHex = '.' + fractionalHexParts;
      }
  
      // Combine the integer and fractional hexadecimal parts
      setHexaDecimalNumber(integerHex + (fractionalHex ? fractionalHex : ''))
      // return integerHex + (fractionalHex ? fractionalHex : '');
  }




  return (
    <div>
      <h5>Binary To HexaDecimal</h5>
      <div>
        <input type="text" placeholder='Enter Binary Number' value={binaryNumber} onChange={(e)=>setBinaryNumber(e.target.value)}/>
        <input type="text" placeholder='Your answer in HexaDecimal Number' value={hexaDecimalNumber} />
        <button onClick={()=>binaryToHexaDecimal(binaryNumber)}>Submit</button>
      </div>
    </div>
  )
}

export default BinaryToHexaDecimal
