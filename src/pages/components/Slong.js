import React from "react";
import "./Slong.css";

const DUMMY_SLONGS = [
  {
    id: 0,
    text: "The Age of Artificial Intelligence: Get Ready to Embrace Change",
  },
  { id: 1, text: "Driving Progress, One AI at a Time" },
  { id: 2, text: "Artificial Intelligence: Technology with A Human Touch" },
  { id: 3, text: "AI, Lighting the Path of Tomorrow" },
  { id: 4, text: "AI, Where Possibilities Become Realities." },
  { id: 5, text: "Embrace the Extraordinary with AI." },
  { id: 6, text: "Artificial Intelligence, Beyond Your Imagination." },
  { id: 7, text: "AI, Touching Tomorrow Today" },
  { id: 8, text: "AI, Shaping a Smarter World" },
  { id: 9, text: "Discover Greater Efficiency with AI" },
  { id: 10, text: "Powering Progress, Igniting Innovation" },
  { id: 11, text: "Revolutionizing Reality with AI" },
  { id: 12, text: "AI: Simplifying Complexities" },
  { id: 13, text: "AI: A Journey Beyond the Horizon of Thoughts." },
  {
    id: 14,
    text: "Artificial Intelligence: The Spark that Ignites Endless Possibilities",
  },
  { id: 15, text: "Where Intelligence Meets Innovation" },
  { id: 16, text: "The Art of AI: Masterpiece in Making" },
  { id: 17, text: "Transforming Visions into Reality with AI" },
  { id: 18, text: "Turning Science Fiction into Fact" },
  { id: 19, text: "Experience Excellence with AI" },
  { id: 20, text: "Discover the Extraordinary" },
  { id: 21, text: "The AI Difference Enhancing Lives, Empowering Businesses" },
  { id: 22, text: "Intelligent Innovation for Infinite Impact" },
  { id: 23, text: "AI: Writing the Symphony of the Future" },
  { id: 24, text: "Bringing Your Future to the Present with AI" },
  {
    id: 25,
    text: "Artificial Intelligence: The Game Changer We’ve Been Waiting For",
  },
  { id: 26, text: "Seamless Solutions through Superior AI" },
  { id: 27, text: "Unlocking Universes with AI" },
  { id: 28, text: "Weaving Dreams into Reality with AI" },
  { id: 29, text: "Breathe Life into Your Ideas with AI" },
];

function Slong() {
  const today = new Date();
  const date = today.getDate();

  return (
    <div className="slong-wrapper">
      <div className="slong-text">{DUMMY_SLONGS[date].text}</div>
      {/* <button onClick={() => console.log("date", date)}>date</button> */}
    </div>
  );
}

export default Slong;
