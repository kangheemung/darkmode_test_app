import {useState} from 'react'
import './Bluemode.css';

function Bluemode() {
  const [blue,setBlue] = useState(false);
  return (
    <div>
      <h1 className={`
        style
        ${ blue ? 'is-blue': 'blue' }
        `}
      onClick={() => setBlue(!blue)}>
      クリックしたら色が変わります。</h1>
    </div>
  )
}

export default Bluemode
