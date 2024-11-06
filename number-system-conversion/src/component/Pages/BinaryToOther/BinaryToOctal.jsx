import React, { useState } from 'react'

const BinaryToOctal = () => {
    const [binaryNumber,setBinaryNumber]=useState("")
    const [octalNumber,setOctalNumber]=useState("")
    // function BinaryToOctal(binaryString) {
    //     // Convert binary to decimal
    //     const decimal = parseInt(binaryString, 2);
        
    //     // Convert decimal to octal
    //     const octal = decimal.toString(8);
        
    //     setOctalNumber(octal)
    // }


    function BinaryToOctal(binary) {
      // Split the binary into integer and fractional parts
      const [integerPart, fractionalPart] = binary.split('.');
  
      // Convert the integer part from binary to octal
      let integerOctal = parseInt(integerPart, 2).toString(8);
  
      // Convert the fractional part from binary to octal
      let fractionalOctal = '';
      if (fractionalPart) {
          let fractionalBinary = fractionalPart;
          let fractionalOctalParts = '';
          
          // Group binary digits into sets of 3 starting from the left
          while (fractionalBinary.length % 3 !== 0) {
              fractionalBinary += '0'; // Pad with zeros if needed
          }
  
          // Convert each 3-bit group to an octal digit
          for (let i = 0; i < fractionalBinary.length; i += 3) {
              const group = fractionalBinary.slice(i, i + 3);
              fractionalOctalParts += parseInt(group, 2).toString(8);
          }
  
          fractionalOctal = '.' + fractionalOctalParts;
      }
  
      // Combine the integer and fractional octal parts
      setOctalNumber(integerOctal + (fractionalOctal ? fractionalOctal : ''))
      // return integerOctal + (fractionalOctal ? fractionalOctal : '');
  }



  return (
    <div>
      <h5>Binary To Octal</h5>
      <div>
        <input type="text" placeholder='Enter Binary Number' value={binaryNumber} onChange={(e)=>setBinaryNumber(e.target.value)}/>
        <input type="text" placeholder='Your answer in Octal Number' value={octalNumber} onChange={(e)=>octalNumber(e.target.value)} />
        <button onClick={()=>BinaryToOctal(binaryNumber)}>Submit</button>
      </div>
    </div>
  )
}

export default BinaryToOctal
