// Prints all odd numbers before entered value

const oddPrinter = (number) =>{
    for(i=1;i<=number;i++){
        (i%2==0)?null:console.log(i);
    }
}
oddPrinter(20);