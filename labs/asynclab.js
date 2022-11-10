/* Task1 */
function task1(arg){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`This task was ran  ${arg} times`);
        }, 6000);
    })
}

/* Task2 */
async function task2(echo){
    console.log('Lets start the task');
    const result = await task1(echo);
    console.log(result);
}

/* Task3 */
for(let index = 0; index < 5; index++){
    task2(index);
}