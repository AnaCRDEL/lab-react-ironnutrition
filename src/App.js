import './App.css';
import foodsData from './foods.json';
import { useState, useEffect } from 'react';
import { Divider, Row, Button } from 'antd';

import AddFoodForm from './components/AddFoodForm';
import FoodBox from './components/FoodBox';
import Search from './components/Search';

const App = () => {
  const [foodList, setFoodList] = useState(foodsData)
  const [filteredFoods, setFilteredFoods] = useState(foodList)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    filterFoods('')
  }, [foodList])

  const addFood = (newFood) => {
    const updatedFoods = [newFood, ...foodList] 
    setFoodList(updatedFoods)
  }

  const filterFoods = (input) => {
    console.log('entrei no filter')
    const filtered = foodList.filter(food => food.name.toLowerCase().includes(input.toLowerCase()))
    setFilteredFoods(filtered)
  }

  const deleteFood = (index) => {
    console.log(index)
    const newFoods = [...foodList]
    newFoods.splice(index, 1)
    setFoodList(newFoods)
  }

  return (
    <div className="App">
      
      {showForm && <AddFoodForm addFood={addFood} />}
      <Button onClick={() => { setShowForm(!showForm) }}>{showForm ? 'Hide Form' : 'Add Food'}</Button>
      
      <Search filterFoods={filterFoods}/>
      
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
      {foodList.length > 0 ?
        filteredFoods.map((food, index) => {
          return (
            <FoodBox key={index} {...food} index={index} deleteFood={deleteFood}/>
          )
        }) 
        : (<p>No Content</p>)
        }
      </Row>
    </div>
  );
}

export default App;
