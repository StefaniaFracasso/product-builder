import { Container } from "react-bootstrap";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";

const Header = () => {
  const selectedSection = useSelector((state) => state.section.selectedSection);
  const selectedCar = useSelector((state) => state.car.selectedCar);
  let currentStep = 1

  if (selectedCar) {
    switch (selectedSection) {
      case "colors":
        currentStep = 2;
        break;
      case "accessories":
        currentStep = 3;
        break;
      case "summary":
        currentStep = 4;
        break;
      default:
        currentStep = 1;
    }
  }
  return (
    <Container fluid className="header sticky-top">
      <h1 className="text-center mainTitle d-none d-lg-block">
        Product Builder
      </h1>
      <div className="d-flex justify-content-between d-lg-none mx-2">
        <h3 className="mainTitle">Select model</h3>
        <h5 className="d-flex align-self-center">Step {currentStep} of 4</h5>
      </div>
      <Navbar />
    </Container>
  );
};

export default Header;
