import css from "../style.module.css"
import baskit from "../assets/1.png"
import { Link, useNavigate } from "react-router-dom";
import { useBasket } from "../context/FrontContext";
import logo from "../assets/2.png"
import cam from "../assets/3.png"


export const FrontSidebar = () => {
    const navigate = useNavigate(); 
    const { basket } = useBasket(); 

    const handleClick = () => {
        navigate("/basket"); 
    };

  return (
    <div className={`${css.sidebar} ${css.sidebarColor}`}>

      <div className={css.sidbarLogo}>
        
          <Link to={"/"}>
              <img className={css.logo} src={logo} alt="" />
          </Link>

          <h2 className={css.logoTitle}>Bean Brew</h2>
       
      </div>
      <div className={css.capimg}>
          <Link to={"/"}>
              <img className={css.cap} src={cam} alt="" />
          </Link>
          <p className={css.pStyle}>Coffee Menu</p>
      </div>

      <div className={css.basketSec}>

        <div onClick={handleClick} className={css.baskitImg}>
            <img className={css.basetimg} src={baskit} alt="" />
            {basket.length > 0 && (
          <span className={css.basketCount}>
            {basket.length}
          </span>
        )}
        </div>
        <p className={css.pStyle}>Cart</p>
         
      </div>

    </div>
  );
};