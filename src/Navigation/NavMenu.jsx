
import { AddCaffee } from "../Admin/addCaffee";
import { AddIngredient } from "../Admin/addIngredient";
import { Admin } from "../Admin/Admin";
import { Dashboard } from "../Admin/dashboard";
import { UpdatePage } from "../Admin/updatePage";
import { ValidateAdmin } from "../Admin/ValidateAdmin";
import { Front } from "../Front/Front";
import { ProtectedRoute } from "../Store/component/ProtectedRoute";

export const NavMenu = [
    {
        element: <Front/>,
        path: "/"
    },

    
    {
        path: "/admin", 
        element: <Admin/>,
        children: [
             {
                element: <ValidateAdmin/>,
                index: true
            },
            {
                path: "dashboard",
                element: (
                <ProtectedRoute>
                    <Dashboard />
                </ProtectedRoute>
                ),
            },
            {
                path: "addCaffee",
                element: (
                <ProtectedRoute>
                    <AddCaffee />
                </ProtectedRoute>
                ),
            },
            {
                path: "addIngredient",
                element: (
                <ProtectedRoute>
                    <AddIngredient />
                </ProtectedRoute>
                ),
            },
                 {
                path: "edit/:id",
                element: (
                <ProtectedRoute>
                    <UpdatePage />
                </ProtectedRoute>
                ),
            },

        ]
    },
   
    {
        path: "*",
        element: <div><h1>Page Not Found</h1></div>
    }
]