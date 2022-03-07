import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';
import React,{useContext} from "react";
import CartContext from "../../store/cart-context";
const HeaderCartButton=(props)=>{
    const total=useContext(CartContext);
    return (
        <button className={classes.button} onClick={props.onClick}>
         <span className={classes.icon}>
            <CartIcon/>
         </span>
         <span>Basket</span>
         <span className={classes.badge}>{total.item.length}</span>

        </button>
       

    );
}

export default HeaderCartButton ;