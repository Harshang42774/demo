//Search for character in a string and print its index values

let string = "This is an ordinary string";
let character = "s";

const indexFinder = (string,character) =>{
    while ((string.match(character))!=null) {
        console.log((string.match(character).index)+1); 
        string = string.slice((string.match(character).index)+1,string.length);
    }
}

indexFinder(string,character);