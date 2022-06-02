import { useState } from 'react';
import css from './calendarInput.module.css';

const CalendarInput = ({ setBirthdayInfo }) => {
  const [birthdayDate, setBirthdayDate] = useState(null);
  const [birthdayLocation, setBirthLocation] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setBirthdayInfo({ birthdayDate, birthdayLocation });
  };

  return (
    <div >
      <form onSubmit={(e) => handleSubmit(e)}>
        <input className={css.styles}
          required
          type="date"
          id="birthday"
          name="birthday"
          onChange={(e) => setBirthdayDate(e.target.value)}
        />
        <input className={css.styles}
          required
          type="text"
          id="location"
          name="location"
          placeholder="Birthplace"
          onChange={(e) => setBirthLocation(e.target.value)}
        />
        <button className={css.styles} type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CalendarInput;
