import Accordion from "react-bootstrap/Accordion";
import { useState } from "react";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import trash from "../icons/trash.png";

function MyAccordion({ id, title, date, amount }) {
  const handleRemoval = () => {
    const onDelete = async (budgetId) => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/delete-budget/${budgetId}`,
          {
            method: "DELETE",
            credentials: "include",
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Budget deleted successfully:", data);
        window.location.reload();
      } catch (error) {
        console.error("Error deleting budget:", error.message);
      }
    };

    onDelete(id);
  };
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
              onClick={handleRemoval}
            />
          </div>
        </Accordion.Header>
        <Accordion.Body>
          <div className="content-container">
            <span className="identifier">Budget Amount: &nbsp; &nbsp;</span>{" "}
            {amount}
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default MyAccordion;
