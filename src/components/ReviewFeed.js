import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DeleteReview from "./DeleteReview";

function ReviewFeed({ reviews }) {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(reviews);

  function handleDelete(e) {
    // e.preventDefault()
    fetch(`https://ruby-pokemon.herokuapp.com/reviews/${reviews.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((r) => {
      if (r.ok) {
        navigate(`/pokemon/${id}/reviews`);
      } else {
        r.json();
      }
    });
  }
  handleDelete();

  return (
    <div className="comment">
      <ol className="comment-body">
        {reviews.map((review) => (
          <li className="card">
            <h3>Anonymous:</h3>
            <p className="div-feed">{review.text}</p>
            <p>
              <strong>Rating: </strong>
              {review.rating}
            </p>
            <DeleteReview reviews_id={review.id} />
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ReviewFeed;
