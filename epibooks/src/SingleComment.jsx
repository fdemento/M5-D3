import React from 'react';

const SingleComment = ({ comment }) => {
  return (
    <div className="single-comment">
      <p>{comment.comment}</p>
      <div className="comment-details">
        <span>Valutazione: {comment.rate}</span>
        {/* Altri dettagli del commento, se presenti */}
      </div>
    </div>
  );
};

export default SingleComment;