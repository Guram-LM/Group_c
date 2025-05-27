import { useDispatch, useSelector } from "react-redux"
import coffeeImg from "../assets/coffee.jpeg"
import { useEffect, useState } from "react"
import { featchCoffee, featchIngredient } from "../Store/FeathData/feath.thunks"
import css from "../style.module.css"
import { Link } from "react-router-dom"



export const HomePage = () => {

    const {coffee, ingredient, loading, error} = useSelector(state => state.get)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(featchCoffee("coffee"))
        dispatch(featchIngredient("igredients"))
    }, [])

    
    useEffect(() => {
    console.log("Updated Ingredient:", ingredient);
    }, [ingredient]);



    const [selectedIngredients, setSelectedIngredients] = useState([])

    const markiren = (id) => {
        setSelectedIngredients(prev =>
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        )
    }

    const handleBuy = (coffeePrice) => {
        const selected = ingredient.filter(ing => selectedIngredients.includes(ing.id))
        const ingredientsPrice = selected.reduce((sum, ing) => sum + Number(ing.price || 0), 0)
        const total = Number(coffeePrice) + ingredientsPrice
        alert(`Total price: ${total} ₾`)
    }






    

    if(loading) return <h1> Loading ...</h1>
    if(error) return <h1>{error.message}</h1>

    return(
        <div className={css.coffeeCards}>

            {coffee.map((ingr) => (
                <div key={ingr.id} className={css.card}> 

                    <div className={css.cardImg}>
                        <img src={ingr.img || coffeeImg} alt="img" />
                    </div>


                    <div className={css.cardContent}>
                        <h1 className={css.cardTitle}> {ingr.name}</h1>  
                        <p className={css.schwarz}>{ingr.Description}</p>
                        <div>
                            
                            <p className={css.schwarz}><span>Origin: </span> {ingr.Country}</p> 
                            <p className={css.schwarz}><span>Caffeine: </span>{ingr.weight}</p> 
                            <p className={css.schwarz}><span>Price: </span>{ingr.price}</p>
                        </div>
    
                    </div>
                    {ingredient.map((ing) => (
                <div key={ing.id} className={`${css.pStyyle} ${selectedIngredients.includes(ing.id) ? css.selected : ""}`}
                    onClick={() => markiren(ing.id)}>

                    <p className={css.pStyyle}>{ing.name}</p>
                    <p className={css.pStyyle}>{ing.price}</p>
                </div>
            ))}


                    <div className={css.buttonSection}>
                        <button className={`${css.buttonstyle} ${css.collorLightBouwn}`} onClick={() => handleBuy(ingr.price)}>  Buy </button>
                        <Link to={"/"}className={`${css.buttonstyle } ${ css.collorbrown}`}>information</Link>
                    </div>
                    
                </div>
            
            ))}

            
            
                
                
        </div>
    )
}