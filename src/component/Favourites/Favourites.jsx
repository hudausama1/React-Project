import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Col, Row, Card, Button } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import { removeFavourite } from "../../store/Slices/favourite";

function Favourites() {
  const favourites = useSelector((state) => state.sliceFavourite.favourites);
  const dispatch = useDispatch();

  const handleRemoveFavorite = (productId) => {
    dispatch(removeFavourite(productId));
  };

  return (
    <div>
      <h2>Favourites</h2>
      <Row className="g-4">
        {favourites.length === 0 ? (
          <p>No favourite movies yet.</p>
        ) : (
          favourites.map((prod) => (
            <Col key={prod.id} md={3} xs={6} className="mb-4"> {/* md={3} for 4 cards per row */}
              <Card style={{ width: "100%", maxWidth: "250px", margin: "0 auto" }}>
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500${prod.poster_path}`}
                  alt={prod.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{prod.title}</Card.Title>
                  <Card.Text>{prod.overview}</Card.Text>
                  <Button
                    variant="link"
                    onClick={() => handleRemoveFavorite(prod.id)}
                    className="d-flex align-items-center justify-content-center p-0"
                    style={{ fontSize: "1.5rem", color: "red" }}
                  >
                    <FaHeart />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </div>
  );
}

export default Favourites;
