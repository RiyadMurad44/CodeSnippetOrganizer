import React from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import handleSnippetDelete from "../../FunctionHandlers/snippetCardHandlerDeleteSnippet";

const SnippetCard = ({id, code_snippet, language, keywords }) => {
  const navigate = useNavigate();

  const handleEdit = (id, code_snippet, language, keywords) => {
    navigate("/add_snippet", { state: { id, code_snippet, language, keywords } });
  };

  return (
    <div className="snippet-card">
      <h3>Snippet</h3>
      <pre className="snippet-card-code-snippet">
        <code>{code_snippet}</code>
      </pre>
      
      <div>
        <h3>Language</h3>
        <input 
          type="text" 
          className="snippet-card-input snippet-card-language" 
          value={language} 
          readOnly 
        />
      </div>
      
      <div>
        <h3>Keywords</h3>
        <input 
          type="text" 
          className="snippet-card-input snippet-card-keywords" 
          value={keywords} 
          readOnly 
        />
      </div>

      <div className="button-container">
        <button onClick={() => handleEdit(id, code_snippet, language, keywords)} className="edit-snippet-btn">Edit Snippet</button>
        <button onClick={() => handleSnippetDelete(id)} className="delete-snippet-btn">Delete Snippet</button>
      </div>
    </div>
  );
};

export default SnippetCard;
