import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import budgetIcon from "../icons/budge.png";
import courseIcon from "../icons/courses.png";
import dashboardIcon from "../icons/dashboard.png";
import expenseIcon from "../icons/expense.png";
import walletIcon from "../icons/wallet.png";
import cbeImage from "./assest/cbe.png";
import dashenImage from "./assest/dashen.jpg";
import abyssinia from "./assest/abyssinia.png";
import Accordion from 'react-bootstrap/Accordion';
import "./css/wallet.css";
import moreIcon from "../icons/moreIcon.jpg";

export default function Wallet() {
  const menus = [
    { id: 1, name: "Dashboard", active: false, iconSrc: dashboardIcon, },
    { id: 3, name: "Budget", active: false, iconSrc: budgetIcon },
    { id: 4, name: "Expense", active: false, iconSrc: expenseIcon },
    { id: 5, name: "Wallet", active: false, iconSrc: walletIcon },
    { id: 6, name: "More", active: false, iconSrc: moreIcon },
  ];

  const [cbeCount, setCbeCount] = useState(0);
  const [dashenCount, setDashenCount] = useState(0);
  const [abyssiniaCount, setAbyssiniaCount] = useState(0);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    if (cbeCount === "connected") {
      const cbeAmount = 12345;
      setTotalAmount(prevTotal => prevTotal + cbeAmount);
    }
  }, [cbeCount]);

  useEffect(() => {
    if (dashenCount === "connected") {
      const dashenAmount = 43200;
      setTotalAmount(prevTotal => prevTotal + dashenAmount);
    }
  }, [dashenCount]);

  useEffect(() => {
    if (abyssiniaCount === "connected") {
      const abyssiniaAmount = 54600;
      setTotalAmount(prevTotal => prevTotal + abyssiniaAmount);
    }
  }, [abyssiniaCount]);

  useEffect(() => {
    // Save data to local storage whenever the counts or total amount change
    localStorage.setItem("cbeCount", JSON.stringify(cbeCount));
    localStorage.setItem("dashenCount", JSON.stringify(dashenCount));
    localStorage.setItem("abyssiniaCount", JSON.stringify(abyssiniaCount));
    localStorage.setItem("totalAmount", JSON.stringify(totalAmount));
  }, [cbeCount, dashenCount, abyssiniaCount, totalAmount]);

  return (
    <div className="wallet">
      <Menu menus={menus} />
      <div className="wallet-contents">
        <div className="total-wallets">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <div className="wallet-acc-title">
                  <p>Total wallet</p>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                {/* Display the total amount */}
                {`Total Amount: ${totalAmount}`} Birr
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="wallet-groups">
          <div className="bank-apis">
            <div className="apis-title">
              Banks
            </div>
            {cbeCount !== "connected" ? (
              <div className="cbe-api">
                <div className="cbe-image-container">
                  <img src={cbeImage} alt="CBE" className="cbe" />
                </div>
                <div className="Title-container">
                  Commercial Bank Of Ethiopia
                </div>
                <button className="cbe-connect" onClick={() => setCbeCount("connected")}>
                  Connect
                </button>
              </div>
            ) : (
              <div className="cbe-api">
                <div className="cbe-image-container">
                  <img src={cbeImage} alt="CBE" className="cbe" />
                </div>
                <div className="Title-container">
                  Commercial Bank Of Ethiopia
                </div>
                <div className="amts">{12345}</div>
              </div>
            )}

            {dashenCount !== "connected" ? (
              <div className="dashen-api">
                <div className="dashen-image-container">
                  <img src={dashenImage} alt="dashen" className="dashen" />
                </div>
                <div className="Title-container">
                  Dashen Bank
                </div>
                <button className="dashen-connect" onClick={() => setDashenCount("connected")}>
                  Connect
                </button>
              </div>
            ) : (
              <div className="dashen-api">
                <div className="dashen-image-container">
                  <img src={dashenImage} alt="dashen" className="dashen" />
                </div>
                <div className="Title-container">
                  Dashen Bank
                </div>
                <div className="amts">{43200}</div>
              </div>
            )}

            {abyssiniaCount !== "connected" ? (
              <div className="abyssinia-api">
                <div className="abyssinia-image-container">
                  <img src={abyssinia} alt="Abyssinia" className="abyssinia" />
                </div>
                <div className="Title-container">
                  Bank Of Abyssinia
                </div>
                <button className="cbe-connect" onClick={() => setAbyssiniaCount("connected")}>
                  Connect
                </button>
              </div>
            ) : (
              <div className="abyssinia-api">
                <div className="abyssinia-image-container">
                  <img src={abyssinia} alt="Abyssinia" className="abyssinia" />
                </div>
                <div className="Title-container">
                  Bank Of Abyssinia
                </div>
                <div className="amts">{54600}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
