import { AddCaffee } from "../Admin/addCaffee";
import { AddIngredient } from "../Admin/addIngredient";
import { Admin } from "../Admin/Admin";
import { ValidateAdmin } from "../Admin/ValidateAdmin";
import { Front } from "../Front/Front";

export const NavMenu = [
    {
        element: <Front/>,
        path: "/"
    },
    {
        element: <Admin/>,
        path: "/adminPage"
    },
    {
        element: <ValidateAdmin/>,
        path: "/validateAdmin"
    },
        {
        element: <AddCaffee/>,
        path: "/addCaffee"
    },
        {
        element: <AddIngredient/>,
        path: "/addIngredient"
    },
    {
        path: "*",
        element: <div><h1>Page Not Found</h1></div>
    }
]