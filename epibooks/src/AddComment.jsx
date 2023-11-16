import React, { useState } from 'react';

const AddComment = ({ bookId }) => {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(1);

  const handleSubmit = async () => {
    // Implementa la logica per inviare il commento tramite una richiesta POST
    // ...
  };

  return (
    <div>
      <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
      <select value={rating} onChange={(e) => setRating(e.target.value)}>
        {[1, 2, 3, 4, 5].map(num => (
          <option key={num} value={num}>{num}</option>
        ))}
      </select>
      <button onClick={handleSubmit}>Invia Commento</button>
    </div>
  );
};

export default AddComment;
