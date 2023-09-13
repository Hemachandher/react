import React, { useState } from 'react';

const App = () => {
  const [search1, setSearch1] = useState('');
  const [search2, setSearch2] = useState('');
  const [notes, setNotes] = useState('');

  const handleSearch1Change = (e) => {
    setSearch1(e.target.value);
  }

  const handleSearch2Change = (e) => {
    setSearch2(e.target.value);
  }

  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  }

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ flex: 1 }}>
        <input
          type="text"
          value={search1}
          onChange={handleSearch1Change}
          placeholder="Search 1"
        />
        <div style={{ height: '70vh', border: '1px solid #ccc' }}>
          {/* Video Area */}
          Video Area
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <input
          type="text"
          value={search2}
          onChange={handleSearch2Change}
          placeholder="Search 2"
        />
        <div style={{ height: '70vh', border: '1px solid #ccc' }}>
          {/* Rightmost Area */}
          Rightmost Area
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ height: '70vh', border: '1px solid #ccc' }}>
          {/* Open Area */}
          Open Area
          <textarea
            value={notes}
            onChange={handleNotesChange}
            placeholder="Notes"
            style={{ width: '100%', height: '50%' }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
