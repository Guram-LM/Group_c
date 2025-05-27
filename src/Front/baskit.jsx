import { useBasket } from "../context/FrontContext";
import css from "../style.module.css"

export const Baskit = () => {
     const { basket } = useBasket();


    return(
        <div className={css.basketPage}>
      <h1>კალათის გვერდი</h1>

      {basket.length === 0 ? (
        <p>კალათი ცარიელი</p>
      ) : (
        basket.map(order => (
          <div key={order.id} className={css.orderCard}>
            <h2>{order.coffee.name}</h2>
            <p>Price: {order.coffee.price} ₾</p>

            {order.ingredients.length > 0 ? (
              <div>
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

            <p>ჯამი: {order.totalPrice} ₾</p>
            <hr />
          </div>
        ))
      )}
    </div>
    )
}