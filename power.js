function pow(a,b){
    result=1;
    if(a>0 && b>0){
        for (let i=0; i<n; i++){
            result=result*a;
        }
    alert(result);
    }
    else{
        alert("Invalid input");
    }
}

let x = prompt("Enter value of x", '');
let n = prompt("Enter value of n", '');

pow(x,n);