import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const Summary = () => {
  const selectedCar = useSelector((state) => state.car.selectedCar);
  const selectedColor = useSelector((state) => state.color.selectedColor);
  const selectedAccessories = useSelector(
    (state) => state.accessory.selectedAccessories
  );

  return (
    <Container className="summaryContainer animationComponent">
      <Row className="d-flex flex-column text-center align-content-center">
        <Col>
          <hr />
          <h3>MODEL</h3>
          <img
            src={
              selectedColor.image ? selectedColor.image : selectedCar.imageUrl
            }
            alt={selectedCar.name}
            className="showCar"
          />
          <h2>{selectedCar.name}</h2>
          <p>{selectedCar.description}</p>
          <hr />
          <h3>COLOR</h3>
          <div className="d-flex justify-content-center">
            <div
              className="color"
              style={{
                backgroundColor: selectedColor.hex
                  ? selectedColor.hex
                  : selectedCar.colors[0].hex,
              }}
            ></div>
            <div className="d-flex align-self-center">
              {selectedColor.name
                ? selectedColor.name
                : selectedCar.colors[0].name}{" "}
              - $
              {selectedColor.price
                ? selectedColor.price
                : selectedCar.colors[0].price}
            </div>
          </div>
          <hr />
          <h3>ACCESSORIES</h3>
          <ul>
            {selectedAccessories.length > 0 ? (
              selectedAccessories.map((accessory) => {
                return (
                  <li key={accessory.id}>
                    {accessory.name} - ${accessory.price}
                  </li>
                );
              })
            ) : (
              <li>No accessories selected</li>
            )}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Summary;
