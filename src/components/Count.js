
import {useState} from 'react'

function Count() {
    const [count,setCount] = useState(0);
    function handleIncrement() {
        setCount(count + 1);
      }
  return (
    <div>
        <p>{count}</p>
      <button onClick={handleIncrement}>クリックすると数字が上がります。</button>
    </div>
  )
}

export default Count
