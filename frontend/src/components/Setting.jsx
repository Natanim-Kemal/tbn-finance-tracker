import React from 'react'
import "./css/setting.css"
import Menu from "./Menu";
import budgetIcon from "../icons/budge.png";
import courseIcon from "../icons/courses.png";
import dashboardIcon from "../icons/dashboard.png";
import expenseIcon from "../icons/expense.png";
import walletIcon from "../icons/wallet.png";
import moreIcon from "../icons/moreIcon.jpg";
import { Link } from "react-router-dom";
import blackhe from "./assest/black he.png";
import blackshe from "./assest/blackshe.png";
import whitehe from "./assest/white he.jpg"
import whiteshe from "./assest/white she.jpg"
import Accordion from 'react-bootstrap/Accordion';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';
import { useState,useEffect } from 'react';
export default function Setting() {
    const menus = [
        { id: 1, name: "Dashboard", active: false, iconSrc: dashboardIcon },
        { id: 3, name: "Budget", active: false, iconSrc: budgetIcon },
        { id: 4, name: "Expense", active: false, iconSrc: expenseIcon },
        { id: 5, name: "Wallet", active: false, iconSrc: walletIcon },
        { id: 6, name: "More", active: false, iconSrc: moreIcon },
      ];

        const [Avatar,setAvatar]=useState(null);
        useEffect(() => {
            const savedAvatar = localStorage.getItem('chosenAvatar');
            if (savedAvatar) {
                setAvatar(savedAvatar);
            }
        }, []);

        useEffect(() => {
            if (Avatar) {
                localStorage.setItem('chosenAvatar', Avatar);
            }
        }, [Avatar]);

        let ProfilePicture;
        if(Avatar=="white-he"){
        ProfilePicture=(
            <div className="settingsPP">
            <img className="settingsImg" src={whitehe} alt="img" />
        </div>
        )
        }

        if(Avatar=="black-he"){
            ProfilePicture=(
                <div className="settingsPP">
                <img className="settingsImg" src={blackhe} alt="img" />
            </div>
            )
        }

        if(Avatar=="black-she"){
            ProfilePicture=(
                <div className="settingsPP">
                <img className="settingsImg" src={blackshe} alt="img" />
            </div>
            )
        }

        if(Avatar=="white-she"){
            ProfilePicture=(
                <div className="settingsPP">
                <img className="settingsImg" src={whiteshe} alt="img" />
            </div>
            )
            }
    
        return(
            <div className="setting-body">
                <Menu menus={menus}/>
                <div className=".setting-content">
                    <div className="settings">
                        <div className="settingsWrapper">
                            <div className="settingsTitle">
                                <span className="settingsUpdateTitle">Update Your Profile </span>
                                <span className="settingsLogOutBth"><Link className="link" to="/" >Log Out</Link></span>
                            </div>
                            <form  className="settingForm">
                                <div className="together">
                                {ProfilePicture}
                                <Accordion>
                                <Accordion.Header>
                                    <div className="accodion-title">
                                        ChooseAvatar
                                    </div>
                                </Accordion.Header>
                                <AccordionBody>
                                    <div className='avatar-choices'>
                                        <div className='avatar-image-container'onClick={() => {setAvatar("black-he")}}>
                                            <img src={blackhe}/>
                                        </div>
                                        <div className='avatar-image-container'onClick={() => {setAvatar("black-she")}}>
                                            <img src={blackshe}/>
                                        </div>
                                        <div className='avatar-image-container'onClick={() => {setAvatar("white-she")}}>
                                            <img src={whiteshe}/>
                                        </div>
                                        <div className='avatar-image-container'onClick={() => {setAvatar("white-he")}}>
                                            <img src={whitehe}/>
                                        </div>
                                    </div>
                                </AccordionBody>
                                </Accordion>
                                </div>

                                <input type="text" placeholder="Abebe" />
                                <label >Username</label>
                                <input type="email" placeholder="abe@gmail.com" />
                                <label >Email</label>
                                <input type="password"  />
                                <label >Password</label>
                                <button className="settingsSubmit">Update</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
  )
}
