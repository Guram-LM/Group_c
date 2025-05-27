import { Outlet } from "react-router-dom"
import { FrontSidebar } from "./frontSidbar"
import css from "../style.module.css"

export const Front = () => {

    return(
        <div className={css.adminPage}>
            <div className={css.sidbarsection}>
                <FrontSidebar/>
            </div>
            <div className={css.outletSection}>
                <Outlet/>
            </div>
        </div>
    )
}