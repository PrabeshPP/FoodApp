import React,{useContext} from "react";
import CartContext from "../../store/cart-context";
import classes from './HeaderCartButton.module.css';
import CartIcon from "../Cart/CartIcon";


const HeaderCartButton=(props)=>{
    const ctxValue=useContext(CartContext);
    const numberOfItems=0;
    
    return (
        <button className={classes.button} onClick={props.onClick}>
     
         <span className={classes.icon}>
             <CartIcon/>
         </span>
      
         <span>Basket</span>
         <span className={classes.badge}>{numberOfItems}</span>

        </button>
       

    );
}

export default HeaderCartButton ;