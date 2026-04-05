import { useState } from 'react'
import './App.css'
import CountBox from './components/CountBox'
import counterStore from '../stores/counterStore';

function App() {
  //const [count, setCount] = useState(0)
  const {count, increase, increaseBy, decreaseBy} = counterStore();
  
  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={increase}>1씩 증가</button>
      <button onClick={()=>increaseBy(10)}>10씩 증가</button>
      <button onClick={()=>decreaseBy(10)}>10씩 감소</button>
      <CountBox count={count}/>
    </div>
  )
}

export default App
