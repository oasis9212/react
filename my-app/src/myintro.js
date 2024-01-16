import React from 'react';
const Myintro= () => {
    
 let name="jeon"
  // 스타일을 객체 스타일로 할수도있다. 
  const style = {
    App: {
      backgroundColor : "white",
    },
    h2: {
       color: 'red',
    },
    bold_text:{
      color: 'blue',
    },
  };
    return (
    <div>

        <h2 style={style.h2}>안녕 리엑트 {name}</h2>
      <b id="bold_text" style={style.bold_text}>bold_tex</b>
      <br />
      <b>{[]}{false} 결과는? 배열이나 불리언은 안나온다.</b>
      <br />
      <b>{1 === 1 ? '맞음' : '틀림'} 3항연산자 (조건부랜더링은 된다.).</b>
        
    </div>
    )
};

export default Myintro;
