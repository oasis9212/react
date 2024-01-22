import { useRef, useState } from 'react';
import './App.css';
import DiaryEditor from './DiaryEditor';
import Diarylist from './Diarylist';

const dummyList = [
  // {
  //   id:1,
  //   author: "전건수",
  //   content: "하위 1",
  //   emtion: 1 ,
  //   createed_date:new Date().getTime()
  // },
  // {
  //   id:2,
  //   author: "전건수 1",
  //   content: "하위 2",
  //   emtion: 3 ,
  //   createed_date:new Date().getTime()
  // },
  // {
  //   id:3,
  //   author: "전건수 2",
  //   content: "하위 3",
  //   emtion: 2 ,
  //   createed_date:new Date().getTime()
  // },
  // {
  //   id:4,
  //   author: "전건수 3",
  //   content: "하위 4",
  //   emtion:3 ,
  //   createed_date:new Date().getTime()
  // }
]

function App() {

  const [data,setData] = useState([]);

  const dataId = useRef(0)
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
    console.log(`${targetId}가 삭제되었습니다.`)
    const NewDiray = data.filter((it)=> it.id !== targetId)
   // setData([...NewDiray]) 둘다 된다. 
    setData(NewDiray)
  }

  const onEdit = (targetId, targetContent) => {
    setData(
      data.map((it)=>it.id === targetId ? {...it,content:targetContent} : it)
    )
  }

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate}/>
      <Diarylist onEdit={onEdit} diarylist={data} onRemove={onRemove}/>
    </div>
  );
}

export default App;
