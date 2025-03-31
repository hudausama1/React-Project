import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, Row, Col, Spinner } from 'react-bootstrap';
import { addFavourite, removeFavourite } from '../../store/Slices/favourite';
import { fetchProductDetails } from '../../store/Slices/productsSlice.js';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  
  const { product, status, error } = useSelector((state) => state.products);
  const favourites = useSelector((state) => state.sliceFavourite.favourites || []);

  useEffect(() => {
    dispatch(fetchProductDetails(id));
  }, [id, dispatch]);

  const handleFavorite = () => {
    if (favourites.some((prod) => prod.id === product.id)) {
      dispatch(removeFavourite(product.id));
    } else {
      dispatch(addFavourite(product));
    }
  };

  if (status === 'loading') {
    return (
      <div className="d-flex justify-content-center mt-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (status === 'failed') {
    return <div className="alert alert-danger">Error: {error}</div>;
  }

  if (!product) {
    return <div>No product found</div>;
  }

  return (
    <div className="container mt-4">
      <h2>Movie Details</h2>
      <Card style={{ width: "100%", maxWidth: "500px", margin: "0 auto" }}>
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w500${product.poster_path}`}
          alt={product.title}
          style={{ height: "400px", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.overview}</Card.Text>
          <Card.Text>
            <strong>Release Date:</strong> {product.release_date}
          </Card.Text>
          <Card.Text>
            <strong>Rating:</strong> {product.vote_average}
          </Card.Text>
          
          <Row className="d-flex align-items-center justify-content-between mt-3">
            <Col>
              <Button variant="primary" className="w-100">
                Back to List
              </Button>
            </Col>
            <Col className="d-flex justify-content-center">
              <Button
                variant="link"
                onClick={handleFavorite}
                className="p-0"
                style={{
                  fontSize: "2rem", 
                  color: favourites.some((fave) => fave.id === product.id) ? "red" : "gray",
                }}
              >
                {favourites.some((fave) => fave.id === product.id) ? <FaHeart /> : <FaRegHeart />}
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductDetails;