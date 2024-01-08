import React from "react";
import Menu from "./Menu";
import budgetIcon from "../icons/budge.png";
import courseIcon from "../icons/courses.png";
import dashboardIcon from "../icons/dashboard.png";
import expenseIcon from "../icons/expense.png";
import walletIcon from "../icons/wallet.png";
import MyAccordion from "./Accordion";
import"./css/budget.css"
import Buttons from "./buttons";
import MyForm from "./FormBudget";
import { useState } from "react";

export default function Budget(){
    const [New, setNew] = useState("OldBudget");
    const menus = [
        {id: 1,name: "Dashboard",active: false, iconSrc: dashboardIcon,},
        { id: 3, name: "Budget", active: false, iconSrc: budgetIcon },
        { id: 4, name: "Expense", active: false, iconSrc: expenseIcon },
        { id: 5, name: "Courses", active: false, iconSrc: courseIcon },
        { id: 6, name: "Wallet", active: false, iconSrc: walletIcon },
    ];

    const inputs={
        Date_1 : "2020/12/03",
        Date_2 : "2020/12/03",
        content_1: "Content for the first item.",
        content_2:"Content for the second item."
    };

    let MainField;

    if(New === "OldBudget" ){
        MainField = (
            <div className="budget-accordion">
                <MyAccordion inputs={inputs}/>
                <MyAccordion inputs={inputs}/>
                <MyAccordion inputs={inputs}/>
                <Buttons content={"Create New Budget"} onClick={()=>{setNew("NewBudget")}}/>
            </div>
        )
    }

    if (New === "NewBudget" ){
        MainField=(
            <MyForm/>
        )
    }
    
    
    return(
        
        <div className="budget">
            <Menu menus={menus}/>
            <div className="budget-contets">
                {MainField}
            </div>
        </div>
    )
}