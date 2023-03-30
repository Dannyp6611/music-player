import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 className="font-bold text-xl underline">Music Player</h1>
    </div>
  );
}

export default App;
