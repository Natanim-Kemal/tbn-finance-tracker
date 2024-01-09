import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';

function MyAccordion({ title, date, incomeContent, expenseContent }) {
  const [isGreenActive, setGreenActive] = useState(false);
  const [isRedActive, setRedActive] = useState(false);

  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <div className="budget-name">{title}</div>
          <div className="budget-date">{date}</div>
        </Accordion.Header>
        <Accordion.Body>
          <div className="content-container">
            <div className="container_1">
              <Accordion>
                <Accordion.Item eventKey='0'>
                  <Accordion.Header onClick={() => setGreenActive(!isGreenActive)}>
                    <div className={`green-amount ${isGreenActive ? "active" : ""}`}>
                      <button className='green-amount-button'>
                        +34,789 Birr
                      </button>
                    </div>
                  </Accordion.Header>
                  <AccordionBody>
                    <div className='income-content'>
                      <h6>{incomeContent}</h6>
                    </div>
                  </AccordionBody>
                </Accordion.Item>
              </Accordion>
            </div>

            <div className="container_1">
              <Accordion>
                <Accordion.Item eventKey='0'>
                  <Accordion.Header onClick={() => setRedActive(!isRedActive)}>
                    <div className={`red-amount ${isRedActive ? "active" : ""}`}>
                      <button>
                        -7,389 Birr
                      </button>
                    </div>
                  </Accordion.Header>
                  <AccordionBody>
                    <div className='expense-content'>
                      <h6>{expenseContent}</h6>
                    </div>
                  </AccordionBody>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default MyAccordion;
