import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const Summary = () => {
  const selectedCar = useSelector((state) => state.car.selectedCar);
  const selectedColor = useSelector((state) => state.color.selectedColor);
  const selectedAccessories = useSelector(
    (state) => state.accessory.selectedAccessories
  );

  return (
    <Container className="summaryContainer">
      <Row className="d-flex flex-column text-center">
        <Col>
        <hr />
          <h3>MODEL</h3>
          <img src={selectedColor.image} alt={selectedCar.name} className="showCar" />
          <h2>{selectedCar.name}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime id
            earum expedita molestias quo, numquam veritatis vitae iure alias
            magni cumque esse saepe rem deserunt, ipsa, quasi quidem quae hic.
          </p>
          <hr />
          <h3>COLOR</h3>
          <div className="d-flex justify-content-center"><div className="color" style={{ backgroundColor: selectedColor.hex }}></div><div className="d-flex align-self-center">{selectedColor.name} - ${selectedColor.price}</div></div>
          <hr />
          <h3>ACCESSORIES</h3>
          <ul>
            {selectedAccessories.map((accessory) => {
                return (
                    <li>{accessory.name} - ${accessory.price}</li>
                )
            }) }
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Summary;
