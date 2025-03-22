import React from "react";
import ImageCard from "../../Components/ImageCard";
import Navbar from "../../Components/Navbar";
import "./styles.css";

const imageData = [
  {
    imageSrc: "/assets/crab.jpg",
    title: "Card Title 1",
    description: "Description for card 1.",
    tag: "Tag 1",
  },
  {
    imageSrc: "/assets/crab.jpg",
    title: "Card Title 2",
    description: "Description for card 2.",
    tag: "Tag 2",
  },
  {
    imageSrc: "/assets/crab.jpg",
    title: "Card Title 3",
    description: "Description for card 3.",
    tag: "Tag 3",
  },
  {
    imageSrc: "/assets/crab.jpg",
    title: "Card Title 4",
    description: "Description for card 4.",
    tag: "Tag 4",
  },
  {
    imageSrc: "/assets/crab.jpg",
    title: "Card Title 5",
    description: "Description for card 5.",
    tag: "Tag 5",
  },
  {
    imageSrc: "/assets/crab.jpg",
    title: "Card Title 6",
    description: "Description for card 6.",
    tag: "Tag 6",
  },
  {
    imageSrc: "/assets/crab.jpg",
    title: "Card Title 7",
    description: "Description for card 7.",
    tag: "Tag 7",
  },
  {
    imageSrc: "/assets/crab.jpg",
    title: "Card Title 8",
    description: "Description for card 8.",
    tag: "Tag 8",
  },
  {
    imageSrc: "/assets/crab.jpg",
    title: "Card Title 9",
    description: "Description for card 9.",
    tag: "Tag 9",
  },
  {
    imageSrc: "/assets/crab.jpg",
    title: "Card Title 10",
    description: "Description for card 10.",
    tag: "Tag 10",
  },
  // Add more card data here
];

const Home = () => {
    return (
        <div>
        <Navbar />
        <div className="home-container">
          {imageData.map((data) => (
            <ImageCard
              imageSrc={data.imageSrc}
              title={data.title}
              description={data.description}
              tag={data.tag}
            />
          ))}
        </div>
      </div>
  );
};

export default Home;
