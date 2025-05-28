import { Link, useNavigate } from "react-router-dom";
import { useBasket } from "../context/FrontContext";
import css from "../style.module.css"
import urika from "../assets/4.png"
import { useEffect, useState } from "react";
import { Succssful } from "./successful";

export const Baskit = () => {

    const navigate = useNavigate()
     const { basket, setBasket } = useBasket();

     const delBasket = () => {
        setBasket([])
     }


    const [page, setPage] = useState(false)

    useEffect(() => {
        let kill
        
        if(page){
          
          kill = setTimeout(() => {
            setPage(false)
          }, 1000) 
          setTimeout(() => {
            delBasket()
            navigate("/")
          }, 1010)
          
        }
        
        return () => clearTimeout(kill)

    }, [page])


    const onClick = (e) => {
        e.preventDefault()
        setPage(true)
    }


    if(page) return <Succssful/>

    return(
      <>
        <div className={css.basketPage}>

        {basket.length === 0 ? (
         
            <div className={css.orderCard}>
                <img className={css.urikaImg} src={urika} alt="urika" />
            </div>
          
        ) : (
          basket.map(order => (
            <div key={order.id} className={css.orderCard}>

            <div className={css.basketImgSection}>
              <img src={order.coffee.img} alt={order.coffee.name} />
            </div>
              <div className={css.assitionalIngredient}>
                              

                    <div className={css.CofeeNamePrice}>
                        <h2>{order.coffee.name}</h2>
                        <p>Price: {order.coffee.price} ₾</p>
                    </div>
                              

                      {order.ingredients.length > 0 ? (
                        <div className={css.additionalIngredient}>
                          <h4>ingredient:</h4>
                          <ul>
                            {order.ingredients.map(ing => (
                              <li key={ing.id}>
                                {ing.name} - {ing.price} ₾
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <p>Without Ingredients</p>
                        
                      )}
                      <div className={css.sum}> 
                          <p>sum: {order.totalPrice} ₾</p>
                      </div>
              </div>
            </div>
          ))
        )}
      </div>
      {basket.length !== 0 ? (

      <div className={`${css.basketPage} ${css.basketButtonSection}`}>
        <Link className={`${css.basketbuttonRed} ${ css.basketbutton}`} onClick={delBasket}>Cansel</Link>
        <Link className={`${css.basketbuttonbraun} ${css.basketbutton}`} onClick={onClick}> Bay</Link>
      </div>
      ): (
      <div className={`${css.basketPage} ${css.basketButtonSection}`}>
          <Link className={`${css.basketbuttonbraun} ${css.basketbutton}`} to={"/"}>Go Back</Link>
      </div>
      )}
      
     </>
    )
}