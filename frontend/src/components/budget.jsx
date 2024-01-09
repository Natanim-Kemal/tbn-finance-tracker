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
import MyForm from "./Form";
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
                <MyAccordion title="Education" date="2020/12/03" incomeContent="Income Content" expenseContent="Expense Content"/>
                <MyAccordion title="Education" date="2023/12/05" incomeContent="Income Content" expenseContent="Expense Content"/>
                <MyAccordion title="Education" date="2024/12/09" incomeContent="Income Content" expenseContent="Expense Content"/>
                <Buttons content={"Create New Budget"} onClick={()=>{setNew("NewBudget")}}/>
            </div>
        )
    }

    if (New === "NewBudget" ){
        MainField = (
            <MyForm
                fields={[
                    { label: "Title", name: "title", type: "text", required: true, placeholder: "Enter title"},
                    { label: "Financial Goals", name: "financialGoals", type: "textarea", required: true, placeholder: "Enter Your Goals" },
                    { label: "Income Information", name: "incomeInformation", type: "number", required: true, placeholder: "eg: 4532" },
                    { label: "Fixed Expenses", name: "FixedExpenses", type: "number", required: true, placeholder: "eg: 4532" },
                    { label: "Variable Expenses", name: "VariableExpenses", type: "number", required: false, placeholder: "eg: 4532" },
                    { label: "Irregular Expenses", name: "IrregularExpenses", type: "number", required: false, placeholder: "eg: 4532" },
                    { label: "Emergency Fund", name: "EmergencyFund", type: "number", required: false, placeholder: "eg: 4532" },
                    { label: "Taxes", name: "Taxes", type: "number", required: false, placeholder: "eg: 4532" },
                    { label: "More Description", name: "MoreDescription", type:"textarea", required: false, placeholder: " Enter More Description" },
                    { label: "Start date", name: "StartDate", type:"date", required: true},
                    { label: "End date", name: "EndDate", type:"date", required: true },
                ]}
            />
        );
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