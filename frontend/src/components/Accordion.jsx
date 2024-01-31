import Accordion from "react-bootstrap/Accordion";
import { useState } from "react";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import trash from"../icons/trash.png"

function MyAccordion({ title, date, amount }) {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <div className="budget-name">{title}</div>
          <div className="budget-date">{date}</div>
          <div className="delete-button">
            <img
              src={trash}
              alt="delete"
              className="delete-icon"
            />
          </div>
        </Accordion.Header>
        <Accordion.Body>
          <div className="content-container"><span className="identifier">Budget Amount: &nbsp; &nbsp;</span> {amount}</div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default MyAccordion;
