import React from 'react';
import './imageStyle.css';

const ImageCard = ({ imageSrc, title, description, tag }) => {
  return (
    <div className="image-card">
      <img src={imageSrc} alt={title} className="image-card-img" />
      <h3 className="image-card-title">{title}</h3>
      <p className="image-card-description">{description}</p>
      <p className="image-card-tag">{tag}</p>
    </div>
  );
};

export default ImageCard;
