import React from 'react'
import axios from 'axios'

import { useState,useEffect } from 'react'
const Meals = () => {
    const [items, setItems] = useState([])
    useEffect(() =>{
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood").then(res =>{
            setItems(res.data.meals)

        }).catch((error) => console.log(error));
    },[])
  
    const MealsList = items.map(({strMeal, strMealThumb, idMeal}) => {
        return (
            <div className='meal-container' key={idMeal}>
                <img src={strMealThumb} alt={strMeal} />
          
                    <p>{strMeal}</p>
                   
                
            </div>
        )
    })

  return (
    <div id='Meals'>
        {MealsList}
    </div>
  )
}

export default Meals