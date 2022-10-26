/* Task1 */

function whileLoop(){
    let value = 5;
    while(value <= 25 ){
        console.log(value);
        value++;
    } 
}

whileLoop();
console.log();

/* Task2 */

function forLoop(){
    for(let index = 0; index <= 30; index++){
        if(index % 3 == 0){
            console.log(`${index}`);
        }      
    } 
} 

forLoop();