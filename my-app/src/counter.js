import {React, useState } from "react";
import OddevenResult from "./OddevenResult";


const Counter = (initialValue) => {
    // 0 idx 상태값 
    // 1 idx 상태변화의 대한 함수  상태에 대한 업데이트 
    // state 값이 상태변화 행위를 일으킬시 다시 랜더링을 한다.
   
    const [count,setCount] =  useState(initialValue.initialValue);
    const onIncrese = () =>{
        setCount(count+1)
    }
    const ondeserse = () =>{
        setCount(count-1)
    }

    return(
        <>
        <div>
            <h2>{count}</h2>
            <button onClick={onIncrese}>+</button>
            <button onClick={ondeserse}>-</button>
             <OddevenResult count={count}/>
        </div>
        </>
    )
}

Counter.defaultProps = {
    initialValue: 4
}

export default Counter;

