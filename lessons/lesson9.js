/* Array Collections */

/* The more recommended array
The literal way */
const days_of_week = ['Sun', 'Mon', 'Tue', 'Wed',
'Thu', 'Fri', 'Sat'];

/* The new keyword array is less common */
const values = new Array (101, 102, 103, 104, 105);

/* An array of mixed types */
const mixture = ['Tue', 106, false];

/* Accessing an element of an array based on its index */
function getMyday(){
    let day = days_of_week[5];
    console.log(day);
} // end function

getMyday();

/* Updating an element of an array by its index */
function changeMyElement(){
    values[2] = 100;

    // changes a number to a string
    values[4] = 'One Hundred';

    console.log(`Value collection changed ${values}`);
} // end function

changeMyElement();

/* length of an array */
let size = days_of_week.length;
console.log(size);

/* Using a for loop with an array*/
function loopArray(){
    for(let i = 0; i < values.length; i++){
        console.log(values[i]);
    } // end for loop 
} // end function

/* using the for...in statement */
function otherLoop(){
    for(const item of days_of_week){
        console.log(item);
    } // end for...in
} // end function

// loopArray();

// otherLoop();

/* The foreach instance method using an inline function. */
function loopForeach(){
    days_of_week.forEach(function countEntry(myElements) {
        console.log(myElements);
    });
} // end function

// loopForeach();

const trucks =['Chevy', 'Ford', 'Dodge', 'Toyota'];

/* The join instance method returns a concatenated string 
of the elements of the array including a separate defined in
the join method. */
function truckJoin(){
    let sale = trucks.join(' & ');
    console.log(sale);
}
truckJoin();

/* The slice method will create a shallow copy of an array that is smaller than the original. It
creates a new array object */

function truckSlice(start, end){
    // ensure the parameters are numbers
    const trucks2023 = trucks.slice(start, end);
    trucks2023.forEach(function trucksResult(results){
        console.log(results);
    });
    
} // end function
// truckSlice(0, 2);

/* The pop method will remove the last element of the array
and will return that element to variable*/

function truckPop(){
    let myTruck = trucks.pop();
    // myTruck is assigned the single item as a result of the pop method
    console.log(myTruck);

    // print out the array again. Should be missing 1 element
    console.log(trucks);
} // end function

//truckPop();

/* The push method will add one or more elements to
the end of the array and return its length to a variable. */
function truckPush(){
    const addMore = trucks.push('Nissan', 'Jeep', 'Volkswagen');
    // get the new length of the array
    console.log(addMore);
    console.log(trucks.length);
//printout the array with new values added
console.log(trucks);
} // end function

truckPush();

/* The reverse  method will change the order of the element
 of the array to the opposite direction*/

function truckReverse(){
    const backward = trucks.reverse();
    // backward will display the elements in reverse order
    console.log(backward);
    
    // reverse is destructive because it affects the original array
    // also changes the original array
    console.log(trucks);
} // end function

truckReverse();

/* the shift method will remove the first element of the array and
return it to a variable. */
function truckShift(){
    let vehicle = trucks.shift();

    // vehicle will be the first element from the shift
    console.log(vehicle);

    // print out the array to show the element removed
    console.log(trucks);
} // end function

truckShift();