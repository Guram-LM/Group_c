import { Link, useNavigate } from "react-router-dom";
import { useBasket } from "../context/FrontContext";
import css from "../style.module.css"
import urika from "../assets/4.png"
import { useEffect, useState } from "react";
import { Succssful } from "./successful";
export const Baskit = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(false);
  const delBasket = () => {
    setBasket([]);
  };
//   თუ ავფეთქდით თამუნა ეს მოშალე
  const { basket, setBasket, currency, dolarich } = useBasket();
  const formatPrice = (priceInGel) => {
    const price = Number(priceInGel) || 0;
    if (currency === "gel" || dolarich == null) {
      return price.toFixed(2) + " ₾";
    }
    return (price / dolarich).toFixed(2) + " $";
  };
//   თუ ავფეთქდით თამუნა ეს მოშალე
  useEffect(() => {
    let kill;
    if (page) {
      kill = setTimeout(() => {
        setPage(false);
      }, 1000);
      setTimeout(() => {
        delBasket();
        navigate("/");
      }, 1010);
    }
    return () => clearTimeout(kill);
  }, [page]);
  const onClick = (e) => {
    e.preventDefault();
    setPage(true);
  };
  if (page) return <Succssful />;
  return (
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
                  <p>Price: {formatPrice(order.coffee.price)}</p>
                </div>
                {order.ingredients.length > 0 ? (
                  <div className={css.additionalIngredient}>
                    <h4>Ingredient:</h4>
                    <ul>
                      {order.ingredients.map(ing => (
                        <li key={ing.id}>
                          {ing.name} - {formatPrice(ing.price)}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <p>Without Ingredients</p>
                )}
                <div className={css.sum}>
                  <p>Sum: {formatPrice(order.totalPrice)}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      {basket.length !== 0 ? (
        <div className={`${css.basketPage} ${css.basketButtonSection}`}>
          <Link className={`${css.basketbuttonRed} ${css.basketbutton}`} onClick={delBasket}>
            Cancel
          </Link>
          <Link className={`${css.basketbuttonbraun} ${css.basketbutton}`} onClick={onClick}>
            Buy
          </Link>
        </div>
      ) : (
        <div className={`${css.basketPage} ${css.basketButtonSection}`}>
          <Link className={`${css.basketbuttonbraun} ${css.basketbutton}`} to={"/"}>
            Go Back
          </Link>
        </div>
      )}
    </>
  );
};
