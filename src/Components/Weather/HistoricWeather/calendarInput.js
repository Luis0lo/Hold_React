import { useState } from 'react';

const CalendarInput = ({ setBirthdayInfo }) => {
  const [birthdayDate, setBirthdayDate] = useState(null);
  const [birthdayLocation, setBirthLocation] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setBirthdayInfo({ birthdayDate, birthdayLocation });
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          required
          type="date"
          id="birthday"
          name="birthday"
          onChange={(e) => setBirthdayDate(e.target.value)}
        />
        <input
          required
          type="text"
          id="location"
          name="location"
          onChange={(e) => setBirthLocation(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default CalendarInput;
