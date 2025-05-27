import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { featchCoffee, featchIngredient } from "../Store/FeathData/feath.thunks"
import { Outlet, useLocation } from "react-router-dom"
import { Sidebar } from "./adminSidebar"
import css from "../style.module.css"

export const Admin = () => {


    const location = useLocation();
    const hideSidebar = location.pathname === "/admin";

    return(
        <div className={css.adminPage}>
            <div className={css.sidbarsection}>
                {!hideSidebar && <Sidebar />}
            </div>
            
           
            <div className={css.outletSection}>
                <Outlet />
            </div>
            
        </div>
    )
}