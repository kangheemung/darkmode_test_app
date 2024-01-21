import { useState } from 'react';

// Assuming initialItems is either imported or placed above this component
const initialItems = ['Item 1', 'Item 2', 'Item 3']; // Example items

function SearchFilter() {
  const [search, setSearch] = useState('');
  const [items, setItems] = useState(initialItems);
  const [draggingItem, setDraggingItem] = useState(null);
  
  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  function handleDragStart(index) {
    setDraggingItem(index);
  }

  function handleDragOver(index) {
    if (draggingItem === null) return;
    if (draggingItem === index) return;

    const newItems = [...items];
    const draggingItemValue = newItems[draggingItem];
    newItems.splice(draggingItem, 1);
    newItems.splice(index, 0, draggingItemValue);

    setDraggingItem(index);
    setItems(newItems);
  }

  function handleDragEnd() {
    setDraggingItem(null);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={item}>{item}</li> // It would be better to use unique IDs instead of index here
        ))}
      </ul>
      <ul>
        {items.map((item, index) => (
          <li
            key={item} // Again, better to use unique IDs rather than index
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={() => handleDragOver(index)} 
            onDragEnd={handleDragEnd}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchFilter;
