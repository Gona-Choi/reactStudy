import { useState } from 'react'
import './App.css'
import Box from "./component/Box"

//1. 박스2개
//2. 가위,바위,보 버튼을 눌렀을 때 콘솔에 뜨게 한다.
//3. 버튼 클릭하면 클릭한 값이 박스에 보임
//4. 컴퓨터는 랜덤하게 아이템 선택이 된다.
//5. 3,2의 결과를 가지고 누가 이겼는지 승패를 따진다.
//6. 승패결과에 따라 테두리 색이 바뀐다.(이기면-초록, 지면-빨강, 비기면-검정)


const choice = {
  rock:{
    name:"Rock", img:'/img/rock.jpeg'
  },
  paper:{
    name:"Paper", img:'/img/paper.jpg'
  },
  scissors:{
    name:"Scissors", img:'/img/scissors.jpg'
  }
}
function App(){
  const [userSelect, setUserSelect] = useState(null)
  const [computerSelect, setComputerSelect] = useState(null)
  const [result, setResult] = useState("")
  

  const play = (userChoice) => {
    console.log(userChoice,"선택됨")
    setUserSelect(choice[userChoice])
    let computerChoice = randomChoice()
    setComputerSelect(computerChoice)
    setResult(judgement(choice[userChoice], computerChoice))
  }

  const randomChoice = () => {
    let itemArray = Object.keys(choice)
    console.log(itemArray)
    let randomNum = Math.floor(Math.random()*itemArray.length)//범위를 늘리는 것 0부터2.999까지
    console.log(randomNum)
    let final = itemArray[randomNum]
    return choice[final]
  } 

  const judgement= (user,computer) => {
    if (user.name==computer.name){
      return "TIE"
    }else if(user.name=='Rock') {return computer.name =='Scissors'?'WIN':'LOSE'}
    else if(user.name=='Paper') {return computer.name =='Rock'?'WIN':'LOSE'}
    else if(user.name=='Scissors') {return computer.name =='paper'?'WIN':'LOSE'}
  }

  return(
  <div>
    <div className='main'>
    <Box title='USER' item = {userSelect} result={result}/>
    <Box title='COMPUTER' item = {computerSelect} result={result}/>
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
