//For..in Statement
let list: number[] = [4, 5, 6];
for (let i in list) {
console.log(i); //keys: "0", "1", "2"
console.log(list[i]); //values: "4", "5", "6"
}

//For..Of Statement
let list1: number[] = [4, 5, 6];
for (let i of list1) {
console.log(i); //values: "4", "5", "6",
}
