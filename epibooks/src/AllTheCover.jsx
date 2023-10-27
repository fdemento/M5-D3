import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SingleBook from "./SingleBook";
import booksData from "./data/scifi.json";

const AllTheCover = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Stato per l'input di ricerca

  useEffect(() => {
    try {
      setBooks(booksData);
    } catch (error) {
      console.error(
        "Si è verificato un errore durante il caricamento dei libri:",
        error
      );
    }
  }, []);
  
  // Gestore per l'evento di modifica dell'input
  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  


  const filteredBooks = searchTerm // Filtra i libri in base all'input
    ? books.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : books;

  return (
    <Container>
      <h1 class="my-4">Copertine dei Libri</h1>
      <Form.Group controlId="searchInput" class="my-4">
        <Form.Control
          type="text"
          placeholder="Cerca per titolo..."
          value={searchTerm}
          onChange={handleSearchInputChange}
        />
      </Form.Group>
      <Row>
        {filteredBooks.map((book) => (
          <Col key={book.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <SingleBook book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllTheCover;
