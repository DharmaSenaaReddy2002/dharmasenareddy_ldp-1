function multiplyByTwo(num) {
    return num * 2;
  }
  
  function operateOnNumber(num, operation) {
    const result = operation(num);
    console.log("Result:", result);
  }
  
  operateOnNumber(5, multiplyByTwo); // Output: Result: 10
  