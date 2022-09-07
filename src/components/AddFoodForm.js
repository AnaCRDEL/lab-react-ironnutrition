import { Divider, Input } from 'antd';
import { useState } from 'react';

const AddFoodForm = (props) => {
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [calories, setCalories] = useState(1)
    const [servings, setServings] = useState(1)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const newFood = {name, image, calories, servings}
        props.addFood(newFood)
    }


    return (
        <form onSubmit={handleSubmit}>
          <Divider>Add Food Entry</Divider>

          <label>Name</label>
          <Input value={name} type="text" onChange={(e) => {
            console.log(e.target.value)
            setName(e.target.value)}}/>
    
          <label>Image</label>
          <Input value={image} type="text" onChange={(e) => {setImage(e.target.value)}}/>

          <label>Calories</label>
          <Input value={calories} type="text" onChange={(e) => {setCalories(e.target.value)}}/>

          <label>Servings</label>
          <Input value={servings} type="text" onChange={(e) => {setServings(e.target.value)}}/>
    
          <button type="submit">Create</button>
        </form>
      );
    }
    
    export default AddFoodForm;