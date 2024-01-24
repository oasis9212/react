import React,{useEffect,useState} from "react";

const Lifecycle = () =>{

    // const [count,setCount]= useState(0);
    // const [text,setText] = useState("");

    // useEffect(()=> {
    //     console.log("Mount!")
    // },[]) // 화면이 처음 구성될때 ,[] 의존성 배열
    // // [] 감지하고 싶은 값을 여기에서 넣으면 된다. 

    // useEffect(()=>{
    //     console.log("update!")
    // }) // 배열 추가안하면 리랜더링하면서 호출 

    // useEffect(()=>{
    //     console.log(`count is update: ${count}`)
    // },[count]) // 카운트 변화가 생길시 호출  

    // useEffect(()=>{
    //     console.log(`text is update: ${text}`)
    // },[text]) // 카운트 변화가 생길시 호출


    const UnmountText = () =>{
        useEffect(()=>{
            console.log('mount!')

            return () =>{
                // unMount 시점에 실행함
                console.log("Unmount")
            }

        },[])
        return <div>UnmountText testing </div>
    }

    const [isVisible,setisVisible] = useState(false);
    const toggle = () => setisVisible(!isVisible)

    return <div style={{padding: 20}}>
        {/* <div>
            {count}
            <button onClick={()=> setCount(count+1)}>+</button>
        </div>
        <div>
            <input value={text} onChange={(e)=> setText(e.target.value)}/>
        </div> */}
        <button onClick={toggle}>ON/OFF</button>
        {isVisible  &&  <UnmountText/>}
    </div>   
}

export default Lifecycle