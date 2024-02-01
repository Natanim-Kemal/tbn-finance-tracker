import React, { useEffect, useState } from "react";
import "./css/expenses.css";
import trash from "../icons/trash.png";
import Menu from "./Menu";
import budgetIcon from "../icons/budge.png";
import dashboardIcon from "../icons/dashboard.png";
import expenseIcon from "../icons/expense.png";
import walletIcon from "../icons/wallet.png";
import moreIcon from "../icons/moreIcon.jpg";
import Buttons from "./buttons";

const Expenses = () => {
  const menus = [
    { id: 1, name: "Dashboard", active: false, iconSrc: dashboardIcon },
    { id: 3, name: "Budget", active: false, iconSrc: budgetIcon },
    { id: 4, name: "Expense", active: false, iconSrc: expenseIcon },
    { id: 5, name: "Wallet", active: false, iconSrc: walletIcon },
    { id: 6, name: "More", active: false, iconSrc: moreIcon },
  ];

  const [formData, setFormData] = useState({
    name: "",
    amount: "",
    category: "",
    description: "",
    date: "",
  });

  const [incomes, setIncomes] = useState([]);
  const [fetchIncomesOnMount, setFetchIncomesOnMount] = useState(true);

  useEffect(() => {
    const fetchIncomes = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/getIncomes", {
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setIncomes(data);
        console.log("Incomes fetched successfully:", data);
      } catch (error) {
        console.error("Error fetching incomes:", error.message);
      }
    };

    if (fetchIncomesOnMount) {
      // Call the function to fetch incomes when the component mounts
      fetchIncomes();
      setFetchIncomesOnMount(false);
    }
  }, [fetchIncomesOnMount]);

  const calculateTotal = () => {
    let totalIncomes = 0;
    for (let inc of incomes) {
      totalIncomes += inc.amount;
      console.log(inc.amount);
    }
    return totalIncomes;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleRemoval = (id) => {
    const handleDeleteIncome = async (incomeId) => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/deleteIncome/${incomeId}`,
          {
            method: "DELETE",
            credentials: "include",
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const deletedIncome = await response.json();
        console.log("Income deleted successfully:", deletedIncome);
        window.location.reload();
      } catch (error) {
        console.error("Error deleting income:", error.message);
      }
    };
    handleDeleteIncome(id);
  };

  const handleSubmission = async (e) => {
    e.preventDefault();
    const addIncome = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/addIncome", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            name: formData.name,
            amount: Number(formData.amount),
            category: formData.category,
            description: formData.description,
            date: formData.date,
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Income added successfully:", data);
        setIncomes((prevIncomes) => [...prevIncomes, data]);
      } catch (error) {
        console.error("Error adding income:", error.message);
      }
    };

    // Call the function to add the income when the component mounts
    addIncome();
    console.log("Form data submitted", formData);
  };

  return (
    <div className="exp-main col-md-9 col-lg-9 col-sm-12">
      <Menu menus={menus} />
      <div className="expense-contents">
        <div className="header">
          <h3>Incomes</h3>
        </div>
        <div className="total-exp">
          <p>
            Total Income:{" "}
            {typeof calculateTotal() === "number" && !isNaN(calculateTotal())
              ? calculateTotal() + " Birr"
              : "0 Birr"}
          </p>
        </div>
        <div className="row main-under">
          <div className="form col-md-6 col-lg-6 col-sm-12 expense-inputs">
            <form>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="input1"
                  name="name"
                  placeholder="Income title"
                  onChange={handleChange}
                />
              </div>
              <div class="form-group">
                <input
                  type="number"
                  class="form-control"
                  name="amount"
                  placeholder="Income Amount"
                  onChange={handleChange}
                />
              </div>
              <div class="form-group">
                <input
                  type="date"
                  class="form-control"
                  id="input3"
                  name="date"
                  placeholder="Enter A Date"
                  onChange={handleChange}
                />
              </div>
              <div class="form-group">
                <select
                  class="form-control"
                  id="selectOption"
                  name="category"
                  onChange={handleChange}
                >
                  <option value="Option">Select Option</option>
                  <option value="education">Permanent</option>
                  <option value="groceries">Temporary</option>
                </select>
              </div>
              <div class="form-group">
                <textarea
                  class="form-control"
                  id="textarea"
                  name="description"
                  rows="3"
                  placeholder="Add a Reference"
                  onChange={handleChange}
                ></textarea>
              </div>
              <Buttons content="Add Income" onClick={handleSubmission} />
            </form>
          </div>
          <div className="side-list col-md-6 col-lg-6 col-sm-12">
            {Array.isArray(incomes) && incomes.length > 0 ? (
              incomes
                .slice()
                .reverse()
                .map((income) =>
                  income.name !== undefined ? (
                    <div key={income._id} className="side-cont">
                      <div className="fir"></div>
                      <div className="sec">
                        <div className="sec-top">
                          <div className="elipse"></div>
                          <div>{income.name}</div>
                        </div>
                        <div className="sec-bot">
                          <span className="amount">{`ETB ${income.amount}`}</span>
                          <span className="date">{income.date}</span>
                          <span className="note">{income.description}</span>
                        </div>
                      </div>
                      <div className="crud">
                        <img
                          src={trash}
                          alt="Delete"
                          onClick={() => handleRemoval(income._id)}
                        />
                      </div>
                    </div>
                  ) : null
                )
            ) : (
              <p>You haven't made any income</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expenses;
