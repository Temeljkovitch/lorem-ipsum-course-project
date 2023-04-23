import { useState } from "react";
import data from "./data";
import { nanoid } from "nanoid";

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setText(data.slice(0, parseInt(count)));
  };

  return (
    <main className="section-center">
      <h4>tired of boring lorem ipsum?</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="count">paragraphs:</label>
        <input
          min="1"
          step="1"
          max="9"
          type="number"
          name="count"
          id="count"
          value={count}
          onChange={(event) => setCount(event.target.value)}
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((eachText) => {
          const id = nanoid();
          return <p key={id}>{eachText}</p>;
        })}
      </article>
    </main>
  );
};
export default App;
