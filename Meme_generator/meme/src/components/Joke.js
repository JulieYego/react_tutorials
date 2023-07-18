import { useState } from "react";

function Joke({ setup, punchline }) {
  const [isShown, setIsShown] = useState(false);
  /**
   * Challenge:
   * - Create state `isShown` (boolean, default to `false`)
   * - Add a button that toggles the value back and forth
   */
  function toggle() {
    setIsShown((prevValue) => !prevValue);
    //console.log(isShown);
  }
  return (
    <div>
      {setup && <h3>{setup}</h3>}
      {isShown && <p>{punchline}</p>}
      <button onClick={toggle}>{isShown ? "Hide " : "Show "}Punchline</button>
      <hr />
    </div>
  );
}

export default Joke;
