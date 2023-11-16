import { React, useState } from "react";
import { Card } from "react-bootstrap";
import CommentArea from './CommentArea';


const SingleBook = ({ book }) => {
  const { title, img } = book;
  const [selected, setSelected] = useState(false);
  const handleBookClick = () => {
    setSelected(!selected); // Cambia lo stato di selezione
  };
  const cardStyles = {
    width: "18rem",
    marginBottom: "15px",
    border: selected ? "3px solid red" : "1px solid #dee2e6", // Bordo rosso se il libro è selezionato
    cursor: "pointer",
    transition: "0.2s ease-in-out", // Opzionale: cambia il cursore al passaggio del mouse per indicare la cliccabilità
  };

  return (
    <Card style={cardStyles} onClick={handleBookClick}>
      <Card.Img
        variant="top"
        src={book.img}
        alt={`Copertina di ${book.title}`}
      />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
      </Card.Body>
      <div onClick={() => setSelected(!selected)}>
      {/* Contenuto del libro */}
      {selected && <CommentArea bookId={book.id} />}
    </div>
    </Card>
    
  );
};

export default SingleBook;
