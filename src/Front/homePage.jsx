import { useDispatch, useSelector } from "react-redux"
import coffeeImg from "../assets/coffee.jpeg"
import { useEffect, useState } from "react"
import { featchCoffee, featchIngredient } from "../Store/FeathData/feath.thunks"
import css from "../style.module.css"
import { Link } from "react-router-dom"
import { useBasket } from "../context/FrontContext"
import { LoaaderPage } from "../loading"
export const HomePage = () => {
  const dispatch = useDispatch()
  const { coffee, ingredient, loading, error } = useSelector(state => state.get)
  const [custmOrder, setCustomOrder] = useState([])
  //   თუ ავფეთქდით თამუნა ეს მოშალე
  const { addOrder, currency, setCurrency, dolarich} = useBasket()
  const formatPrice = (priceInGel) => {
    const price = Number(priceInGel) || 0
    if (currency === "gel" || dolarich == null) {
      return price.toFixed(2) + " GEL"
    }
    return (price / dolarich).toFixed(2) + " $"
  }
//   თუ ავფეთქდით თამუნა ეს მოშალე
  useEffect(() => {
    dispatch(featchCoffee("coffee"))
    dispatch(featchIngredient("igredients"))
  }, [dispatch])
  const markiren = (id) => {
    setCustomOrder(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }
  const order = (coffeeItem) => {
    const selected = ingredient.filter(ing => custmOrder.includes(ing.id))
    const ingredientsPrice = selected.reduce((sum, ing) => sum + Number(ing.price || 0), 0)
    const total = Number(coffeeItem.price) + ingredientsPrice
    addOrder(coffeeItem, selected, total)
    setCustomOrder([])
  }
  if (loading) return <LoaaderPage />
  if (error) return <h1>{error.message}</h1>
  return (
    <div className={css.homePageSeqtion}>
      <div className={css.homedashboardheader}>
        <h1 className={css.homeHedTitle}>Coffee Selection</h1>
        <div className={css.currencySelector}>
          <label htmlFor="currency">Currency:</label>
          <select
            id="currency"
            name="currency"
            className={css.homeDropdown}
            value={currency}
            onChange={e => setCurrency(e.target.value)}
          >
            <option value="usd">USD ($)</option>
            <option value="gel">GEL (₾)</option>
          </select>
          {currency === "usd" && dolarich != null && (
            <div style={{ fontSize: 12, color: "gray", marginTop: 5 }}>
                1 USD = {dolarich.toFixed(2)} GEL
            </div>
            )}
        </div>
      </div>
      <div className={css.coffeeCards}>
        {coffee.map(ingr => (
          <div key={ingr.id} className={css.homePageHomeCard}>
            <div className={css.cardImg}>
              <img src={ingr.img || coffeeImg} alt="coffee" />
            </div>
            <div className={css.sectiOnone}>
              <h1 className={css.cardTitle}>{ingr.name}</h1>
              <p className={css.schwarz}>{ingr.Description}</p>
              <div className={css.PriceSection}>
                <p className={css.schwarz}><span>Origin: </span>{ingr.Country}</p>
                <p className={css.schwarz}><span>Caffeine: </span>{ingr.weight}</p>
                <p className={css.schwarz}>
                  <span>Price: </span>{formatPrice(ingr.price)}
                </p>
              </div>
            </div>
            {ingredient.map(ing => (
              <div
                key={ing.id}
                className={`${css.secoundSection} ${custmOrder.includes(ing.id) ? css.selected : ""}`}
                onClick={() => markiren(ing.id)}
              >
                <p className={css.pStyyle}>{ing.name}</p>
                <p className={css.pStyyle}>{formatPrice(ing.price)}</p>
              </div>
            ))}
            <div className={css.buttonSection}>
              <button
                className={`${css.buttonstyle} ${css.collorLightBouwn}`}
                onClick={() => order(ingr)}
              >
                Buy
              </button>
              <Link to={"/"} className={`${css.buttonstyle} ${css.collorbrown}`}>
                information
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}