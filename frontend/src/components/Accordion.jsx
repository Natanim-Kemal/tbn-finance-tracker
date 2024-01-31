import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';

function MyAccordion({ title, date}) {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <div className="budget-name">{title}</div>
          <div className="budget-date">{date}</div>
        </Accordion.Header>
        <Accordion.Body>
          <div className="content-container">
            
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default MyAccordion;
