import React from "react";
import classes from "./Header.module.css";
import coverImage from '../../assets/coverImage.jpg';


const Header=(props)=>{
    return(
        <React.Fragment>
        <header className={classes.header}>
            <h1>MeroKitchen</h1>
            <button>cart</button>
            
        </header>
        <div className={classes["main-Img"]}>
        <img src={coverImage} alt="A Cover Image!"/>
        </div>
            
        </React.Fragment>   
    );
}

export default Header;