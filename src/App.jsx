import { createBrowserRouter, RouterProvider,} from "react-router-dom"
import { NavMenu } from "./Navigation/NavMenu"



function App() {
 
  return ( 
    <RouterProvider router={createBrowserRouter(NavMenu)}/>
  )
}

export default App
