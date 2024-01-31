import React from "react";
import Menu from "./Menu";
import budgetIcon from "../icons/budge.png";
import courseIcon from "../icons/courses.png";
import dashboardIcon from "../icons/dashboard.png";
import expenseIcon from "../icons/expense.png";
import walletIcon from "../icons/wallet.png";
import Accordion from 'react-bootstrap/Accordion';
import "./css/courseDetails.css"
import course3 from "./assest/course3.webp";
import course2 from "./assest/course2.jpg";
import basicCourse from "./assest/basic-course.jpg";
import moreIcon from"../icons/moreIcon.jpg"

export default function CourseDetails(){
    const menus = [
        {id: 1,name: "Dashboard",active: false, iconSrc: dashboardIcon,},
        { id: 3, name: "Budget", active: false, iconSrc: budgetIcon },
        { id: 4, name: "Expense", active: false, iconSrc: expenseIcon },
        { id: 5, name: "Wallet", active: false, iconSrc: walletIcon  },
        { id: 6, name: "More", active: false, iconSrc:moreIcon },
    ];

        return(
            <div className="courses">
            <Menu menus = {menus}/>
            <div className="course-contents">
                <div className="allCourses">
                    <div className="menu-title">
                            <h2>Course Details</h2>
                    </div>

                    <section id="course-details" className="course-details">
                    <div className="wrapper">
                        <div className="row">
                        <div className="col-lg-8">
                        <img src={course3} alt="course" className="course3"/>
                            <h3>Financial Goal Setting</h3>
                            <p>The Financial Goal Setting course is designed to help individuals develop a clear understanding of effective goal setting techniques and strategies specifically tailored to personal finance. Setting financial goals is crucial for achieving long-term financial stability and success. This course provides practical guidance and actionable steps to help participants set meaningful financial goals, create a roadmap for achieving them, and stay motivated along the way.</p>
                        </div>
                        <div className="col-lg-4">
                            <div className="course-info d-flex justify-content-between align-items-center">
                            <h5>Trainer</h5>
                            <p>Abebe kebede</p>
                            </div>
                            <div className="course-info d-flex justify-content-between align-items-center">
                            <h5>Course Fee</h5>
                            <p>2100 birr</p>
                            </div>
                            <div className="course-info d-flex justify-content-between align-items-center">
                            <h5>Learning hours</h5>
                            <p>30</p>
                            </div>
                            <div className="course-info d-flex justify-content-between align-items-center">
                            <h5>Schedule</h5>
                            <p>5.00 pm - 7.00 pm</p>
                            </div>
                        </div>
                        </div>
                        <div class="row">
                        <h3>Titles to be delivered</h3>
                        <div class=" col-md-6 col-lg-12">
                            <ul class="nav-tabs flex-column">
                                
                            <li class="nav-item">
                                <a class="nav-link" data-bs-toggle="tab" href="#tab-1">Introduction to Financial Goal Setting</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-bs-toggle="tab" href="#tab-2">Understanding Personal Financial Aspirations and Values</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-bs-toggle="tab" href="#tab-3">Creating roadmap for Goal Achievement</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-bs-toggle="tab" href="#tab-4">Tracking progress and Staying Motivated</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-bs-toggle="tab" href="#tab-5">Overcoming Obstacles and Setbacks</a>
                            </li>
                            </ul>
                        </div>
                    </div>
                 


                 
                        <div className="row">
                        <div className="col-lg-8">
                        <img src={course2} alt="course" className="course2"/>
                            <h3>Debt Management</h3>
                            <p>The Debt Management course is designed to provide individuals with the knowledge and skills necessary to effectively manage and reduce debt. In today's fast-paced and consumer-driven society, many people find themselves burdened with various forms of debt, such as credit card debt, student loans, and mortgages. This course aims to empower participants to take control of their financial situation by understanding the principles of debt management, creating a personalized debt repayment plan, and adopting strategies to avoid future debt</p>
                            </div>
                        <div className="col-lg-4">
                            <div className="course-info d-flex justify-content-between align-items-center">
                            <h5>Trainer</h5>
                            <p>Hilina Asaye</p>
                            </div>
                            <div className="course-info d-flex justify-content-between align-items-center">
                            <h5>Course Fee</h5>
                            <p>1500 birr</p>
                            </div>
                            <div className="course-info d-flex justify-content-between align-items-center">
                            <h5>Learning hours</h5>
                            <p>25</p>
                            </div>
                            <div className="course-info d-flex justify-content-between align-items-center">
                            <h5>Schedule</h5>
                            <p>6.00 pm - 8.00 pm</p>
                            </div>
                        </div>
                        </div>
                        <div class="row">
                        <h3>Titles to be delivered</h3>
                        <div class=" col-md-6 col-lg-12">
                            <ul class="nav-tabs flex-column">
                                
                            <li class="nav-item">
                                <a class="nav-link" data-bs-toggle="tab" href="#tab-1">Introduction to Debt Management</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-bs-toggle="tab" href="#tab-2">Assessing Your Current Debt Situation</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-bs-toggle="tab" href="#tab-3">Creating Debt Repayment strategy</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-bs-toggle="tab" href="#tab-4">Negotiation with Creditors</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-bs-toggle="tab" href="#tab-5">Avoid Future Dept</a>
                            </li>
                            </ul>
                        </div>
                    </div>
                  


                  
                        <div className="row">
                        <div className="col-lg-8">
                        <img src={basicCourse} alt="course" className="course1"/>
                            <h3>Personal Finance Basics</h3>
                            <p>The Personal Finance Basics course is designed to provide individuals with a strong foundation in personal finance and help them develop essential skills and knowledge for managing their finances effectively. This course covers fundamental concepts and practical strategies to empower participants to make informed financial decisions, set financial goals, create budgets, and plan for their future. Whether participants are just starting their financial journey or looking to improve their financial well-being, this course is a valuable resource for building a solid financial foundation.</p>
                            </div>
                        <div className="col-lg-4">
                            <div className="course-info d-flex justify-content-between align-items-center">
                            <h5>Trainer</h5>
                            <p>Kasse Ayele</p>
                            </div>
                            <div className="course-info d-flex justify-content-between align-items-center">
                            <h5>Course Fee</h5>
                            <p>2300 birr</p>
                            </div>
                            <div className="course-info d-flex justify-content-between align-items-center">
                            <h5>Learning hours</h5>
                            <p>42</p>
                            </div>
                            <div className="course-info d-flex justify-content-between align-items-center">
                            <h5>Schedule</h5>
                            <p>9.00 pm - 11.00 pm</p>
                            </div>
                        </div>
                        </div>
                        <div class="row">
                        <h3>Titles to be delivered</h3>
                        <div class=" col-md-6 col-lg-12">
                            <ul class="nav-tabs flex-column">
                                
                            <li class="nav-item">
                                <a class="nav-link" data-bs-toggle="tab" href="#tab-1">Introduction to Personal Finance</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-bs-toggle="tab" href="#tab-2">Budjeting and Managing Expenses</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-bs-toggle="tab" href="#tab-3">Saving and Investing</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-bs-toggle="tab" href="#tab-4">Insurance and Risk Management</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-bs-toggle="tab" href="#tab-5">Retirement Planning and Long term Financial security</a>
                            </li>
                            </ul>
                        </div>
                    </div>
                    </div>
                    </section>


                </div>
            </div>
                        
            </div>
        )}

