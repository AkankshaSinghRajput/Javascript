function showTable(){
    let order={
        item:"Laptop",
        price:27,
        pincode:67
    }
    let x = document.getElementById("elements").value;
let orders = [];
for (let index = 0; index < x; index++) {
    let order = {
        item: 'Laptop' + index,
        price: 30000+index*10,
        pincode: 201301+index
    }
    orders.push(order);
}
console.log(orders);
    let table1="<table><tr><th> ItemName</th> <th>Price</th> <th>Pincode</th></tr></table>"
    for(let i=0; i<x; i++){
        table1+="<tr><td>"+orders[i].item+"</td>";
        table1+="<td>"+orders[i].price+"</td>";
        table1+="<td>"+orders[i].pincode+"</td></tr>";
    }
    table1+="</table>";
    document.getElementById("Table1").innerHTML=table1;
}