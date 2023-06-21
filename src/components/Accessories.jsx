import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import SingleAccessory from "./SingleAccessory";

const Accessories = () => {
  const selectedCar = useSelector((state) => state.car.selectedCar);

  return (
    <Container className="animationComponent">
      <div className="d-flex flex-column justify-content-center align-items-center mt-5">
        {selectedCar.accessories.map((accessory) => {
          return <SingleAccessory accessory={accessory} key={accessory.id} />;
        })}
      </div>
    </Container>
  );
};

export default Accessories;
