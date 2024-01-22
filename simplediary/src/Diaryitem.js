import { useRef, useState } from "react"

const DiaryItem = ({author,content,createed_date,emtion,id,onRemove,onEdit}) =>{

    const [isEdit,setIsEdit] = useState(false);
    const toggleIsEdit = () => setIsEdit(!isEdit);
    const [localcontent,setlocalcontent] = useState(content);
    const localContentInput =  useRef();

    const HandleRemove = () => {
            if(window.confirm(`${id}의 일기를 삭제하시겠습니까?`)){
                onRemove(id)
            }
    }



    const handelQuitEdit = () => {
        setIsEdit(false);
        setlocalcontent(content)
    }
    const handeEdit = () =>{
        if(localcontent.length < 5){
            localContentInput.current.focus()
            return;
        }
        if(window.confirm(`${id}번 째 일기를 수정하시겠습니까?`)){
            onEdit(id,localcontent)
            toggleIsEdit();
        }else{
            setIsEdit(false);
            setlocalcontent(content)
        }
    }
    return <div className="DiaryItem">
        <div className="info">
            <span>작성자: {author} | 감정점수: {emtion}</span>
            <br/>
            <span className="date">{new  Date(createed_date).toLocaleString()}</span>
        </div>
        <div className="content">
            {isEdit ? (
                    <>
                    <textarea 
                    ref={localContentInput}
                    value={localcontent} 
                    onChange={(e)=> setlocalcontent(e.target.value)}
                    />
                    </> 
                    ) : <>{content}</>}

        </div>

        {isEdit ? (
        <>
         <button onClick={handelQuitEdit}>수정 취소</button>
         <button onClick={handeEdit}>수정 완료</button>
        </>) : 
        (<>
        <button onClick={HandleRemove}>삭제하기</button>
        <button onClick={toggleIsEdit}>수정하기</button>
        </>
        )}
    </div>
}

export default DiaryItem;