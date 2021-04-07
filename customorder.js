let users = [];
for (let index = 0; index < 10; index++) {
    let user = {
        name: 'Ram' + index,
        age: 3 * index
    }
    users.push(user);
}
//users.reverse();
console.log(users);
