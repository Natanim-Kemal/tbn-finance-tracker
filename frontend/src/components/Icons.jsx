import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSackDollar} from "@fortawesome/free-solid-svg-icons"

function Icon(){
    return(
        <>
        <FontAwesomeIcon icon={faSackDollar} size="2xl" style={{color: "#149978",}} />
        </>
    )
}

export default Icon;