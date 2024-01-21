import {useState} from 'react'

function ColorSwitcher() {
    const [bgColor, setBgColor] = useState('');
    function handleColorChange(event) {
        setBgColor(event.target.value);
      }
  return (
    <div style={{ backgroundColor: bgColor, width: '500px', height: '500px'}}>
      <select onChange={handleColorChange}>
        <option value="">Select a color</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option> 
        <option value="black">black</option>
      </select>
    </div>
  )
}

export default ColorSwitcher
