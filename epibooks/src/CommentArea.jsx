// CommentArea.js
import React, { useState, useEffect } from 'react';
import CommentList from './CommentList';
import AddComment from './AddComment';

const CommentArea = ({ bookId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        let response = await fetch(`[https://striveschool-api.herokuapp.com/api/comments/]/comments/${bookId}`);
        if (response.ok) {
          let data = await response.json();
          setComments(data);
        } else {
          console.error("Errore nel fetch dei commenti");
        }
      } catch (error) {
        console.error("Errore:", error);
      }
    };

    fetchComments();
  }, [bookId]);

  return (
    <div>
      <CommentList comments={comments} />
      <AddComment bookId={bookId} />
    </div>
  );
};

export default CommentArea;
