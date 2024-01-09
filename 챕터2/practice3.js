// 비구조화 할당. 
// let arr = [1,2,3];

// let [one,two,three, four = 4] = arr; // 디폴트값설정 
// console.log(one,two,three)
 
let a =20
let b= 10;

[a,b] =[b,a]
console.log(a,b)

let object = {one: "one", two : "two",  three: "three",name:"wjwjw"};

let {one,two, three, name:myName} = object; // 키값으로 비구조화 할당. 