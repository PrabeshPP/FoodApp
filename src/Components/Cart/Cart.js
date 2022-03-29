import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import React,{ useContext,useState } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import CheckOut from './Checkout';


const Cart=(props)=>{
    const cartCtx=useContext(CartContext);
    const totalAmount=(`$${(cartCtx.totalAmount).toFixed(2)}`)
    const [ordered,setOrdered]=useState(false);


    const cartItemRemoveHandler=(id)=>{
        cartCtx.removeItem(id);

    }

    const cartItemAddHandler=(item)=>{
        cartCtx.addItem({...item,amount:1});


    }
    const orderHandler=()=>{
        setOrdered(true);

    }

    const CartItems=(<ul className={classes['cart-items']}>
        {cartCtx.items.map((item)=><CartItem key={item.id} 
        name={item.name}
        price={item.price}
        amount={item.amount} 
        onAdd={cartItemAddHandler.bind(null,item)}
        onRemove={cartItemRemoveHandler.bind(null,item.id)}
        />)}
    </ul>);

    const submitOrderHandler=(userData)=>{
        fetch("https://foodapp-c413b-default-rtdb.firebaseio.com/orders.json",{
            method:"POST",
            body:JSON.stringify(
                {
                    user:userData,
                    orderedItems:cartCtx.items
                }

            )

        });

    }

    const cartButton=()=>{
        return <React.Fragment>
            <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onDismiss}>Close</button>
        <button className={classes.button} onClick={orderHandler}>Order</button>
        </div>
        </React.Fragment>
    }
    return <Modal onDismiss={props.onDismiss}>
        {CartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        {ordered && <CheckOut onClick={props.onDismiss} onCheckout={submitOrderHandler}/>}
        {!ordered && cartButton()}
    </Modal>

}

export default Cart;