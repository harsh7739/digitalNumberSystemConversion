import React, { useEffect, useState } from 'react'

const BinaryToDecimal = () => {
    const [binarNumber,setBinaryNumber]=useState("")
    const [decimalNumber,setDecimalNumber]=useState("")
    // function binaryToDecimal(N){
    //     let sum=0
    //     let power=0
    //     while(N>0){
    //       let rem=N%10
    //       sum+=rem*(2**power)
    //       power++
    //       N=Math.floor(N/10)
    //     }
    //     setDecimalNumber(sum)
    //   }


    function binaryToDecimal(binary) {
      // Check if the binary number is negative
      let isNegative = binary[0] === '-';
      if (isNegative) {
          binary = binary.slice(1);  // Remove the negative sign for processing
      }
  
      // Separate the integer and fractional parts
      let [integerPart, fractionalPart] = binary.split('.');
  
      // Convert the integer part to decimal
      let integerDecimal = parseInt(integerPart, 2);
  
      // Convert the fractional part to decimal
      let fractionalDecimal = 0;
      if (fractionalPart) {
          for (let i = 0; i < fractionalPart.length; i++) {
              if (fractionalPart[i] === '1') {
                  fractionalDecimal += 1 / Math.pow(2, i + 1);
              }
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
      <h5>Binary to decimal</h5>
      <div>
        <input type="text" placeholder='Enter Binary Number' value={binarNumber} onChange={(e)=>setBinaryNumber(e.target.value)}/>
        <input type="text" placeholder='Your answer in Decimal Number' value={decimalNumber} onChange={(e)=>setDecimalNumber(e.target.value)} />
        <button onClick={()=>binaryToDecimal(binarNumber)}>Submit</button>
      </div>
    </div>
  )
}

export default BinaryToDecimal
