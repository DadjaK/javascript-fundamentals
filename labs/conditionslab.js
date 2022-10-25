/* Task 1 */

function compareValue(value1, value2){
    if( value1 == value2){
        console.log(`${value1} and ${value2} are the same`);
    }
    else{
        console.log(`${value1} and ${value2} not are the same`);
    }
}

/* Test */
compareValue(3, 4);  // Output: 3 and 4 not are the same
compareValue(4, 4);  // Output: 4 and 4 are the same
compareValue('Monday', 'Tuesday');  // Output: Monday and Tuesday not are the same
compareValue('may', 4);  // Output: may and 4 not are the same
compareValue('May', 'may');  // Output: May and may not are the same
compareValue("May", 'May');  // Output: May and May are the same

/* Task 2 */

function gradeFeedback(grade){
    switch(grade){
        case "E":
            console.log('Excellent');
            break;

        case "V":
            console.log('Very Good');
            break;

        case "G":
            console.log('Good');
            break;

        case "A":
            console.log('Average');
            break;
        
        case "F":
            console.log('Fail');
            break;
        
        default:
            console.log('Not a valid grade');
    }
}

/* Test */
gradeFeedback('H');  // Output: Not a valid grade
gradeFeedback('A');  // Output: Average 
gradeFeedback('V');  // Output: Very Good
    





