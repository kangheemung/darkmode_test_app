import { useState } from 'react';

function Drag() {
    // Define some initial items
    const initialItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

    // Component state
    const [items, setItems] = useState(initialItems);
    const [draggingItem, setDraggingItem] = useState(null);

    // Drag over handler
    function handleDragOver(e, index) {
        e.preventDefault(); // Prevent default to allow drop
        if (draggingItem === null || draggingItem === index) return;
        
        const newItems = [...items];
        const draggingItemValue = newItems.splice(draggingItem, 1)[0];
        newItems.splice(index, 0, draggingItemValue);

        setDraggingItem(index);
        setItems(newItems);
    }

    // Drag end handler
    function handleDragEnd() {
        setDraggingItem(null);
    }

    // Drag start handler
    function handleDragStart(index) {
        setDraggingItem(index);
    }

    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}
                    draggable
                    onDragStart={() => handleDragStart(index)}
                    onDragOver={(e) => handleDragOver(e, index)}
                    onDragEnd={handleDragEnd}
                    style={{
                        opacity: draggingItem === index ? 0.5 : 1,
                    }}
                >
                    {item}
                </li>
            ))}
        </ul>
    );
}

export default Drag;
