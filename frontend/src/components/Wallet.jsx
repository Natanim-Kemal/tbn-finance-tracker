import React from "react";
import Menu from "./Menu";
import budgetIcon from "../icons/budge.png";
import courseIcon from "../icons/courses.png";
import dashboardIcon from "../icons/dashboard.png";
import expenseIcon from "../icons/expense.png";
import walletIcon from "../icons/wallet.png";
import cbeImage from "./assest/cbe.png";
import dashenImage from "./assest/dashen.jpg";
import abyssinia from "./assest/abyssinia.png";
import awash from "./assest/awash.png"
import Accordion from 'react-bootstrap/Accordion';
import birhan from "./assest/birhan.png"
import wegagen from "./assest/wegagen.png"
import zemen from "./assest/zemen.png"
import "./css/wallet.css"

export default function Wallet(){
    const menus = [
        {id: 1,name: "Dashboard",active: false, iconSrc: dashboardIcon,},
        { id: 3, name: "Budget", active: false, iconSrc: budgetIcon },
        { id: 4, name: "Expense", active: false, iconSrc: expenseIcon },
        { id: 5, name: "Courses", active: false, iconSrc: courseIcon },
        { id: 6, name: "Wallet", active: false, iconSrc: walletIcon },];


        return(
            <div className="wallet">
                <Menu menus={menus}/>
                <div className="wallet-contents">
                    <div className="total-wallets">
                    <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>
                                            <div className="wallet-acc-title">
                                                <h4>Wallet OverView</h4>
                                            </div>
                                        </Accordion.Header>
                                        <Accordion.Body>

                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                    </div>
                    <div className="wallet-groups">
                        <div className="bank-apis">
                            <div className="apis-title">
                                Banks
                            </div>
                            <div className="cbe-api">
                                <div className="cbe-image-container">
                                <img src={cbeImage} alt="CBE" className="cbe"/>
                                </div>
                                <div className="Title-container">
                                    Commercial Bank Of Ethiopia
                                </div>
                            </div>
                            <div className="dashen-api">
                                <div className="dashen-image-container">
                                    <img src= {dashenImage} alt="dashen" className="dashen"/>
                                </div>
                                <div className="Title-container">
                                    Dashen Bank
                                </div>
                            </div>

                            <div className="abyssinia-api">
                                <div className="abyssinia-image-container">
                                    <img src= {abyssinia} alt="Abyssinia" className="abyssinia"/>
                                </div>
                                <div className="Title-container">
                                    Bank Of Abyssinia
                                </div>
                            </div>

                            <div className="add-more">
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>
                                            <div className="acc-title">
                                                More Banks
                                            </div>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <div className="choices">
                                                <div className="acc-api">
                                                    <div className="acc-image-container">
                                                        <img src={awash}  alt="awash" className="acc-img"/>
                                                    </div>
                                                    <div className="acc-but">Awash Bank</div>
                                                </div>
                                                <div className="acc-api">
                                                    <div className="acc-image-container">
                                                        <img src={birhan}  alt="Berhan" className="acc-img"/>
                                                    </div>
                                                    <div className="acc-but">Berhan Bank</div>
                                                </div>
                                                <div className="acc-api ">
                                                    <div className="wegagen">
                                                        <img src={wegagen}  alt="wegagen" className="acc-img"/>
                                                    </div>
                                                    <div className="acc-but">Wegagen Bank</div>
                                                </div>
                                                <div className="acc-api ">
                                                    <div className="acc-image-container">
                                                        <img src={zemen}  alt="Zemen" className="acc-img"/>
                                                    </div>
                                                    <div className="acc-but">Zemen Bank</div>
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        )
}