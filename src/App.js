//import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import React from 'react';
import AddFoodForm from './components/AddFoodForm';
import { useState } from 'react';
import Search from './components/Search';


function App() {
  const [input, setInput] = useState("")
  const [food, setFoods] = useState(foods);
  const [comidaFiltrada, setComidaFiltrada] = useState(food);

  const addNewFood = (newFood) => {
    const updateFood = [...food, newFood];
    setFoods(updateFood)
  }
  const searchFood = (e) => {
   setInput(e.target.value) 
   const valueInput = e.target.value.toLocaleLowerCase()
   const filteredFood = food.filter((comida)=>{
    const incluyeComida = comida.name.toLocaleLowerCase()
    return incluyeComida.includes(valueInput)
   })
   setComidaFiltrada(filteredFood)
  }

  return (
    <div className='App App-card'>
    <h1 style={{color: "white"}}>Food List</h1>
    <div className='form'>
    <AddFoodForm addFood ={addNewFood}/>
    </div>
    <div>
    <Search 
      input={input}
      searchFood={searchFood}
    />
    </div>
    <div className='foodBox'>
    {comidaFiltrada.map((food) => {
      
      return (
        <FoodBox 
        key={food.name}
        name = {food.name}
        calories =  {food.calories}
        image = {food.image}
        servings={food.servings} />
      )

    })
    }
    </div>


    </div>
  );
}

export default App;
