const outer =()=> 1;
const result= outer();
console.log(result);


//FUNCTIONS-----------------------------//
const user={
    name:"Ram",
    eat:function(){
        console.log(this)
    }
}
user.eat();
//change the contxt temporarily
user.eat.call({name:'John'});
user.eat();
user.eat.call({name:'Bob'});
//change the contxt temporarily
user.eat();
user.eat.call({name:'John'});
user.eat=user.eat.bind({name:'Rahim'});
user.eat();
user.eat();