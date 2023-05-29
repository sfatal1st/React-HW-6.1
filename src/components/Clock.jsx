import { useState, useEffect } from 'react';

export default function Clock({ name, timezone, onRemove }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const hourRotation = 30 * (time.getUTCHours() + timezone);
  const minuteRotation = 6 * time.getUTCMinutes();
  const secondRotation = 6 * time.getUTCSeconds();

  return (
    <div className="clock">
      <div className="hour-hand" style={{ transform: `rotate(${hourRotation}deg)` }}></div>
      <div className="minute-hand" style={{ transform: `rotate(${minuteRotation}deg)` }}></div>
      <div className="second-hand" style={{ transform: `rotate(${secondRotation}deg)` }}></div>
      <div className="clock-info">
        <span className="clock-name">{name}</span>
        <button className="remove-button" onClick={onRemove}>✕</button>
      </div>
    </div>
  );
}