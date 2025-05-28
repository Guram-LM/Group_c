import { useDispatch, useSelector } from "react-redux"
import coffeeImg from "../assets/coffee.jpeg"
import { useEffect, useState } from "react"
import { featchCoffee, featchIngredient } from "../Store/FeathData/feath.thunks"
import css from "../style.module.css"
import { Link } from "react-router-dom"
import { useBasket } from "../context/FrontContext"



export const HomePage = () => {

    const { addOrder } = useBasket(); 

    const {coffee, ingredient, loading, error} = useSelector(state => state.get)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(featchCoffee("coffee"))
        dispatch(featchIngredient("igredients"))
    }, [])

    
    useEffect(() => {
    console.log("Updated Ingredient:", ingredient);
    }, [ingredient]);



    const [custmOrder, setCustomOrder] = useState([])

    const markiren = (id) => {
        setCustomOrder(prev =>
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        )
    }

    const order = (coffeeItem) => {
        const selected = ingredient.filter(ing => custmOrder.includes(ing.id));
        const ingredientsPrice = selected.reduce((sum, ing) => sum + Number(ing.price || 0), 0);
        const total = Number(coffeeItem.price) + ingredientsPrice;

        addOrder(coffeeItem, selected, total);
        setCustomOrder([]);
        
    };






    

    if(loading) return <h1> Loading ...</h1>
    if(error) return <h1>{error.message}</h1>

    return(
        <div className={css.homePageSeqtion}>

            <div className={css.homedashboardheader}>
                <div>
                    <h1 className={css.homeHedTitle}>Coffee Selection</h1>
                </div>
                <div className={css.currencySelector}>
                            <label htmlFor="currency">Currency:</label>
                        <select id="currency" name="currency" className={css.homeDropdown}>
                            <option value="usd">USD ($)</option>
                            <option value="eur">EUR (€)</option>
                            <option value="gel">GEL (₾)</option>
                        </select>
                </div>
            </div>

        
            <div className={css.coffeeCards}>


                {coffee.map((ingr) => (
                    <div key={ingr.id} className={css.homePageHomeCard}> 

                        <div className={css.cardImg}>
                            <img src={ingr.img || coffeeImg} alt="img" />
                        </div>


                        <div className={css.sectiOnone}>
                            <h1 className={css.cardTitle}> {ingr.name}</h1>  
                            <p className={css.schwarz}>{ingr.Description}</p>
                            <div className={css.PriceSection}>
                                
                                <p className={css.schwarz}><span>Origin: </span> {ingr.Country}</p> 
                                <p className={css.schwarz}><span>Caffeine: </span>{ingr.weight}</p> 
                                <p className={css.schwarz}><span>Price: </span>{ingr.price}</p>
                            </div>
        
                        </div>
                        {ingredient.map((ing) => (
                    <div key={ing.id} className={`${css.secoundSection} ${custmOrder.includes(ing.id) ? css.selected : ""}`}
                        onClick={() => markiren(ing.id)}>

                        <p className={css.pStyyle}>{ing.name}</p>
                        <p className={css.pStyyle}>{ing.price} GEL</p>
                    </div>
                ))}


                        <div className={css.buttonSection}>
                            <button className={`${css.buttonstyle} ${css.collorLightBouwn}`} onClick={() => order(ingr)}>  Buy </button>
                            <Link to={"/"}className={`${css.buttonstyle } ${ css.collorbrown}`}>information</Link>
                        </div>
                        
                    </div>
                
                ))}

                
                
            </div>       
        </div>      
       
    )
}