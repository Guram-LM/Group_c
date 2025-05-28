import { useEffect, useState } from "react"
import { IngredientsForm } from "./ingredentsForm"
import { useDispatch, useSelector } from "react-redux"
import { postThunk } from "../Store/postData/post.thunks"
import css from "../style.module.css"
import { Link } from "react-router-dom"
import { featchIngredient } from "../Store/FeathData/feath.thunks"
import { useDeleteHook } from "../hook/deleteHok"
import { LoaaderPage } from "../loading"

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
    e.preventDefault()

    const resultAction = await dispatch(postThunk({ formData: igredients, resource: "igredients" }))

    if (postThunk.fulfilled.match(resultAction)) {
        alert("თქვენი დამატება წარმატებით განხორციელდა")
        setingredients({
            name:"",
            price: "",
            Description:"",
            Flavor: "",
        });
    } else {
        alert("დაფიქსირდა შეცდომა: " + (resultAction.payload || "უცნობი შეცდომა"))
    }
    }





    const {ingredient, loading: getLoader, error:getError } = useSelector(state => state.get)

    useEffect(() => {
        dispatch(featchIngredient("igredients"))
    }, [])

    

    const {deleteItem, error:deleteError, loading:deleteLoading} = useDeleteHook("igredients")




    if(loading || getLoader || deleteLoading) return <LoaaderPage/>
    if(error) return <h1>{error.message}</h1>
    
 

    return(
        <div className={css.addIngredientSection}>
            <div className={css.dashboardheader}>
                <div>
                    <h1>Manage Ingredients</h1>
                </div>
                <div>
                    <Link to={"/"}  className={`${css.buttonstyle } ${ css.collorLightBouwn}`}>Back to  Dashboard</Link>
                </div>

            </div>


            <div className={css.tableWrapper}>
                <div className={css.tableHeader}>
                    <p className={css.cell}>ID</p>
                    <p className={css.cell}>Name</p>
                    <p className={css.cell}>Price</p>
                    <p className={css.cell}>Strength</p>
                    <p className={css.cell}>Flavor</p>
                    <p className={css.cell}>Actions</p>
                </div>

                {ingredient.map((ing) => (
                    <div key={ing.id} className={css.tableRow}>
                    <p className={css.cell}>{ing.id } </p>
                    <p className={css.cell}>{ing.name } </p>
                    <p className={css.cell}>{ing.price } GEL </p>
                    <p className={css.cell}>{ing.Description } </p>
                    <p className={css.cell}>{ing.Flavor } </p>
                    <div className={css.cell}>
                        <Link to={`/admin/ingredit/${ing.id}`} className={`${css.btn} ${css.edit}`}>Edit</Link>
                        <button onClick={() => deleteItem({id: ing.id, resource:"igredients"})}  className={`${css.btn} ${css.delete}`}>Delete</button>
                    </div>
                </div>
                ))}
                
            </div>



            <IngredientsForm value={igredients} onChange ={onChange} onSubmit={onSubmit}/>
        </div>
    )
}