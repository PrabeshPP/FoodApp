import React from "react";
import Classes from "./Checkout.module.css";
import { useRef,useState } from "react";


const CheckOut=(props)=>{
    const[formInputsValidity,setFormInputsValidity]=useState({
        name:true,
        street:true,
        city:true,
        postalCode:true
    })

    const nameInputRef=useRef();
    const streetRef=useRef();
    const postalRef=useRef();
    const cityRef=useRef();
    
    const isEmpty=value=>value.trim()==="";
    const onSubmit=(event)=>{
        event.preventDefault();
        const enteredName=nameInputRef.current.value;
        const enteredStreet=streetRef.current.value;
        const enteredPostal=postalRef.current.value;
        const enteredCity=cityRef.current.value;
        const isNotValid=isEmpty(enteredName) && isEmpty(enteredStreet) && isEmpty(enteredPostal) && isEmpty(enteredCity);
        console.log(isNotValid)
        if(isNotValid){
            return;
        }

        props.onCheckout(
            {
                name:enteredName,
                street:enteredStreet,
                postal:enteredPostal,
                city:enteredCity
                
            }
        );
        
        

        

        
    }

    return <form className={Classes.form} onSubmit={onSubmit}>
        <div className={Classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef}/>
        </div>
        <div className={Classes.control}>
        <label htmlFor="street">Street</label>
        <input type="street" id="street" ref={streetRef}/>
        </div>
        <div className={Classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input type="street" id="postal" ref={postalRef}/>
        </div>
        <div className={Classes.control}>
        <label htmlFor="city">City</label>
        <input type="street" id="city" ref={cityRef}/>
        </div>
        <button type="button" onClick={props.onClick}>Cancel</button>
        <button>Confirm</button>


    </form>

}

export default CheckOut;