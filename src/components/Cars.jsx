import { Col, Container } from "react-bootstrap";
import data from "../data.json";
import { useDispatch, useSelector } from "react-redux";
import { BsCheckLg } from "react-icons/bs";

const Cars = () => {
  const dispatch = useDispatch();
  const selectedCar = useSelector((state) => state.car.selectedCar);

  const handleClick = (product) => {
    dispatch({
      type: "ADD_SELECTION",
      payload: product,
    });
  };

  return (
    <Container className="mt-5 animationComponent">
      <div className="d-flex justify-content-around">
        {Object.values(data).map((product) => {
          const isSelected = product.id === selectedCar?.id;
          return (
            <Col
              xs={12}
              lg={5}
              key={product.id}
              className={`carContainer text-center mb-5 ${
                isSelected ? "selected" : ""
              }`}
              onClick={() => handleClick(product)}
            >
              <h2 className="name">{product.name}</h2>
              <img
                src={product.imageUrl}
                alt={product.name}
                className="carImage img-fluid"
              />
              <h5>from ${product.initialPrice}</h5>
              <div
                className={`radioCircle ${isSelected ? "radioSelected" : ""}`}
              >
                {isSelected && <BsCheckLg />}
              </div>
            </Col>
          );
        })}
      </div>
    </Container>
  );
};

export default Cars;
