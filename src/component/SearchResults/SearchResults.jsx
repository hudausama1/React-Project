import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Card, Spinner } from 'react-bootstrap';
import { searchProducts, clearSearchResults } from '../../store/Slices/productsSlice';

function SearchResults() {
  const location = useLocation();
  const dispatch = useDispatch();
  const query = new URLSearchParams(location.search).get('q');
  
  const { searchResults, searchStatus, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (query) {
      dispatch(searchProducts(query));
    }
    
    return () => {
      dispatch(clearSearchResults());
    };
  }, [query, dispatch]);

  if (searchStatus === 'loading') {
    return (
      <div className="d-flex justify-content-center mt-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (searchStatus === 'failed') {
    return <div className="alert alert-danger">Error: {error}</div>;
  }

  return (
    <div className="container mt-4">
      <h2>Search Results for "{query}"</h2>
      {searchResults.length > 0 ? (
        <Row>
          {searchResults.map((movie) => (
            <Col key={movie.id} md={3} className="mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                  <Card.Text>{movie.overview.substring(0, 100)}...</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
}

export default SearchResults;