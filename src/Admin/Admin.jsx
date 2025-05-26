import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { featchCoffee, featchIngredient } from "../Store/FeathData/feath.thunks"
import { Outlet, useLocation } from "react-router-dom"
import { Sidebar } from "./adminSidebar"
import css from "../style.module.css"

export const Admin = () => {

    // const dispatch = useDispatch()
    // const {coffee, ingredient, loading, error} = useSelector(state => state.get)

    // useEffect(() => {
    //     dispatch(featchCoffee("coffee"))
    //     dispatch(featchIngredient("ingredient"))
    // }, [dispatch])

    // console.log(coffee)
    // console.log(ingredient)


    // if(loading) return <h1>loading ......</h1>
    // if(error) return <h1>{error.mesსage} </h1>


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