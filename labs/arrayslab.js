/* Task1 */

const iceCreamFlavor = ['butterscotch', 'caramel', 'chocolate', 'mint', 
                'peanut butter', 'pistachio', 'raspberry', 
                'strawberry', 'vanilla', 'watermelon'];

function Loop(){
    for(const item of iceCreamFlavor){
        console.log(item);
    } 
}

Loop();

/* Task2 */
function flavorJoin(){
    let str = iceCreamFlavor.join(' & ');
    console.log(str);
}
flavorJoin();