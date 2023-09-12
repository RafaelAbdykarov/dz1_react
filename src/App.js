import './App.css';
import React,{useState} from 'react'
function App() {
  const [count,setCount] = useState(0)
  const add = () => {
    setCount(count + 1)
  }
  const remove = () => {
    setCount(count - 1)
  }
  return (
    <div className="App">
      <h1>{count}</h1>
        <button onClick={add}>+</button>
        <button onClick={remove}>-</button>
    </div>
  );
}

export default App;
