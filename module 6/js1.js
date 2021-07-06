

function checkMassive() {
    const x = ['11', 'gf', "fg", 'gd', '00', 'gd']; 
    let countOdd = 0;
    let countEven = 0;
    let countEmpty = 0;
    let firstElement = 0;
    
    
    for(let i=0; i<x.length; i++){ 
        let rr = x[i];
         if(i == 0 && rr.length != 0) {
             firstElement +=1;
             console.log("first element has value");
         } 
        if(i%2 == 0 && i != 0 && rr != 0) {
            countOdd++;
        }
        if(i%2 != 0 && rr != 0) {
            countEven++;
        }
        if(rr == 0) {
            countEmpty++;
        }
        
     }
    
     console.log("sum odd value " + countOdd);
     console.log("sum even value " + countEven);
     console.log("empty value " +countEmpty);
}


checkMassive();