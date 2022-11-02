/* Task1 */
function mathOrder() {
    const total1 = 10 + 32 * 12 / 3;
    const total2 = (10 + 32 )* 12 / 3;

    console.log('Expected Output\n'+total1+'\n'+total2);
} // end function

mathOrder();

/* Task2 */
function Assign(num1, num2){
    console.log(`Addition Assignment Operator ${num1 += num2}`);
    console.log(`Multiply Assignment Operator ${num1 *= num2}`);
    console.log(`Modulus Assignment Operator ${num1 %= num2}`);

}

/* Task3 */
function compareExample(value1, value2){
    const isSame = value1 == value2;
    const isOtherSame = value1 === value2;
    const isDifferent = value1 != value2;

    console.log(`is same: ${isSame} is other same: ${isOtherSame} is diffferent: ${isDifferent}`);
} // end function


