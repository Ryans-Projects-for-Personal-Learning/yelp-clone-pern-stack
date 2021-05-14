import React, {useState} from 'react';
import StarRating from './StarRating';

const Reviews = ({ reviews }) => {
    return (

      <div className="row">
        {reviews.map((review) => {
          return (
            <div
              key={review.id}
              className="card my-3 bg-primary"
            >
              <div className="card-header text-white bg-primary d-flex justify-content-between">
                <span>{review.name}</span>
                <span>
                  <StarRating rating={review.rating} />
                </span>
              </div>
              <div className="card-body bg-primary text-white">
                <p className="card-text">{review.review}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};
                    


export default Reviews;
