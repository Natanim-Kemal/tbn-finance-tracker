import React from "react";
import "./css/buttons.css"
const Buttons= ({content}) => {
    return(
        <div className="button-container">
            <button>{content}</button>
        </div>
    )
}

export default Buttons;