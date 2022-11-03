/* Task1 */

/* Object initilizer  */
const cat = {
    eyeColor: 'Gray',
    tailLength: 30,
    furPattern: 'Stripes',
    breed:'Ragdoll',  
    sound(){
        console.log('Meow');
    }
};

// Test
console.log(cat.eyeColor);
console.log(cat.tailLength);
console.log(cat.furPattern);
console.log(cat.breed);
cat.sound()

/* Task2 */

class Guitar {
    #headLength;
    #neckLength;
    #soundholeDiameter;
    #key;
    constructor(headLength, neckLength, soundholeDiameter, key){
        this.#headLength = headLength;
        this.#neckLength = neckLength;
        this.#soundholeDiameter = soundholeDiameter;
        this.#key = key;

    } // end constructor

    /* getters */
    get headLength(){ return this.#headLength;}
    get neckLength(){ return this.#neckLength;}
    get soundholeDiameter(){ return this.#soundholeDiameter;}
    get key(){ return this.#key;}

    /* setters */
    set headLength(headLength){
        this.#headLength = headLength;
    } 

    set neckLength(neckLength){
        this.#neckLength = neckLength;
    } 

    set soundholeDiameter(soundholeDiameter){
        this.#soundholeDiameter = soundholeDiameter;
    } 

    set key(key){
        this.#key = key;
    } 

    /* Method */
    play(){
        console.log(`The guitar is playing to ${this.#key}`);
    }

} // end class

// Test
const myGuitar = new Guitar(4, 10, 2, 'C minor');
myGuitar.play();
