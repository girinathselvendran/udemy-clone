import React from 'react'
import StarRatings from 'react-star-ratings';

export const Star = ({ rating }) => {
    return (
        <div >
            {rating}  {" "}
            < StarRatings
                rating={rating}
                starDimension="20px"
                starSpacing="0px"
                starRatedColor="yellow"
            />
        </div>
    )
}
