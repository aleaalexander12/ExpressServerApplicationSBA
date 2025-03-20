import React from "react";

const GifCard = ({ gif }) => {
    return (
        <div className="gif-card">
            <img src={gif.images.fixed_height.url} alt={gif.title} />
            <p>{gif.title}</p>
        </div>
    );
};

export default GifCard;
