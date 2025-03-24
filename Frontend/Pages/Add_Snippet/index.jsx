import React from "react";
import "./styles.css";
import { useState } from "react";
import Navbar from "../../Components/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import axiosBaseUrl from "../../Axios/axiosConfig";

const Add_Snippet = () => {
  const navigate = useNavigate(); 
  const location = useLocation();
  console.log(location.state);
  const [id, setId] = useState(location.state?.id || "");
  const [code_snippet, setCodeSnippet] = useState(location.state?.code_snippet || "");
  const [language, setLanguage] = useState(location.state?.language || "");
  const [keywords, setKeywords] = useState(location.state?.keywords || "");

  const editSnippet = async (e) => {
    try {
      e.preventDefault();
      const response = await axiosBaseUrl.post("/users/snippets/editSnippet", {
        id,
        code_snippet,
        language,
        keywords,
      });
      console.log(response);
      navigate("/home");

    } catch (error){
      console.log("The Error", error);
    }
  }

  const addSnippet = async (e) => {
    try {
      e.preventDefault();
      const response = await axiosBaseUrl.post("/users/snippets/addSnippet", {
        code_snippet,
        language,
        keywords,
      });

      console.log(response);
      navigate("/home");

    } catch (error){
      console.log("The Error", error);
    }
  };

  return( 
    <div>
      <Navbar />
      <div className="add-snippet-container">
        <form className="add-snippet-form" onSubmit={id ? editSnippet : addSnippet}>
          <h2>Code Snippet</h2>
          
          <div className="input-group">
            <label>Code Snippet Text</label>
            <textarea
              value={code_snippet}
              onChange={(e) => setCodeSnippet(e.target.value)}
              required
              rows="10"
            />
          </div>

          <div className="input-group">
            <label>Language</label>
            <input
              type="text"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Keywords</label>
            <input
              type="text"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="add-snippet-button">
            {id ? "Edit" : "Add"} Snippet 
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add_Snippet;
