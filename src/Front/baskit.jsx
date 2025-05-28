import { Link } from "react-router-dom";
import { useBasket } from "../context/FrontContext";
import css from "../style.module.css"

export const Baskit = () => {
     const { basket } = useBasket();

    return(
      <>
        <div className={css.basketPage}>

        {basket.length === 0 ? (
          <p>კალათი ცარიელი</p>
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
                          <h4>ინგრედიენტი:</h4>
                          <ul>
                            {order.ingredients.map(ing => (
                              <li key={ing.id}>
                                {ing.name} - {ing.price} ₾
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <p>დამატებითი ინგრედიენტების გარეშე</p>
                        
                      )}
                      <div className={css.sum}> 
                          <p>ჯამი: {order.totalPrice} ₾</p>
                      </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className={`${css.basketPage} ${css.basketButtonSection}`}>
        <Link className={`${css.basketbuttonRed} ${ css.basketbutton}`} to= {"/"}>გაუქმება</Link>
        <Link className={`${css.basketbuttonbraun} ${css.basketbutton}`}> შეძენა</Link>
      </div>
     </>
    )
}