import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import CheckOut from './Checkout';


const Cart=(props)=>{
    const cartCtx=useContext(CartContext);
    const totalAmount=(`$${(cartCtx.totalAmount).toFixed(2)}`)


    const cartItemRemoveHandler=(id)=>{
        cartCtx.removeItem(id);

    }

    const cartItemAddHandler=(item)=>{
        cartCtx.addItem({...item,amount:1});


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
    return <Modal onDismiss={props.onDismiss}>
        {CartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <CheckOut/>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onDismiss}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>

}

export default Cart;