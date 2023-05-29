import { useState } from 'react'
import Clock from './components/Clock'
import './App.css'

function App() {
  const [clocks, setClocks] = useState([]);
  const [name, setName] = useState('');
  const [timezone, setTimezone] = useState(0);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleTimezoneChange = (event) => {
    setTimezone(Number(event.target.value));
  };

  const handleAddClock = () => {
    if (name && timezone) {
      setClocks([...clocks, { name, timezone }]);
      setName('');
      setTimezone(0);
    }
  };

  const handleRemoveClock = (index) => {
    setClocks(clocks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div className="add-clock-form">
        <input type="text" placeholder="Название" value={name} onChange={handleNameChange} />
        <input type="number" placeholder="Временная зона" value={timezone} onChange={handleTimezoneChange} />
        <button onClick={handleAddClock}>Добавить</button>
      </div>
      <div className="clocks-container">
        {clocks.map((clock, index) => (
          <Clock
            key={index}
            name={clock.name}
            timezone={clock.timezone}
            onRemove={() => handleRemoveClock(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
