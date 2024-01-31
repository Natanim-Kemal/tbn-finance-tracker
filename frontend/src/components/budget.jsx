import React from "react";
import Menu from "./Menu";
import budgetIcon from "../icons/budge.png";
import courseIcon from "../icons/courses.png";
import dashboardIcon from "../icons/dashboard.png";
import expenseIcon from "../icons/expense.png";
import walletIcon from "../icons/wallet.png";
import MyAccordion from "./Accordion";
import"../components/css/budget.css"
import Buttons from "./buttons";
import MyForm from "./Form";
import { useState } from "react";
import moreIcon from"../icons/moreIcon.jpg"

export default function Budget(){
    const [New, setNew] = useState("OldBudget");
    const menus = [
        {id: 1,name: "Dashboard",active: false, iconSrc: dashboardIcon,},
        { id: 3, name: "Budget", active: false, iconSrc: budgetIcon },
        { id: 4, name: "Expense", active: false, iconSrc: expenseIcon },
        { id: 5, name: "Wallet", active: false, iconSrc: walletIcon  },
        { id: 6, name: "More", active: false, iconSrc:moreIcon },
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
            <form>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="input1"
                placeholder="Expense title"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="input2"
                placeholder="Expense Amount"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="input3"
                placeholder="Enter A Date"
              />
            </div>
            <div class="form-group">
              <select class="form-control" id="selectOption">
                <option value="">Option 1</option>
              </select>
            </div>
            <div class="form-group">
              <textarea
                class="form-control"
                id="textarea"
                rows="3"
                placeholder="Add a Reference"
              ></textarea>
            </div>
            <Buttons content="Add Reference" onClick="" />
          </form>
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