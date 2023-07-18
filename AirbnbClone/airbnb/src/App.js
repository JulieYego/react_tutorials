import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./assets/data/data";
// import Joke from "./components/Joke";
// import JokesData from "./assets/data/JokesData";

/*
Challenge: See if you can correctly pass the necessary props to the 
Joke component in the .map() (and render the jokeElements array) so 
the jokes show up on the page again
*/

function App() {
  // const jokeElements = JokesData.map((joke) => {
  //   return <Joke setup={joke.setup} punchline={joke.punchline} />;
  // });
  const info = data.map((item) => {
    return (
      <Card
        key={item.id}
        //item={item}

        {...item}
        // openspots={infoData.openSpots}
        // img={infoData.img}
        // rating={infoData.stats.rating}
        // reviewCount={infoData.stats.reviewCount}
        // location={infoData.location}
        // title={infoData.title}
        // price={infoData.price}
      />
    );
  });
  return (
    <div>
      <Navbar />
      <Hero />
      {info}
      {/* {jokeElements} */}
      {/* <Joke
        upvotes={6}
        downvotes={2}
        // setup="I got my daughter a fridge for her birthday"
        punchline="I can't wait to see her face light up when she opens it"
      />
      <Joke
        setup="How did the hacker escape the police?"
        punchline="He just ransomware!"
        upvotes={12}
        downvotes={2}
        isPun={true}
      />
      <Joke
        setup="Why don't pirates travel on mountain roads?"
        punchline="Scurvy."
        isPun={true}
        upvotes={69}
        downvotes={2}
      />
      <Joke
        setup="Why do bees stay in the hive in the winter?"
        punchline="Swarm."
        isPun={false}
      />
      <Joke
        setup="What's the best thing about Switzerland?"
        punchline="I don't know, but the flag is a big plus!"
      /> */}
    </div>
  );
}

export default App;
