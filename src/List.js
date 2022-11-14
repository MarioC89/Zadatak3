import React from "react";

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article className="" key={id}>
            <img className="" src={image} alt={name} />
            <div>
              <h4 className="">{name}</h4>
              <p className="">{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
