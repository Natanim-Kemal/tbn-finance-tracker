import React from "react";
import Menu from "./Menu";
import budgetIcon from "../icons/budge.png";
import courseIcon from "../icons/courses.png";
import dashboardIcon from "../icons/dashboard.png";
import expenseIcon from "../icons/expense.png";
import walletIcon from "../icons/wallet.png";
import Income from './assest/cent-bag.png'
import Expense from './assest/coins.png'
import  Saving from './assest/banknotes.png'
import "./css/DashBoard.css"
import Notify from './assest/notification_bell.png'
import  RenderLineChart  from "./Graph";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Icon from "./Icons";


export default function DashBoard() {
    const menus = [
        {id: 1,name: "Dashboard",active: false, iconSrc: dashboardIcon,},
        { id: 3, name: "Budget", active: false, iconSrc: budgetIcon },
        { id: 4, name: "Expense", active: false, iconSrc: expenseIcon },
        { id: 5, name: "Courses", active: false, iconSrc: courseIcon },
        { id: 6, name: "Wallet", active: false, iconSrc: walletIcon },
    ];

    return(
        <div className="DashBoard">
            <Menu menus={menus}/>
            <div className="dashboard-contents">
                <div className="notification-bar">
                    <div className="page-title">
                        DashBoard
                    </div>
                    <div className="notification-image">
                        <img src={Notify} alt=""/>
                    </div>
                </div>
                <div className="financial-summary">
                    <div className="summary-continer">
                        <img src={Income} alt=""/>
                        <p className="summary-description" >Total Balance</p>
                        <div className="amount">
                            14,897.92 birr
                        </div>
                    </div>

                    <div className="summary-continer">
                        <img src={Expense} alt=""/>
                        <p className="summary-description" >Total Expenses</p>
                        <div className="amount">
                            6,897.92 birr
                        </div>
                    </div>

                    <div  className="summary-continer">
                    <img src={Saving} alt=""/>
                        <p className="summary-description">Money Saved</p>
                        <div className="amount">
                            8000.00 birr
                        </div>
                    </div>

                    <div className=" graphical-overview">
                        <div className="overview-title">
                            Overview
                        </div>
                        <div className="Graph-Container">
                            <RenderLineChart/>
                        </div>
                    </div>
                </div>
                <div className="budget-review">
                    <div className="overview-title" >
                        Budget
                    </div>

                    <div className="graphical-budget">
                        <div className="circle-container">
                            <div className="circle first-circle">
                                <div className="budegttext">
                                    3500 birr<br/>
                                    Online Shop
                                </div>
                            </div>
                            <div className="circle second-circle">
                                <div className="budegttext">
                                    1200 birr<br/>
                                        food
                                </div>
                            </div>
                            <div className="circle third-circle">
                                <div className="budegttext">
                                    500 birr<br/>
                                    Bill
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="monthly-comparison">
                        <div>
                            <div className="comparison-text">
                                <p>Comparison (Month) </p>
                            </div>
                            <div className="progressbar-container">
                                <div className="currentmonth">
                                    Jan
                                </div>
                                <ProgressBar variant="success" now={45} />
                            </div>
                            <div className="progressbar-container">
                            <div className="Previousmonth">
                                    Dec
                                </div>
                                <ProgressBar variant="success" now={60} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="report">
                    <div className="report-title">
                        Report
                    </div>
                    <div className="report-item">
                        <div className="item-1">
                        <div className="report-icon">
                            <Icon/>
                        </div>
                        <div className="item-description">
                            <div className="item-name">
                                Kedede Abebe
                            </div>
                            <div className="item-type">
                                Online payment
                            </div>
                            <div className="item-date">
                                Jan 06,23
                            </div>

                            <div className="item-status">
                                Done
                            </div>

                            <div className="amount">
                                355 birr
                            </div>
                        </div>
                        </div>

                        <div className="item-2">
                        <div className="report-icon">
                            <Icon/>
                        </div>
                        <div className="item-description">
                            <div className="item-name">
                                Kedede Abebe
                            </div>
                            <div className="item-type">
                                Online payment
                            </div>
                            <div className="item-date">
                                Jan 06,23
                            </div>

                            <div className="item-status">
                                Done
                            </div>

                            <div className="amount">
                                355 birr
                            </div>
                        </div>
                        </div>

                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}