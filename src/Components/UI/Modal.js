import classes from './Modal.module.css';
import ReactDom from 'react-dom';
import React from 'react';

const BackDrop=(props)=>{
    return <div className={classes.backdrop} onClick={props.onDismiss}>

    </div>

}

const ModalOverlay=props=>{
    return <div className={classes.modal} >
        <div className={classes.content}>{props.children}</div>
    </div>

}

const portalElem=document.getElementById('div1');

const Modal=(props)=>{
    return <React.Fragment>
        {ReactDom.createPortal(<BackDrop onDismiss={props.onDismiss}/>,portalElem)}
        {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElem)}
    </React.Fragment>
   

}

export default Modal;