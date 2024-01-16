
//import './App.css';
import React from 'react';
import Myheader from './myheader'
import Myfooter from './Myfooter'
import Counter from './counter';
import Myintro from './myintro'
import Container from './Container';

function App() {

  const counterprops= {
    a:1,
    b:2,
    c:3,
    
  }

  return (
    
    <>
    <div className="App">
      

       <Myintro />
      <Myfooter />
    </div>
    
   
      <Container>
         <Counter {...counterprops} />
      </Container>
     
    
    </>
  );
}
//<React.Fragment>  2개이상의 엘리먼트를 쓸때는 써라 <> </>축약형
// useState 스테이트 작업시작 
export default App;
