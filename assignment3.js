//Search for character in a string and print its index values

let string = "This is an ordinary string";
let character = "i";
let carry = 0;

const indexFinder = (string,character) =>{
    while ((string.match(character))!=null) {
        console.log((string.match(character).index)+1+carry);
        carry =  string.match(character).index+1+carry;
        string = string.slice((string.match(character).index)+1,string.length);
    }
}

indexFinder(string,character);