import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';

function MyAccordion({ inputs }) {
  const [activeKey, setActiveKey] = useState('0');
  const [isGreenActive, setGreenActive] = useState(false);
  const [isRedActive, setRedActive] = useState(false);

  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <div className="budget-name">Education</div>
          <div className="budget-date">{inputs.Date_1}</div>
        </Accordion.Header>
        <Accordion.Body>
          <div className="content-container">
            <div className="container_1">
              <Accordion>
                <Accordion.Item eventKey='0'>
                  <Accordion.Header onClick={() => {
                    if (isGreenActive) {
                      setGreenActive(false);
                    }
                    else {
                      setGreenActive(true);
                    }
                  }}>
                    <div className={`green-amount ${isGreenActive ? "active" : ""}`}>
                      <button className='green-amount-button'>
                        +34,789 Birr
                      </button>
                    </div>
                  </Accordion.Header>
                  <AccordionBody>
                    <div className='income-content'>
                      <h6>Income Content</h6>
                    </div>
                  </AccordionBody>
                </Accordion.Item>
              </Accordion>
            </div>

            <div className="container_1">
              <Accordion>
                <Accordion.Item eventKey='0'>
                  <Accordion.Header onClick={() => {
                    if (isRedActive) {
                      setRedActive(false);
                    }
                    else {
                      setRedActive(true);
                    }
                  }}>
                    <div className={`red-amount ${isRedActive ? "active" : ""}`}>
                      <button>
                        -7,389 Birr
                      </button>
                    </div>
                  </Accordion.Header>
                  <AccordionBody>
                    <div className='expense-content'>
                      <h6>Expense Content</h6>
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
