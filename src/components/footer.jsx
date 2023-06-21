import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Footer = () => {
  const selectedCar = useSelector((state) => state.car.selectedCar);
  const selectedColor = useSelector((state) => state.color.selectedColor);
  const selectedSection = useSelector((state) => state.section.selectedSection);
  const selectedAccessories = useSelector(
    (state) => state.accessory.selectedAccessories
  );
  const dispatch = useDispatch();

  if (selectedCar) {
    let price = selectedCar.initialPrice;
    let buttonLabel;
    let backButtonLabel;
    let handleButtonClick;
    let backButtonVisible = false;
    let backButtonHandler;

    if (selectedSection === "models") {
      buttonLabel = "COLORS";
      handleButtonClick = () => {
        dispatch({
          type: "SELECT_SECTION",
          payload: "colors",
        });
      };
    } else if (selectedSection === "colors") {
      buttonLabel = "ACCESSORIES";
      handleButtonClick = () => {
        dispatch({
          type: "SELECT_SECTION",
          payload: "accessories",
        });
      };
      backButtonVisible = true;
      backButtonLabel = "MODELS";
      backButtonHandler = () => {
        dispatch({
          type: "SELECT_SECTION",
          payload: "models",
        });
      };
    } else if (selectedSection === "accessories") {
      buttonLabel = "SUMMARY";
      handleButtonClick = () => {
        dispatch({
          type: "SELECT_SECTION",
          payload: "summary",
        });
      };
      backButtonVisible = true;
      backButtonLabel = "COLORS";
      backButtonHandler = () => {
        dispatch({
          type: "SELECT_SECTION",
          payload: "colors",
        });
      };
    } else if (selectedSection === "summary") {
      buttonLabel = "BUY NOW";
      handleButtonClick = () => {
        alert("You have successfully built you car");
        window.location.reload();
      };
      backButtonVisible = true;
      backButtonLabel = "ACCESSORIES";
      backButtonHandler = () => {
        dispatch({
          type: "SELECT_SECTION",
          payload: "accessory",
        });
      };

    }

    if (selectedColor && selectedColor.price) {
      price += selectedColor.price;
    }

    if (selectedAccessories && selectedAccessories.length > 0) {
      selectedAccessories.forEach((accessory) => {
        if (accessory.price) {
          price += accessory.price;
        }
      });
    }

    return (
      <>
        <Container fluid className="fixed-bottom footer d-none d-lg-block">
          <Row className="d-flex justify-content-between my-2 mx-0 mx-lg-5">
            <Col className="d-none d-lg-block" lg={3}>
              <div className="d-flex align-items-center selectedCar">
                <img
                  src={
                    selectedColor.image
                      ? selectedColor.image
                      : selectedCar.imageUrl
                  }
                  alt={selectedCar.name}
                  className="w-50 img-fluid"
                />
                <div className="ms-3">
                  <h5>Total</h5>
                  <h3>${price}</h3>
                </div>
              </div>
            </Col>
            <Col
              xs={12}
              lg={4}
              className="d-flex align-items-center justify-content-between justify-content-lg-end"
            >
              {backButtonVisible && (
                <Button onClick={backButtonHandler} className="backButton me-2 d-flex align-items-center">
                  <IoIosArrowBack />
                </Button>
              )}
              <Button
                variant="warning"
                onClick={handleButtonClick}
                className="rounded-pill sectionButton"
              >
                {buttonLabel} <IoIosArrowForward />
              </Button>
            </Col>
          </Row>
        </Container>
        <Container fluid className="fixed-bottom d-block d-lg-none shadowMobileFooter">
          <Row>
          {backButtonVisible && (
            <Col xs={6} className="p-0">
            <Button onClick={backButtonHandler} className="mobileBackButton me-2 d-flex justify-content-between align-items-center">
              <IoIosArrowBack/> {backButtonLabel}
            </Button>
            </Col>
          )}
          <Col xs={backButtonVisible? 6 : 12} className="p-0">
          <Button
            onClick={handleButtonClick}
            className="mobileSectionButton d-flex justify-content-between align-items-center"
          >
            {buttonLabel} <IoIosArrowForward />
          </Button>
          </Col>
          </Row>
        </Container>
      </>
    );
  }
};

export default Footer;
