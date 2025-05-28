import { Link, useNavigate } from "react-router-dom";
import css from "../style.module.css"
import { useAuthorization } from "../context/AuthNontext";

export const Sidebar = () => {

  const { logout } = useAuthorization();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login"); 
  }

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
          <Link onClick={handleLogout} className={css.navButuon}>Log Out</Link>
      </div>

    </div>
  );
};