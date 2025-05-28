import { useDispatch, useSelector } from "react-redux"
import { IngredientsForm } from "./ingredentsForm"
import { useEffect, useState } from "react"
import { featchIngredient } from "../Store/FeathData/feath.thunks"
import { useParams } from "react-router-dom"
import css from "../style.module.css"

export const UpdataIngredient = () => {

    const { id } = useParams()
    const dispatch = useDispatch()

    const {ingredient} = useSelector(state => state.get)
    const { loading, error} = useSelector(state => state.update)

    const [ingValue, setIngValue] = useState({
            name:"",
            price: "",
            Description:"",
            Flavor: "",
    })

    useEffect(() => {
            if (ingredient.length === 0) {
                dispatch(featchIngredient("igredients"))
            }
    }, [dispatch, ingredient.length])


     useEffect(() => {
            if (ingredient.length > 0) {
                const foundingredient = ingredient.find(item => String(item.id) === String(id))
                if (foundingredient) {
                    setIngValue({
                        name: foundingredient.name || "",
                        price: foundingredient.price || "",
                        Description: foundingredient.Description || "",
                        Flavor: foundingredient.Flavor || "",
                        
                    })
                }
            }
    }, [ingredient, id])



    const onChange = (e) => {
        const { name, value } = e.target
        setIngValue(prev => ({ ...prev, [name]: value }))
    }


    const onSubmit = (e) => {
            e.preventDefault()
            const Data = {
                name: ingValue.name,
                price: Number(ingValue.price),
                Description: ingValue.Description,
                Flavor: ingValue.weight,
            }
    
            dispatch(updateDataThunk({
                id: id,
                updatedData: Data,
                resource: "igredients"
            }))
        }
    
        if (loading) return <h2>Updating...</h2>
        if (error) return <h2>Error: {error.message}</h2>


    return(
        <div className={css.updadaCoffePage}>
            <h1 className={css.adminTitleStyle}>Edit ingredient</h1>
            <IngredientsForm value={ingValue} onChange ={onChange} onSubmit={onSubmit}/>
        </div>
        
    )
}