/*
You are going to create a map of your Favorite Books
You will need to either look them up on Amazon, or Barnes and Noble
The key should be the ISBN-10 value.
The value should be the title of the book.

*/

const bookList = new Map();
bookList.set(978_0394702100, 'Facing Mount Kenya');
bookList.set(978_2021125092, 'Petit Piment');
bookList.set(979_8491439669, 'Romeo and Juliet');
bookList.set(978_1982137274, 'The 7 Habits of Highly Effective People');
bookList.set(978_0062315007, 'The Alchemist');
bookList.set(978_0199110834, 'The Lion and The Jewel');
bookList.set(978_9386538222, 'The Little Prince');
bookList.set(978_0684801223, 'The Old Man and The Sea');
bookList.set(978_0385474542,'Things Fall Apart');
bookList.set(978_0743277709,'Watership Down');


// callback function
function bookEntries(value, key){
    console.log(`ISBN ${key} - Book title: ${value}`);
}

// foreach method to display the map
function displayBookCollection(){
    bookList.forEach(bookEntries);
}

displayBookCollection();