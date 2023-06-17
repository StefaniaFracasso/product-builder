import { useState } from "react";
import { Col, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const SingleAccessory = (props) => {
    const accessory = props.accessory
    const [isChecked, setIsChecked] = useState(false);
    const selectedAccessories = useSelector(state => state.accessory.selectedAccessories);
    const dispatch = useDispatch();

    const handleChangeCheckbox = (accessory) => {
        const found = selectedAccessories.find(
            (existing) => existing.id === accessory.id);
        if (found) {
            setIsChecked(false);
            dispatch({
                type: "DELETE_ACCESSORY",
                payload: accessory,
            })
        } else {
        setIsChecked(true);            
            dispatch({
              type: "ADD_ACCESSORY",
              payload: accessory,
            });
        }
      };

    return (
        <Col xs={12} className="singleAccessory" key={accessory.id}>
        <h2>{accessory.name}</h2>
        <div className="d-flex">
        <h2 className="me-3">${accessory.price}</h2>
        <Form>
          <Form.Check
            type="checkbox"
            checked={isChecked}
            className="p-2"
            onChange={() => handleChangeCheckbox(accessory)}
          />
        </Form>
        </div>
      </Col>
    )
}

export default SingleAccessory