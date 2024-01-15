import React from "react";
import "./css/sidebarMenu.css";
import logo from './assest/Logo.png'

export default function SidebarMenu() {
  return (
    <div className="sidebarMenu">
        <div className="top-section">
          <div className="logo">
            <img src={logo} alt="Logo" />
            </div> 
             <div className="text">
                <h3>TBN</h3>
             </div>
        </div>
    </div>
  )
}
