import { useState } from "react"
import { CofeeForm } from "./cofeeForm"
import { useDispatch, useSelector } from "react-redux"
import { postThunk } from "../Store/postData/post.thunks"
import css from "../style.module.css"
import { Link } from "react-router-dom"
import { LoaaderPage } from "../loading"

export const AddCaffee = () => {

const dispatch = useDispatch()
const { loading, error} = useSelector(state => state.post)


const [coffee, setcoffee] = useState({
    name:"",
    img: "",
    price: "",
    Country:"",
    Description:"",
    weight:"",
    
})
 const onChange = (e) => {
    const {name, value} = e.target 
    setcoffee((prev) => ({...prev, [name]: value}))

 }
 

 const onSubmit = async (e) => {
  e.preventDefault();

  const resultAction = await dispatch(postThunk({ formData: coffee, resource: "coffee" }));

  if (postThunk.fulfilled.match(resultAction)) {
    alert("თქვენი დამატება წარმატებით განხორციელდა");
    setcoffee({
      name: "",
      img: "",
      price: "",
      Country: "",
      Description: "",
      weight: "",
    });
  } else {
    alert("დაფიქსირდა შეცდომა: " + (resultAction.payload || "უცნობი შეცდომა"));
  }
};
    if(loading) return <LoaaderPage/>
    if(error) return <h1>{error.message}</h1>
    
 
    return(
      <div className={css.addCoffeeSection}>
            <div className={css.dashboardheader}>
                <div>
                    <h1>Add New Coffee</h1>
                </div>
                <div>
                    <Link to={"/"}  className={`${css.buttonstyle } ${ css.collorLightBouwn}`}>Back to  Dashboard</Link>
                </div>
            </div>
                 <CofeeForm value={coffee} onChange ={onChange} onSubmit={onSubmit}/>
        </div>

   

    )

   
}