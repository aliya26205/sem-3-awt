
import { useState } from 'react';
import './App.css';
function Button({ name, onButtonClick }) {
  return (
    <button onClick={onButtonClick}>
      {name}
    </button>
  );
}

function App() {
  const [count, setCount] = useState(0);

  function handleClick(name) {
    const total = count + 1;
    setCount(total);
    alert(name + ' clicked! Total clicks: ' + total);
  }

  return (
    <div className="container">
      <h1>React Button Application</h1>

      <h2>Click Any Button</h2>

      <Button
        name="Button 1"
        onButtonClick={() => handleClick('Button 1')}
      />

      <Button
        name="Button 2"
        onButtonClick={() => handleClick('Button 2')}
      />

      <Button
        name="Button 3"
        onButtonClick={() => handleClick('Button 3')}
      />
      <br/>
      <h2>Total Clicks: {count}</h2>
    </div>
  );
}

export default App;
