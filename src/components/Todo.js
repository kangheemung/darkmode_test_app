import {useState} from 'react'

function Todo() {
    const[text,setText]=useState('')
    function handleTextareaChange(event) {
        setText(event.target.value);
      }
  return (
    <div>
      <textarea value={text} onChange={handleTextareaChange} />
      <p>文字数が分かります。: {text.length}</p>
    </div>
  )
}

export default Todo
