// const data = { … }
// true, if arrayKey exists and the arrayKey has a length property
(data?.arrayKey && data.arrayKey.length)
// Although this works, what if I told you there is even a better way to do this?

// Array.isArray(param: any) 
// call checks if the passed value is indeed an array or not and returns a boolean value.
Array.isArray([]); // true
Array.isArray(new Array(22)); // true
Array.isArray(0) // false
Array.isArray({}); // false
Array.isArray(null); // false
Array.isArray(undefined); // false

// For the next two, let’s consider a situation

// You have to rate some students based on a test as follows
/**
failed: if all answers were wrong
passed: if some answers were correct
excellent: if all answers were correct
 * 
 * */ 

// some


Array.some()
// ethods run the provided function on each item of the array 
// and return true if the provided function returns true for any of them, otherwise false.

// So in our scenarios, we can apply
Array.some() 
// for the second use case.

function isCorrectAnswer(answer) { 
    // return true if the answer was correct, otherwise false 
   }
   const answers = [{ ... }]
   // didStudentPass will be true, if any of the answers were    
   // correct
   const didStudentPass = answers.some(isCorrectAnswer)


// every
Array.every()
//  methods run the provided function on each item of the array 
// and return true if the provided function returns true for all of them, otherwise false.
Array.every()
// seems like a perfect fit for the other two scenarios.

    function isCorrectAnswer(answer) { 
    // returns true if the answer was correct, otherwise false 
   }
   function isInCorrectAnswer(answer) { 
    // returns true if the answer was wrong, otherwise false 
   }
   const answers = [{ ... }]
   // didStudentFail will be true, if all of the answers were incorrect
   const didStudentFail = answers.every(isInCorrectAnswer)
   // didStudentExcel will be true, if all of the answers were correct
   const didStudentExcel = answers.every(isCorrectAnswer)