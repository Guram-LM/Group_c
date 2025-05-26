import { Link } from "react-router-dom";
import css from "../style.module.css"

export const Sidebar = () => {
  return (
    <div className={css.sidebar}>
      <div className={css.sidbarContant}>
          <h2 className={css.sidbarTitle}>Coffee Admin</h2>
          <p className={css.sidbarTitle}>Management Panel</p>
      </div>
      <div className={css.navSidbar}>
          <Link className={css.navButuon} to={"dashboard"}>Dashboard</Link>
          <Link className={css.navButuon}to={"addCaffee"}>Add Coffee</Link>
          <Link className={css.navButuon}to={"addIngredient"}>Manage Ingredients</Link>
      </div>

    </div>
  );
};