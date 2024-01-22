import {useRef, useState } from "react";

const DiaryEditor = ({onCreate}) =>{

    const authorInput = useRef();
    const contentInput =  useRef();
    const [state,setstate] = useState({
        author:"",
        content:"",
        emtion : 1
    })

    const HandleChangeState = (e) =>{
        setstate({
            ...state,
            [e.target.name]: e.target.value,
        })
        
    }
    const handleSubit = ()=>{
        if(state.author.length <1){
            
            authorInput.current.focus();
            return;
        }
        if(state.content.length < 5){
            contentInput.current.focus();
            return;
        }

        onCreate(state.author, state.content, state.emtion)
        alert('저장 했습니다. ')
    }

    return (
     <div className="DiaryEditor">
        <h2>오늘의 일기</h2>
        <div>
            <input 
                name="author"
                value={state.author} onChange={HandleChangeState} ref={authorInput}
            />
        </div>
        <div>
            <textarea
                name="content"
                 value={state.content} onChange={HandleChangeState} ref={contentInput}
            />

        </div>
         <div>
            <select name="emtion" value={state.emtion} onChange={HandleChangeState}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
        </div>
        <div>
            <button onClick={handleSubit}> 일기 저장 </button>
        </div>
    </div>
    );
}
export default DiaryEditor;