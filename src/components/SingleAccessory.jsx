import { useState } from "react";
import { Col } from "react-bootstrap";
import { BsCheckLg } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

const SingleAccessory = (props) => {
  const accessory = props.accessory;
  const [isChecked, setIsChecked] = useState(false);
  const selectedAccessories = useSelector(
    (state) => state.accessory.selectedAccessories
  );
  const dispatch = useDispatch();

  const handleChangeCheckbox = (accessory) => {
    const found = selectedAccessories.find(
      (existing) => existing.id === accessory.id
    );
    if (found) {
      setIsChecked(false);
      dispatch({
        type: "DELETE_ACCESSORY",
        payload: accessory,
      });
    } else {
      setIsChecked(true);
      dispatch({
        type: "ADD_ACCESSORY",
        payload: accessory,
      });
    }
  };

  const isSelected = selectedAccessories.find(
    (existing) => existing.id === accessory.id
  );

  return (
    <Col
      xs={12}
      className={`singleAccessory d-flex flex-column flex-lg-row align-items-center ${
        isSelected ? "singleAccessorySelected" : ""
      }`}
      key={accessory.id}
    >
      <h2 className="mb-0">{accessory.name}</h2>
      <div className="d-flex align-items-center">
        <h2 className="me-3 mb-0">${accessory.price}</h2>
        <div className={`radioCircle me-3 ${isChecked ? "radioAccessorySelected" : ""}`} onClick={() => handleChangeCheckbox(accessory)}>
          {isSelected && <BsCheckLg />}
        </div>
      </div>
    </Col>
  );
};

export default SingleAccessory;
