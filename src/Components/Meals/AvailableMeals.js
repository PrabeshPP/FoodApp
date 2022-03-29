import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import {useEffect,useState} from "react";




const AvailableMeals=()=>{
  const [meals,setMeals]=useState([])
  const [isLoading,setIsLoading]=useState(false);
  const[hasError,setHasError]=useState("");
  

  useEffect(()=>{
    const fetchMeals=async()=>{
      setIsLoading(true);
      try{
        const response=await fetch("https://foodapp-c413b-default-rtdb.firebaseio.com/meals.json")
        if(response.status!=200){
          throw new Error("retry again!!!")
        }
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
      setIsLoading(false);

      }catch (err){
        setIsLoading(false);
        setHasError(err.message);

      }
    }
    fetchMeals();
        

  },[])

  if(isLoading && !hasError){
    return <section className={classes.mealsLoading}>
      <p>Loading...</p>
    </section>

  }

  if(hasError){
    return <section className={classes.mealsErr}>
      <p>{hasError}</p>
    </section>

  }

  

  

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