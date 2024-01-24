import React,{ useState , useEffect} from "react";

// React.memo 컴퍼넌트 재상용

const CounterA = React.memo(({count})=>{
    // 값의 변화가 없으니깐 메모에서 업데이트를 치지 않는다.  리렌더링이 안일어남
    useEffect(()=>{
        console.log(`Count A ${count}`)
    })

    return  <div>{count}</div>
})

const CounterB = ({object})=>{
// 값의 변화가 없어도  객체 비교는 주소 값을 비교하기 때문에 주소가 변경되서 변경된 것으로 친다. 
      useEffect(()=>{
        console.log(`Count B ${object.count}`)
    })

    return  <div>{object.count}</div>
}

const areequal =  (prevprops,nextprops)=> {
    if(prevprops.object.count === nextprops.object.count){
        return true;  // 이전프롭스와 현재 프롭스가 같다 => 리렌더링을 일으키지 않는다. 
    }else{
        return false; //이전프롭스와 현재 프롭스가 다르다 => 리렌더링을 일으킨다. 
    }
                
}

const MemoizedCounterB = React.memo(CounterB,areequal);

//React.memo 예시
const OptimizeTest = () =>{

    const [count,setCount] = useState(1);
     const [object,setObject] = useState({
        count: 1,
     });// 객체로 카운트를 세는

    return <div style={{padding:50}}>
       <div>
            <h2>Counter A</h2>
            <CounterA  count={count}/>
            <button onClick={()=> setCount(count)}>A button</button>
       </div>
       <div>
             <h2>Counter B</h2>
             <MemoizedCounterB object={object}/>
            <button onClick={()=> setObject({ count : object.count })}>B button</button>
       </div>
    </div>
}

export default OptimizeTest;