import css from "../style.module.css"
import baskit from "../assets/1.png"
import { useNavigate } from "react-router-dom";
import { useBasket } from "../context/FrontContext";

export const FrontSidebar = () => {
    const navigate = useNavigate(); 
    const { basket } = useBasket(); 

    const handleClick = () => {
        navigate("/basket"); 
    };

  return (
    <div className={css.sidebar}>

      <div className={css.sidbarContant}>
          <h2 className={css.sidbarTitle}>Coffee Admin</h2>
          <p className={css.sidbarTitle}>Management Panel</p>
      </div>

      <div className={css.basketSec}>

        <div onClick={handleClick} className={css.baskitImg}>
            <img src={baskit} alt="" />
            {basket.length > 0 && (
          <span className={css.basketCount}>
            {basket.length}
          </span>
        )}
        </div>
         
      </div>

    </div>
  );
};