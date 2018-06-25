//Increment values of array by 2

let inputArray = [1,2,3,4,5];

/*
const incrementor = (array) => {
    let outArray = array.map((element) => {(isNaN(element))?null:element + 2})
    console.log(outArray);
}
*/
const incrementor = (array) => {
    let outArray = array.map(element => element + 2)
    console.log(outArray);
}

incrementor(inputArray);

