let user="Akanksha";
console.log(user);
let username= user.concat(" Singh");
console.log(username);

//CONVERSION:
let a=1;
console.log(a.toString());

//NUMBERS:
let age= 22.5;
console.log(age);

//JSON
let order = {
    item:"laptop",
    price: 56000,
    address:{
        streetname:"sector 62",
        city:"Noida",
        pincode: 201301
    }
}

//ARRAY:-----------------------------
let numbers=[1,3,5,-1,-2];
console.log(numbers);
//numbers.push(7);
//console.log(numbers);
//numbers.pop();
//console.log(numbers);
numbers.splice(2,2);
console.log(numbers);

//SORTING:---------------------------
//numbers.sort(function(value1, value2){
    //callback function
//    return value1-value2;
//})
//console.log(numbers);

//FOR LOOP:---------------------------
//for (let index=0; index< numbers.length; index++){
//    const element= numbers[index];
//    console.log(element);
//}

//FOR EACH LOOP:-----------------------
//console.log("Numbers with index: ")
//numbers.forEach(function(element, index){
//    console.log(index, element);
//})
let sum=0;
while(true){
    let value= +prompt ("Enter numbers to add", '')
    if(!value) break;
    sum += value;
}
alert ("Sum: "+ sum);

for(let i=0; i<10; i++){
    if(i%2==0) continue;
    alert (i)
}