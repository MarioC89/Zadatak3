import React from "react";

function List({ people }) {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article className="" key={id}>
            <img className="person-img" src={image} alt={name} />
            <div className="">
              <h4 className="person-name">{name}</h4>
              <p className="person-age">{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
}

export default List;
