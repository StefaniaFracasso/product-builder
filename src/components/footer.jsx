import { Button, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const Footer = () => {
  const selectedCar = useSelector((state) => state.car.selectedCar);

  const renderFooterContent = () => {
    if (selectedCar) {
      let price = selectedCar.initialPrice;
      // TODO: Aggiungere il valore delle opzioni selezionate attingedo dal redux
      /*
        price += selectedColor.value
        
        if (selec)
      */
      return (
        <Row className="d-flex flex-row justify-content-between">
          <Col className="d-none d-lg-block" lg={3}>
            <div className="d-flex align-items-center">
              <img
                src={selectedCar.imageUrl}
                alt={selectedCar.name}
                className="w-50 img-fluid"
              />
              <div className="ms-3">
                <h5>Total</h5>
                <h3>{price}</h3>
              </div>
            </div>
          </Col>
          <Col xs={12} lg={3}>
            <Button variant="warning">COLORS</Button>
          </Col>
        </Row>
      );
    } else {
      return (
        <Row className="d-flex flex-row justify-content-between">
          <Col className="d-none d-lg-block d-flex flex-column justify-content-center" lg={3}>
            <h2 className="mb-0">Total</h2>
            <h2 className="mb-0 fw-bold">$0</h2>
          </Col>
          <Col xs={12} lg={3}>
            <Button variant="warning">COLORS</Button>
          </Col>
        </Row>
      );
    }
  };

  return (
    <Container fluid className="fixed-bottom footer">
      {renderFooterContent()}
    </Container>
  );
};

export default Footer;
