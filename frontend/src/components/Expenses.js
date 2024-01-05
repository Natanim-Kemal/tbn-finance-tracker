import React from "react";
import "./css/expenses.css";
import trash from "../icons/trash.png";

const Expenses = () => {
  return (
    <div className="exp-main col-md-9 col-lg-9 col-sm-12">
      <div className="header">
        <h3>Expenses</h3>
      </div>
      <div className="total-exp">
        <p>
          Total Expense: <span>00000</span>
        </p>
      </div>
      <div className="row main-under">
        <div className="form col-md-6 col-lg-6 col-sm-12">
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
            <button type="submit" class="btn btn-ref">
              Add a Reference
            </button>
          </form>
        </div>
        <div className="side-list col-md-6 col-lg-6 col-sm-12">
          <div className="side-cont">
            <div className="fir"></div>
            <div className="sec">
              <div className="sec-top">
                <div className="elipse"></div>
                <div>Rent</div>
              </div>
              <div className="sec-bot">
                <span className="amount">ETB 3000</span>
                <span className="date">23/04/16</span>
                <span className="note">Rent and Bill</span>
              </div>
            </div>
            <img src={trash} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expenses;
