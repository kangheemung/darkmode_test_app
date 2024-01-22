import {useState} from 'react'

function Toggle() {
    const [isVisible, setIsVisible] = useState(false);
    function handleToggleVisibility() {
        setIsVisible(!isVisible);
      }
  return (
    <div>
     <button onClick={ handleToggleVisibility }>Show/Hide Text</button> 
     {isVisible && <p>クリックしたら現れます。</p>}
    </div>
  )
}

export default Toggle
