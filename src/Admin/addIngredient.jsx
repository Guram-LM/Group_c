import { useState } from "react"
import { IngredientsForm } from "./ingredentsForm"
import { useDispatch, useSelector } from "react-redux"
import { postThunk } from "../Store/postData/post.thunks"
import css from "../style.module.css"
import { Link } from "react-router-dom"

export const AddIngredient = () => {

    
    const dispatch = useDispatch()
    const { loading, error} = useSelector(state => state.post)


    const [igredients, setingredients] = useState({
        name:"",
        price: "",
        Description:"",
        Flavor: "",
    })

    const onChange = (e) => {
        const {name, value} = e.target 
        setingredients((prev) => ({...prev, [name]: value}))
    }
 
const onSubmit = async (e) => {
  e.preventDefault();

  const resultAction = await dispatch(postThunk({ formData: igredients, resource: "igredients" }));

  if (postThunk.fulfilled.match(resultAction)) {
    alert("თქვენი დამატება წარმატებით განხორციელდა");
    setingredients({
        name:"",
        price: "",
        Description:"",
        Flavor: "",
    });
  } else {
    alert("დაფიქსირდა შეცდომა: " + (resultAction.payload || "უცნობი შეცდომა"));
  }
};
    if(loading) return <h1> Loading ...</h1>
    if(error) return <h1>{error.message}</h1>
    
 

    return(
        <div>
            <div className={css.dashboardheader}>
                <div>
                    <h1>Manage Ingredients</h1>
                </div>
                <div>
                    <Link to={"/"}  className={`${css.buttonstyle } ${ css.collorLightBouwn}`}>Back to  Dashboard</Link>
                </div>
            </div>
            <IngredientsForm value={igredients} onChange ={onChange} onSubmit={onSubmit}/>
        </div>
    )
}