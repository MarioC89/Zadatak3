import React, { useState } from "react";
import data from "./data";
import List from "./List";


/* export const Button = styled.button`
  color: var(--clr-white);
  display: block;
  width: 100%;
  border-color: transparent;
  background: var(--clr-pink);
  margin: 2rem auto 0 auto;
  text-transform: capitalize;
  font-size: 1.2rem;
  padding: 0.5rem 0;
  letter-spacing: var(--spacing);
  border-radius: var(--radius);
  outline: 1px solid rgba(242, 138, 178, 0.8);
  cursor: pointer;
`; */

function App() {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section 
        className="container"
        style={{
          width: `90vw`,
          margin: `0 auto`,
          maxWidth: `var(--max-width)`,
        }}
        >
        <h3 className="container-main-title">{people.length} birthdays today</h3>
        <List people={people} />
        {/* <Button type="reset" classname={styles.button} >Clear all</Button> */}
        <button className="" onClick={() => setPeople([])}>
          Clear all
        </button>
      </section>
    </main>
  );
}

export default App;
