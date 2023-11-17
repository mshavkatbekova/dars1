import React from "react";

function BirthdaysList({ birthdays, handleDelete}) {
  return (
    <div className="cite-container">
      <ul>
        {birthdays &&
          birthdays.map((birthday) => {
            return (
              <li key={birthday.id}>
                <div className="flex gap-8 mb-4 items-center pt-7">
                  <img src={birthday.image} alt="" className="image" />
                  <div className="justify-end">
                    <h3 className="py-3">{birthday.name}</h3>
                    <p className="age">{birthday.age} years</p>
                  </div>
                  <button
                    onClick={() => handleDelete(birthday.id)}
                    className="button"
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default BirthdaysList;
