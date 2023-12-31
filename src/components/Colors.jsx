import { Col, Container, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

const Colors = () => {
  const selectedCar = useSelector((state) => state.car.selectedCar);
  const selectedColor = useSelector((state) => state.color.selectedColor);
  const dispatch = useDispatch();
  const tooltip = (color) => {
    return (
      <Tooltip className="customTooltip">
        {color.name} - $ {color.price}
      </Tooltip>
    );
  };

  const handleClick = (color) => {
    dispatch({
      type: "SELECT_COLOR",
      payload: color,
    });
  };
  console.log(selectedColor);
  return (
    <Container className="animationComponent">
      <div className="d-flex flex-column mt-5">
        <Col xs={12} className=" d-flex justify-content-center">
          <img
            src={
              selectedColor.image ? selectedColor.image : selectedCar.imageUrl
            }
            alt={selectedCar.name}
            className="showCar"
          />
        </Col>
        <Col>
          <div className="d-flex justify-content-center mt-5">
            {selectedCar.colors.map((color) => {
              return (
                <OverlayTrigger placement="top" overlay={tooltip(color)} key={color.id}>
                  <div
                    className="color"
                    style={{ backgroundColor: color.hex }}
                    onClick={() => handleClick(color)}
                  ></div>
                </OverlayTrigger>
              );
            })}
          </div>
        </Col>
      </div>
    </Container>
  );
};

export default Colors;
