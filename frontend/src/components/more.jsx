import React from "react";
import { Link } from "react-router-dom";
import "./css/more.css";
import budgetIcon from "../icons/budge.png";
import courseIcon from "../icons/courses.png";
import dashboardIcon from "../icons/dashboard.png";
import expenseIcon from "../icons/expense.png";
import investmentIcon from "../icons/investmentIcon.png";
import goalIcon from "../icons/goal.png";
import settingIcon from "../icons/setting.png";
import walletIcon from "../icons/wallet.png";

export default function More() {
return (
    <div className="more">
    <Link to="/dashboard" className="eachMenu">
        <div className="eachMenuContent">
        <div className="eachMenuImg">
            <img src={dashboardIcon} alt="Dashboard" />
        </div>
        <span className="eachMenuLabel">DashBoard</span>
        </div>
    </Link>
    <Link to="/budget" className="eachMenu">
        <div className="eachMenuContent">
        <div className="eachMenuImg">
            <img src={budgetIcon} alt="Budget" />
        </div>
        <span className="eachMenuLabel">Budget</span>
        </div>
    </Link>
    <Link to="/expense" className="eachMenu">
        <div className="eachMenuContent">
        <div className="eachMenuImg">
            <img src={expenseIcon} alt="Expense" />
        </div>
        <span className="eachMenuLabel">Expense</span>
        </div>
    </Link>
    <Link to="/wallet" className="eachMenu">
        <div className="eachMenuContent">
        <div className="eachMenuImg">
            <img src={walletIcon} alt="Wallet" />
        </div>
        <span className="eachMenuLabel">Wallet</span>
        </div>
    </Link>
    <Link to="/investment" className="eachMenu">
        <div className="eachMenuContent">
        <div className="eachMenuImg">
            <img src={investmentIcon} alt="Investment" />
        </div>
        <span className="eachMenuLabel">Investment</span>
        </div>
    </Link>
    <Link to="/courses" className="eachMenu">
        <div className="eachMenuContent">
        <div className="eachMenuImg">
            <img src={courseIcon} alt="Courses" />
        </div>
        <span className="eachMenuLabel">Courses</span>
        </div>
    </Link>
    <Link to="/goal" className="eachMenu">
        <div className="eachMenuContent">
        <div className="eachMenuImg">
            <img src={goalIcon} alt="Goal" />
        </div>
        <span className="eachMenuLabel">Goal</span>
        </div>
    </Link>
    <Link to="/setting" className="eachMenu lastMenu">
        <div className="eachMenuContent">
        <div className="eachMenuImg">
            <img src={settingIcon} alt="Setting" />
        </div>
        <span className="eachMenuLabel">Setting</span>
        </div>
    </Link>
    </div>
);
}
