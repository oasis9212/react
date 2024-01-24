import { useEffect, useMemo, useRef, useState } from 'react';
import './App.css';
import DiaryEditor from './DiaryEditor';
import Diarylist from './Diarylist';
function App() {

  const [data,setData] = useState([]);

  const dataId = useRef(0)

  const getData = async() =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/comments').then((res)=> res.json())
    
    const initData = res.slice(0,20).map((it)=>{
      return{
        author : it.email,
        content : it.body,
        emtion : Math.floor(Math.random() * 5)+1,
        createed_date: new Date().getTime(),
        id: dataId.current++ 
      }
    })

    setData(initData)
  }

  useEffect(()=>{
    getData();
  },[])

  const onCreate = (author,content,emtion) => {
    const createed_date=new Date().getTime()
    const newItem = {
      author,
      content,
      emtion,
      createed_date,
      id : dataId.current,
    };
    dataId.current+= 1;
    setData([newItem,...data ])
  };
  const onRemove = (targetId) => {
    const NewDiray = data.filter((it)=> it.id !== targetId)
   // setData([...NewDiray]) 둘다 된다. 
    setData(NewDiray)
  }

  const onEdit = (targetId, targetContent) => {
    setData(
      data.map((it)=>it.id === targetId ? {...it,content:targetContent} : it)
    )
  }
  // 콜백을 받아서 연산 결과 값을 최적화하는 역할 
  const getDiaryAnalysis = useMemo(
    () =>{
  
    
    const goodcount = data.filter((it) => it.emtion >= 3).length
    const bedcount = data.length - goodcount
    const goodRate =(goodcount/data.length) *100;
    return {goodcount,bedcount,goodRate}
  },[data.length])
  // 의존성 배열에 넣는건 변화값이 변경될때 감지해서 함수 발동 

  const {goodcount,bedcount,goodRate} = getDiaryAnalysis;

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate}/>
      <div>전체 일기 : {data.length}</div>
      <div>기분 좋은 일기 : {goodcount}</div>
      <div>기분 나쁜 일기 : {bedcount}</div>
      <div>기분 좋은 일기 비율: {goodRate}</div>
      <Diarylist onEdit={onEdit} diarylist={data} onRemove={onRemove}/>
    </div>
  );
}

export default App;
