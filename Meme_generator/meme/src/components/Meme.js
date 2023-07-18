//import Star from "../assets/images/cute_star.png";
import "../assets/styles/styles.css";
import { useState, useEffect } from "react";

export default function Meme() {
  const [allMemes, setAllMemes] = useState([]);
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  /**
    useEffect takes a function as its parameter. 
    If that function returns something, it needs to be a cleanup function. 
    Otherwise,it should return nothing. 
    If we make it an async function, it automatically retuns a promise instead of a function or nothing.
    Therefore, if you want to use async operations inside of useEffect,
    you need to define the function separately inside of the callback
    function, as seen below:
    */

  //   useEffect(() => {
  //     async function getMemes() {
  //         const res = await fetch("https://api.imgflip.com/get_memes")
  //         const data = await res.json()
  //         setAllMemes(data.data.memes)
  //     }
  //     getMemes()
  // }, [])

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function getMemeImage() {
    const memesArray = allMemes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...meme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          name="topText"
          value={meme.topText}
          placeholder="Top text"
          className="form--input"
          onChange={handleChange}
        />
        <input
          type="text"
          name="bottomText"
          value={meme.bottomText}
          placeholder="Bottom text"
          className="form--input"
          onChange={handleChange}
        />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" alt="meme_image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}