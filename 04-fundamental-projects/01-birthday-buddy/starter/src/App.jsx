import data from "./data";
import { useState } from "react";
import List from "./List";

const App = () => {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{people.length} birsdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>remove all</button>
      </section>
    </main>
  );
};
export default App;
