import React,{useState} from "react";
import Header from "./Components/Layout/Header";
import Meals  from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";


function App() {
  const[cartShown,setCartShown]=useState(false);
  const showCartHandler=()=>{
    setCartShown(true);
  }

  const hideCartHandler=()=>{
    setCartShown(false);
  }
  return (
  <React.Fragment>
 {cartShown && <Cart onDismiss={hideCartHandler}/>}
   <Header onShow={showCartHandler}/>
   <Meals/>
  </React.Fragment>
  );
}

export default App;
