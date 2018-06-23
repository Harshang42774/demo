//Increment values of array by 2

let inputArray = [1,2,3,'hello',4,5];

const incrementor = (array) =>{
    for(i=0;i<array.length;i++){
        (isNaN(array[i]))?null:array[i]=array[i]+2;
    }
    return array;
}
incrementor(inputArray);
console.log(inputArray);