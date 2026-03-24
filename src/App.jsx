import { useState } from 'react'
import './App.css'
import Box from "./component/Box"

//1. 박스2개
//2. 가위,바위, 보 버튼
//3. 버튼 클릭하면 클릭한 값이 박스에 보임
//4. 컴퓨터는 랜덤하게 아이템 선택이 된다.
//5. 3,2의 결과를 가지고 누가 이겼는지 승패를 따진다.
//6. 승패결과에 따라 테두리 색이 바뀐다.(이기면-초록, 지면-빨강, 비기면-검정)

const choice = {
  rock:{
    name: "Rock",
    img: '/img/rock.jpeg'
  },
  scissors:{
    name: "Scissors",
    img: '/img/scissors.jpg'    
  },
  paper:{
    name: "Paper",
    img: '/img/paper.jpg'
  }
}

function App() {
  const [userSelect, setUserSelect] = useState(null)

  const play = (userChoice) => {
    setUserSelect(choice[userChoice])
    
  }
  return (
    <div>
      <div className='main'>
        <Box title="You" item={userSelect} />
       {/*  <Box title="Computer" /> */}
      </div>
      
      <div className='main'>
        <button onClick={()=>play("scissors")}>가위</button>
        <button onClick={()=>play("rock")}>바위</button>
        <button onClick={()=>play("paper")}>보</button>
      </div>
      
    </div>
  )
}

export default App
