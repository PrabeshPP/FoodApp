import React,{useContext,useEffect,useState} from "react";
import CartContext from "../../store/cart-context";
import classes from './HeaderCartButton.module.css';
import CartIcon from "../Cart/CartIcon";


const HeaderCartButton=(props)=>{
    const ctxValue=useContext(CartContext);
    const[isHighlighted,setIsHighlighted]=useState(false);

    const numberofCartItems=ctxValue.items.reduce((currElem,item)=>{
        currElem= parseInt(currElem);
        let value=parseInt(item.amount);
        
        return parseInt(currElem + value);
    },+0);

    const buttonClasses=`${classes.button} ${isHighlighted ? classes.bump:''}`
    const {items}=ctxValue;
    useEffect(()=>{
        if(items.length===0){
            return;
        }
        setIsHighlighted(true);

       const timer= setTimeout(()=>{
            setIsHighlighted(false);
        },300);

        return ()=>{
            clearTimeout(timer);
        };

    },[ctxValue.items])
   
   
    
    return (
        <button className={buttonClasses} onClick={props.onClick}>
     
         <span className={classes.icon}>
             <CartIcon/>
         </span>
      
         <span>Basket</span>
         <span className={classes.badge}>{numberofCartItems}</span>

        </button>
       

    );
}

export default HeaderCartButton ;