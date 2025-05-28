
import { AddCaffee } from "../Admin/addCaffee";
import { AddIngredient } from "../Admin/addIngredient";
import { Admin } from "../Admin/Admin";
import { Dashboard } from "../Admin/dashboard";
import { UpdataIngredient } from "../Admin/updateIngredient";
import { UpdatePage } from "../Admin/updatePage";
import { ValidateAdmin } from "../Admin/ValidateAdmin";
import { BasketWrapper } from "../context/FrontContext";
import { Baskit } from "../Front/baskit";
import { Front } from "../Front/Front";
import { HomePage } from "../Front/homePage";
import { ProtectedRoute } from "../Store/component/ProtectedRoute";

const WrappedFront = () => (
  <BasketWrapper>
    <Front />
  </BasketWrapper>
);

export const NavMenu = [
    {
        path: "/",
        element: <WrappedFront/>,
        children: [
            {
                element: <HomePage/>,
                index: true
            },
            {
                element: <Baskit/>,
                path: "basket"
            }

        ]
        
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
            {
                path: "ingredit/:id",
                element: (
                <ProtectedRoute>
                    <UpdataIngredient />
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