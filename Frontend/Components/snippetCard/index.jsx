import React from 'react';
import './snippetStyle.css';

const snippetCard = ({ code_snippet, language, keywords}) => {
  return (
    <div className="snippet-card">
      <h3>Snippet</h3>
      <pre className="snippet-card-code-snippet">{code_snippet}</pre>
      <h3>Language</h3>
      <h3 className="snippet-card-language">{language}</h3>
      <h3>Keywords</h3>
      <p className="snippet-card-keywords">{keywords}</p>
    </div>
  );
};

export default snippetCard;
