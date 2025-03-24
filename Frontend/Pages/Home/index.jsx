import "./styles.css";
import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar";
import axiosBaseUrl from "../../Axios/axiosConfig";
import SnippetCard from "../../Components/snippetCard";

const Home = () => {
  const [snippetData, setSnippetData] = useState([]);
  
  const fetchSnippetData = async () => {
    try {
      // e.preventDefault();
      const response = await axiosBaseUrl.get("/users/snippets/allUserSnippets");
      setSnippetData(response.data.data);
    } catch (error) {
      console.log("Error Error: ", error);
    }
  };

  useEffect(() => {
    fetchSnippetData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="home-container">
        {snippetData.map((data) => (
          <SnippetCard
            id={data.id}
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
