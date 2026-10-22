
import { useState } from 'react';
import './App.css';

// Array of joke objects
const jokes = [
  { id: 1, day: 'Monday', joke: 'Why is Monday always tired?', answer: 'Because it has a long week ahead!' },
  { id: 2, day: 'Tuesday', joke: 'Why did Tuesday bring a ladder?', answer: 'Because it wanted to get over Monday!' },
  { id: 3, day: 'Wednesday', joke: 'Why is Wednesday special?', answer: 'Because it is the middle of the week!' },
  { id: 4, day: 'Thursday', joke: 'Why was Thursday excited?', answer: 'Because Friday was almost there!' },
  { id: 5, day: 'Friday', joke: 'Why is Friday everyone’s favourite?', answer: 'Because the weekend is coming!' },
  { id: 6, day: 'Saturday', joke: 'Why did Saturday sleep late?', answer: 'Because it had no school or work!' },
  { id: 7, day: 'Sunday', joke: 'Why is Sunday so relaxed?', answer: 'Because Monday is tomorrow!' }
];

// Custom component to display one joke
function Joke({ joke, answer }) {
  return (
    <div className="joke">
      <h3>{joke}</h3>
      <p>{answer}</p>
    </div>
  );
}

function App() {
  const [selectedDay, setSelectedDay] = useState('');

  return (
    <div className="container">
      <h1>Day-Wise Jokes </h1>
      <p>Select a day to see its joke!</p>

      <div className="buttons">
        {jokes.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedDay(item.day)}
          >
            {item.day}
          </button>
        ))}
      </div>

      {jokes
        .filter((item) => item.day === selectedDay)
        .map((item) => (
          <Joke
            key={item.id}
            joke={item.joke}
            answer={item.answer}
          />
        ))}
    </div>
  );
}

export default App;
