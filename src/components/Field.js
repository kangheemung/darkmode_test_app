import {useState} from 'react'

function Field() {
    const [text, setText] = useState('');
    //文字入力して内容変わります。
    function handleInputChange(event) {
        setText(event.target.value);
      }
  return (
    <div>
      <input type="text" value={text} onChange={handleInputChange}></input>
      <p>Input text:[{text}]インプットに書いた内容は出力されます。</p>
    </div>
  )
}

export default Field
