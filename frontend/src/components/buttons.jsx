import React from "react";
import "./css/buttons.css";

const Buttons = ({ content, onClick }) => {
    return (
        <div className="button-container">
            <button onClick={onClick}>{content}</button>
        </div>
    );
}

export default Buttons;