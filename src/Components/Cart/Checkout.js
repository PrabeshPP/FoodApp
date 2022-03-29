import React from "react";
import Classes from "./Checkout.module.css";

const CheckOut=(props)=>{
    return <form >
        <div className={Classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name"/>
        </div>
        <div className={Classes.control}>
        <label htmlFor="street">Street</label>
        <input type="street" id="street"/>
        </div>
        <div className={Classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input type="street" id="postal"/>
        </div>
        <div className={Classes.control}>
        <label htmlFor="city">City</label>
        <input type="street" id="city"/>
        </div>
        <button>Confirm</button>


    </form>

}

export default CheckOut;