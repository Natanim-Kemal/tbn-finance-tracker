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
import {Circle} from 'react-awesome-shapes'

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
                            <div className="circle first-circle">First</div>
                            <div className="circle second-circle">Second</div>
                            <div className="circle third-circle">Third</div>
                        </div>
                    </div>
                    <div className="monthly-comparison">
                        <div>
                            <div>
                                <p>Comparison (Month) </p>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>

                

                <div className="report">
                    <div className="report-title">
                        Report
                    </div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}
