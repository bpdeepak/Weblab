function multiplyAndDisplay(num1, num2, num3) {
    const product = num1 * num2 * num3;
    const resultString = `${num1} * ${num2} * ${num3} = ${product}`;
  
    // Create a new paragraph element
    const resultParagraph = document.createElement("p");
    resultParagraph.textContent = resultString;
  
    // Append the paragraph to the body of the document
    document.body.appendChild(resultParagraph);
  }
  
  // Example usage:
  const number1 = 5;
  const number2 = 10;
  const number3 = 2;
  
  multiplyAndDisplay(number1, number2, number3); // creates 5 * 10 * 2 = 100 on the webpage
  
  const number4 = 3;
  const number5 = 4;
  const number6 = 5;
  multiplyAndDisplay(number4, number5, number6); // creates 3 * 4 * 5 = 60 on the webpage