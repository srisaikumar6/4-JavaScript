
let booklist = ['html', 'css', 'js', 'PHP', 'python', 'node.js'];
let citylist = new Array('bangalore', 'chennai', 'pune');

console.log( booklist.length );
console.log( citylist.length );

/*
    structure of array ?
        arrayName[index] => element
    As
        booklist[0] => html
        booklist[1] => css
        booklist[2] => js
        booklist[3] => PHP
        booklist[4] => python
        booklist[5] => node.js
*/

console.log(booklist[0])
console.log(booklist[5]) // hardcode
console.log(booklist[ booklist.length-1]) // softcode

// how to print all elements of array

console.log("------------All Elements---------------------")
for(let i=0; i<booklist.length; i++){
    console.log(booklist[i])
}

console.log("-------While Loop -----")

let i=0;
while ( i<booklist.length) {
    console.log( booklist[i])
    i++
}

console.log(i)