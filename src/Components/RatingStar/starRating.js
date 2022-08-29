import React, { useState } from "react";

export const StarRating = ({ setRatingValue }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    let RatingDropDown = ["⭐", "⭐⭐", "⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"]
    setRatingValue(RatingDropDown[rating - 1])

    return (


        <div>

            <div className="star-rating" style={{ display: "flex" }}>
                <h3 style={{ marginTop: "5px" }}> Rating : - </h3>
                {[...Array(5)].map((star, index) => {
                    index += 1;
                    return (
                        <button
                            style={{ width: "40px", height: "40px", backgroundColor: "transparent", border: "none", outline: "none", cursor: "pointer" }}
                            type="button"
                            key={index}
                            className={index <= (hover || rating) ? "on" : "off"}
                            onClick={() => setRating(index)}
                            onMouseEnter={() => setHover(index)}
                            onMouseLeave={() => setHover(rating)}
                        >
                            <span className="star" style={{ fontSize: "30px" }}>&#9733;</span>
                        </button>
                    );

                })}
                <h2 style={{ marginTop: "6px" }}>{rating}</h2>
            </div>
        </div>
    )
} 