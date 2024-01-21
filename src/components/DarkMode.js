import Bluemode from './Bluemode';
import Count from './Count';
import Field from './Field';
import Toggle from './Toggle';
import Todo from './Todo';
import TodoList from './TodoList';
import ColorSwitcher from './ColorSwitcher';
import SearchFilter from './SearchFilter';
function DarkMode({dark,setDark}) {
  return (
    <div className={dark ? "App darkmode" : "App lightmode"}>
      <header>
        <div className="header">
          <h1>ここはheaderです。</h1>
          <button onClick={()=>setDark(!dark)}>{dark?"light-mode":"dark-mode"}</button>
        </div>
      </header>
      <body className='body'>
      <Bluemode/>
      <Count />
      <Field/>
      <Toggle/>
      <Todo />
      <TodoList/>
      <ColorSwitcher/>
      <SearchFilter/>
      </body>
    </div>
  )
}

export default DarkMode
