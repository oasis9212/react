import DiaryItem from "./Diaryitem";

const Diarylist = ({diarylist,onRemove,onEdit}) =>{
    
return (
    <div className="DiaryList">
        <h2>일기 리스트</h2>
    <div>
        {diarylist.map((it)=>(
            <DiaryItem key={it.id} {...it} onEdit={onEdit} onRemove={onRemove}/>
        
        
        ))}
    </div>
    </div>
    );
}

Diarylist.defaultProps = {
    diarylist : [],
}

export default Diarylist;