import React from 'react'
import classes from "../styles/Navbar.module.scss";
import Logo from "../assets/logo.png"
import {AiFillInstagram,AiFillTwitterCircle} from "react-icons/ai";
import {BsPinterest} from "react-icons/bs";

function Navbar() {
    return (
        <div className={classes.Conatiner}>
            <div className={classes.Main}>
                <img src={Logo} alt="main logo"/>
                <ul>
                    <li>Blogs</li>
                    <li>Learn</li>
                    <li>Bookmarks</li>
                    <li>UI Kit</li>
                </ul>
            </div>
            <div className={classes.SocialDiv}>
                <AiFillInstagram className={classes.Socio}/>
                <AiFillTwitterCircle className={classes.Socio}/>
                <BsPinterest className={classes.Socio}/>
            </div>
        </div>
    )
}

export default Navbar