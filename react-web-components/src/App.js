import { useState } from 'react';

import './App.css';

function App() {
  const [name, setName] = useState('');
  return (
    <div className="App">
      <input
        placeholder="Enter your name"
        onChange={(event) => setName(event.target.value)}
        value={name}
      ></input>
      <div className="greeting">Hello {name}!</div>
      {window.showSearchResult ? (
        <search-result name-attribute={name}></search-result>
      ) : null}
    </div>
  );
}

export default App;