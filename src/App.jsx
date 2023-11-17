import React, { useState } from "react";
import Birthdays from "./data.js";
import BirthdaysList from "./components/BirthdaysList.jsx";
import Title from "./components/Title.jsx";

function App() {
  const [birthdays, setBirthdays] = useState(Birthdays);
  const handleDelete = (id) => {
    const filteredBirthday = birthdays.filter((birthday) => {
      return birthday.id !== id;
    });
    setBirthdays(filteredBirthday);
  };
  const handleCLear = () => {
    setBirthdays([]);
  };

  const handleReturn = () => {
    setBirthdays(Birthdays);
  };
  return (
    <div className="cite-container py-10 text-4xl">
      <Title birthdaysCount={birthdays.length} />
      <BirthdaysList birthdays={birthdays} handleDelete={handleDelete} />
      {birthdays.length > 0 ? (
        <button onClick={handleCLear} className="clear">
          Clear All
        </button>
      ) : (
        <button onClick={handleReturn} className="return">Return</button>
      )}
    </div>
  );
}

export default App;
