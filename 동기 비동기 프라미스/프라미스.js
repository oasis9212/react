function isPositive(number,resolve,reject) {
    setTimeout(()=>{
        if(typeof number === 'number'){
            // 성공
            resolve(number >= 0 ? '양수': 음수)

        }else{
            // 실패 
            reject("주어진 값은 숫자가 아닙니다.")
        }
    },2000)
}

//isPositive([], (res)=>{ console.log('성공적 수행', res)},(err)=>{ console.log('실패적 수행', err)});

function isPositiveP(number){
    const executor = (resolve,reject) => {
        setTimeout(()=>{
            if(typeof number === 'number'){
            // 성공
            console.log(number);
            resolve(number >= 0 ? '양수': '음수')

            }else{
            // 실패 
            reject("주어진 값은 숫자가 아닙니다.")
            }
        },2000)
    }

    const asyncTask =  new Promise(executor);
    return asyncTask;
    // 비동기적 실행을 실질적 실행자  executor
}

const res= isPositiveP(100)

res
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
      console.log(err)  
    })