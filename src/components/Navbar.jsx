import { useState } from "react";
import { useDispatch } from "react-redux"

const Navbar = () => {
    const dispatch = useDispatch()
    const [selectSection, setSelectSection] = useState("")

    const handleClick = (section) => {
        if (!selectSection.includes(section)) {
          dispatch({
            type: 'SELECT_SECTION',
            payload: section,
          });
          setSelectSection(section);
        }
      };


    return(
    <ul className="d-flex justify-content-between">
        <li onClick={()=>handleClick("models")}>MODELS</li>
        <li onClick={()=>handleClick("colors")}>COLORS</li>
        <li onClick={()=>handleClick("accessories")}>ACCESSORIES</li>
        <li onClick={()=>handleClick("summary")}>SUMMARY</li>
    </ul>
    )
}

export default Navbar