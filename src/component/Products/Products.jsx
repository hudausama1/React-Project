import React, { useEffect } from 'react';
import { Row, Col, Card, Button, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addFavourite, removeFavourite } from '../../store/Slices/favourite';
import { fetchProducts } from '../../store/Slices/productsSlice.js';
import { FaHeart, FaRegHeart } from 'react-icons/fa';



function Products() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const { items: products, status, error } = useSelector((state) => state.products);
  const favourites = useSelector((state) => state.sliceFavourite.favourites || []);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleFavorite = (product) => {
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

  return (
    <Row>
      {products.map((prod) => (
        <Col key={prod.id} md={3} className="mb-4">
          <Card style={{ width: "100%", height: "100%" }}>
            <Card.Img
              variant="top"
              src={`https://image.tmdb.org/t/p/w500${prod.poster_path}`}
              alt={prod.title}
              style={{ height: "250px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title>{prod.title}</Card.Title>
              <Card.Text>The Rate : {prod.vote_average}</Card.Text>
              
              <Row className="d-flex align-items-center justify-content-between">
                <Col>
                  <Button
                    variant="primary"
                    onClick={() => navigate(`/details/${prod.id}`)}
                    style={{ width: "100%" }}
                  >
                    Go Details
                  </Button>
                </Col>
                <Col className="d-flex justify-content-center">
                  <Button
                    variant="link"
                    onClick={() => handleFavorite(prod)}
                    className="p-0"
                    style={{
                      fontSize: "1.5rem",
                      color: favourites.some((fave) => fave.id === prod.id) ? "red" : "gray",
                    }}
                  >
                    {favourites.some((fave) => fave.id === prod.id) ? <FaHeart /> : <FaRegHeart />}
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Products;