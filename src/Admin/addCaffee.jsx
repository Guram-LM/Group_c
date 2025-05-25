import { useState } from "react"
import { CofeeForm } from "./cofeeForm"
import { useDispatch, useSelector } from "react-redux"
import { postThunk } from "../Store/postData/post.thunks"

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
    if(loading) return <h1> Loading ...</h1>
    if(error) return <h1>{error.message}</h1>
    
 
    return(

        <CofeeForm value={coffee} onChange ={onChange} onSubmit={onSubmit}/>
    )

   
}