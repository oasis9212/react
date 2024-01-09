// function taskA(){
//     console.log('A작업 끝');
// }
// taskA();
// 동기식

function taskAB(a,b,callback){
    setTimeout(()=>{
       const res = a+b;
        callback(res);
    },2000)
}
function taskB(a,cb){
    setTimeout(()=>{
        const res= a*2;
        cb(res) 
    },1000)
}
function taskC(a,cb){
    setTimeout(()=>{
        const res= a*-1;
        cb(res) 
    },2000)
}



taskAB(4,5,(a_res)=>{
    console.log("AB res", a_res)
    taskB(a_res,(b_res)=>{
        console.log("b res", b_res)
        taskC(b_res,(c_res)=>{
            console.log("c_res", c_res)
        })
    })
})
console.log('끝')