import React, { useState } from 'react';

const SearchFilterReact = () => {
  //この内容の中で探す。
  const [items] = useState(['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry']);
  //フィルタリング
  const [searchQuery, setSearchQuery] = useState('');

  // 探してるものをフィルターするようにする
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // インプットの内容を受け取る
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFilterReact;
