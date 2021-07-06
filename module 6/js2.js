
function  checkNumber (n) {
    if(n> 1000){
        console.log("error");
        return;
    }
    if( n==1 || n ==0 || n<0){
        console.log("you put 1 or 0, try again");
        return;
    }
    if( n%2 == 0 && n > 2) {
        return false;
    }
    const s = Math.sqrt(n);
    for(let i = 3; i<= s; i +=2) {
        if(n%i === 0) {
            return false;
        }
        
    }
    return true;
 }

let d = checkNumber(+prompt("enter some number"));
if(d == false) {
    alert("composite number");
} else 
    alert("simple number");