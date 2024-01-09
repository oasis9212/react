let a  = "";
// { 

if(a){
    console.log("true");
}else{
    console.log("FALSE")
}

const getName = (person) =>  {
    if(!person){
        return "객체가 아닙니다. "
    }
    return person.name
}

let person =  { name: "저넌"};
const name = getName(person);
console.log(name)