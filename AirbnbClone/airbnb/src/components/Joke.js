function Joke({ setup, punchline, upvotes }) {
  return (
    <div>
      <h1>My Jokes</h1>
      <h3>Setup: {setup}</h3>
      <h4>Punchline:{punchline}</h4>
      <hr />
    </div>
  );
}

export default Joke;
