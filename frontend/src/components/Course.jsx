import React from "react";
import Menu from "./Menu";
import budgetIcon from "../icons/budge.png";
import courseIcon from "../icons/courses.png";
import dashboardIcon from "../icons/dashboard.png";
import expenseIcon from "../icons/expense.png";
import walletIcon from "../icons/wallet.png";
import Accordion from 'react-bootstrap/Accordion';
import "./css/course.css"
import course3 from "./assest/course3.webp";
import course2 from "./assest/course2.jpg";
import basicCourse from "./assest/basic-course.jpg";


export default function Course(){
    const menus = [
        {id: 1,name: "Dashboard",active: false, iconSrc: dashboardIcon,},
        { id: 3, name: "Budget", active: false, iconSrc: budgetIcon },
        { id: 4, name: "Expense", active: false, iconSrc: expenseIcon },
        { id: 5, name: "Courses", active: false, iconSrc: courseIcon },
        { id: 6, name: "Wallet", active: false, iconSrc: walletIcon },];


        return(
            <div className="course">
                <Menu menus={menus}/>
                <div className="course-contents">
                <div className="allCourses">
                    <div className="menu-title">
                            <h2>courses</h2>
                            <div className="search">
                                <input type="text" placeholder="search courses"/>
                                <i className="search-icon fa-solid fa-magnifying-glass"></i>
                            </div>
                    </div>             
                    </div>
                    <div className="course-groups">
                        <div className="wrapper">
                            <div className="course3">
                                <div className="course-image-container">
                                <img src={course3} alt="course" className="course3"/>
                                </div>
                                <div className="courseTitles">
                                    <h3>Financial Goal Setting</h3>
                                    <p>This course guides users in setting realistic financial goals, creating an action plan, and tracking progress towards achieving those goals</p>
                                </div>
                            </div>
                            <div className="course2">
                                <div className="course-image-container">
                                    <img src= {course2} alt="course" className="course2"/>
                                </div>
                                <div className="courseTitles">
                                    <h3>Debt Management</h3>
                                    <p>This course provides strategies for managing and reducing debt, including techniques for paying off credit cards, loans, and mortgages efficiently.</p>
                                </div>
                            </div>

                            <div className="course1">
                                <div className="course-image-container">
                                    <img src= {basicCourse} alt="course" className="course1"/>
                                </div>
                                <div className="courseTitles">
                                <h3>Personal Finance Basics</h3>
                                <p>This course covers fundamental topics such as budgeting, saving, managing debt, and setting financial goals.</p>
                                </div>
                            </div>
                </div>
            </div>
        </div>
    </div> 
)}