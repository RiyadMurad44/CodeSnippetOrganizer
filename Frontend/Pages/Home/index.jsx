import "./styles.css";
import React from "react";
import Navbar from "../../Components/Navbar";
import snippetCard from "../../Components/snippetCard";

const snippetData = [
  {
    code_snippet: "Hello World",
    language: "Java 1",
    keywords: "random keywords 1.",
  },
  {
    code_snippet: "Hello World",
    language: "Java 2",
    keywords: "random keywords 2.",
  },
  {
    code_snippet: "Hello World",
    language: "Java 3",
    keywords: "random keywords 3.",
  },
  {
    code_snippet: "Hello World",
    language: "Java 4",
    keywords: "random keywords 4.",
  },
  {
    code_snippet: "Hello World",
    language: "Java 5",
    keywords: "random keywords 5.",
  },
  {
    code_snippet: "Hello World",
    language: "Java 6",
    keywords: "random keywords 6.",
  },
  {
    code_snippet: "Hello World",
    language: "Java 7",
    keywords: "random keywords 7.",
  },
  {
    code_snippet: "Hello World",
    language: "Java 8",
    keywords: "random keywords 8.",
  },
  {
    code_snippet: "Hello World",
    language: "Java 9",
    keywords: "random keywords 9.",
  },
  {
    code_snippet: "Hello World",
    language: "Java 10",
    keywords: "random keywords 10.",
  },
  // Add more card data here
];

const Home = () => {
    return (
        <div>
        <Navbar />
        <div className="home-container">
          {snippetData.map((data) => (
            <snippetCard
              code_snippet={data.code_snippet}
              language={data.language}
              keywords={data.keywords}
            />
          ))}
        </div>
      </div>
  );
};

export default Home;
