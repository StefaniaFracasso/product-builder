import { Col, Container, Row } from 'react-bootstrap';
import data from '../data.json';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const Cars = () => {
  const dispatch = useDispatch();
  const [selectedCars, setSelectedCars] = useState([]);

  const handleClick = (product) => {
    if (!selectedCars.includes(product)) {
      dispatch({
        type: 'ADD_SELECTION',
        payload: product,
      });
      setSelectedCars([product]);
    }
  };

  return (
    <Container className='mt-5'>
      <Row className='d-flex justify-content-around'>
        {Object.values(data).map((product) => {
          const isSelected = selectedCars.includes(product);
          return (
            <Col
              xs={12}
              lg={5}
              key={product.id}
              className={`carContainer text-center mb-5 ${
                isSelected ? 'selected' : ''
              }`}
              onClick={() => handleClick(product)}
            >
              <p className='name'>{product.name}</p>
              <img src={product.imageUrl} alt={product.name} className='carImage img-fluid' />
              <h5>from {product.initialPrice}</h5>
              <input type='radio' name='selectCar'></input>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Cars;
