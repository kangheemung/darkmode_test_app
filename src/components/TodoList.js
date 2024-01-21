import{useState}from 'react'

function TodoList() {
    const [todos,setTodos]=useState([]);
    //listを出力します。
    const [inputValue, setInputValue] = useState('');
    //inputに内容入れます
    function handleInputChange(event) {
        setInputValue(event.target.value);}
        //input内容変えます
        function handleSubmit() {
            if (inputValue.trim()) {
              setTodos([...todos, inputValue.trim()]);
              setInputValue('');
            }
        //TODO_listを出力します。
          }
        function handleDelete(index) {
        setTodos(todos.filter((_, i) => i !== index));
        }

  return (
    <div>
     <input type="text" value={inputValue} onChange={handleInputChange} />
       <button onClick={handleSubmit}>Todoを追加します。</button>
       <ul>
        {todos.map((todo, index) => (
        <li key={index}>
        {todo}
        <button onClick={() => handleDelete(index)}>出来ました！</button>
    </li>
  ))}
</ul>
    </div>
  )
}

export default TodoList
