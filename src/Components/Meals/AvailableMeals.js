import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import {useEffect,useState} from "react";



let DUMMY_MEALS=[];
const AvailableMeals=()=>{
  const [meals,setMeals]=useState([])
  

  useEffect(()=>{
    const fetchMeals=async()=>{
      const response=await fetch("https://foodapp-c413b-default-rtdb.firebaseio.com/meals.json")
      const data=await response.json();
      const loadedMeals=[];
      for(const key in data){
        loadedMeals.push(
          {
            "id":key,
            "name":data[key].name,
            "description":data[key].description,
            "price":data[key].price
          }
        )
      }

      setMeals(loadedMeals);

    }
    fetchMeals();
        

  },[])

  

  

  const mealsList=meals.map((item)=>
  <MealItem 
  id={item.id}
  key={item.id}
  name={item.name}
  description={item.description}
  price={item.price}  />);
  return(
    <section className={classes.meals}>
    <Card>
      <ul>
        {mealsList}
      </ul>
      </Card>
    </section>
  )

}

export default AvailableMeals;