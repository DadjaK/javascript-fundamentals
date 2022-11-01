/* Task1 */

function getColors(){
    const color = new Map();
    color.set(1, 'Black');
    color.set(2, 'Blue');
    color.set(3, 'Green');
    color.set(4, 'Purple');
    color.set(5, 'Red');
    color.set(6, 'Yellow');
    return color;
}

/* Task2 */

/* First function */
function colorElement(value, key){
    console.log(`${key} is for ${value}`);
}

/* Second function */
function colorForEach(){
    let myColors = getColors();
    myColors.forEach(colorElement);
} // end function

colorForEach();