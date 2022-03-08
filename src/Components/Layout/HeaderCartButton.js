import React,{useContext} from "react";
import CartContext from "../../store/cart-context";
import classes from './HeaderCartButton.module.css';
import CartIcon from "../Cart/CartIcon";


const HeaderCartButton=(props)=>{
    const ctxValue=useContext(CartContext);
    const numberofCartItems=ctxValue.items.reduce((currElem,item)=>{
        currElem= parseInt(currElem);
        let value=parseInt(item.amount);
        
        return parseInt(currElem + value);
    },+0);
   
    
    
    return (
        <button className={classes.button} onClick={props.onClick}>
     
         <span className={classes.icon}>
             <CartIcon/>
         </span>
      
         <span>Basket</span>
         <span className={classes.badge}>{numberofCartItems}</span>

        </button>
       

    );
}

export default HeaderCartButton ;