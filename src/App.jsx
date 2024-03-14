import { useEffect, useState, useContext, useRef } from 'react';
import './App.css'
import MyContext from './main';

function App() {
  const [count, setCount] = useState(0);
  const myContext = useContext(MyContext);
  const ref = useRef();

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleRef = () => {
    console.log(ref);
  }

  useEffect(() => {
    console.log('useEffect');
  }, [count]);
  // 厳格なモードだとローカル環境で2回発火する
  // 第二引数の変数が更新されたときに発火する

  return (
    <div className="App">
      <h2>UseState, UseEffect</h2>
      <button onClick={handleClick}>+</button>
      <p>{count}</p>

      <hr />

      <h2>UseContext</h2>
      <p>{myContext.name} is {myContext.age} years old.</p>

      <hr />

      <h2>UseRef</h2>
      <input type="text" ref={ref} />
      <button onClick={handleRef}>UseRef</button>
      {/* refはDOM要素を取得する、値を更新してもuseStateと違ってレンダリングが起きない？ */}

    </div>

  )
}

export default App
