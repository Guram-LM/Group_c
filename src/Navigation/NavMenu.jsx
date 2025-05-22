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
        path: "*",
        element: <div><h1>Page Not Found</h1></div>
    }
]