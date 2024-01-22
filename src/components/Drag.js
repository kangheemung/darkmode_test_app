import React from 'react'

function Drag() {
    //ユーザーが項目をドラッグ アンド ドロップすることで項目のリストを並べ替えることができる、
    //単純なドラッグ アンド ドロップ リスト コンポーネントを作成するタスクを行います。
    // ドラッグ アンド ドロップ リストには次の機能が必要です。
    const [item,setItems]=useState(initialItems);
    const [draggingItem,setDraggingItem]=useState(null);
    //リストの並べ替えを有効にするには、3 つのドラッグ アンド ドロップ イベントを処理する必要があります。
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
      //ユーザーがドラッグしたアイテムをドロップするとトリガーされます。 定義します
      function handleDragEnd() {
        setDraggingItem(null);
      }
  return (
    <div>

    </div>
  )
}

export default Drag
