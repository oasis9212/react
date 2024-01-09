function taskA(a,b){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
        const res = a+b;
        resolve(res);
        },3000)
    });

    
}
function taskB(a){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            const res= a*2;
            resolve(res) 
        },1000)
    });
}
function taskC(a){
     return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            const res= a*-1;
            resolve(res) 
        },2000)
    });
}
// 프라미스식은 소스를 한줄씩 늘려 쓸수 있다. 
taskA(5,1).then((a_res)=>{
    console.log("A result:",a_res)
   return taskB(a_res);
}).then((b_res)=>{
     console.log("B result:",b_res)
    return taskC(b_res)
}).then((c_res)=>{
    console.log("C result : ", c_res)
})