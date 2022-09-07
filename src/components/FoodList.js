import FoodBox from "./FoodBox"

const FoodList = ({ foods }) => {
    return (
        <>
            {foods.map((food, index) => {
                return (
                    <FoodBox key={index} name={food.name} calories={food.calories} image={food.image} servings={food.servings}/>
                )
            })}
        </>    
    )
}

export default FoodList;