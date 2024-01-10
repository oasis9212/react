function hello(){
    return 'hello';

}
// 비동기 작업 객체. 
// async function helloAsync(){
//     return delay(3000).then(()=>{
//         return "hello async"
//     })
// }

function delay(ms){
    return new Promise((resolve)=>{
        setTimeout(resolve,ms);
    })
}

//helloAsync().then((res)=> console.log(res))

// await 이용
async function helloAsync(){
    await delay(3000); // await  이 부분은 리턴이 하기 전까지 이걸 돌리고 이후에 리턴을 시킨다. 
        return "hello async"
}

// 다른 방식 이용

async function main(){
    console.log(' 찍음')
    const res= await helloAsync();
    console.log(res,'main')
}

main()