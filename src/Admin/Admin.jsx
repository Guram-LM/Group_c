import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { featchCoffee, featchIngredient } from "../Store/FeathData/feath.thunks"

export const Admin = () => {

    const dispatch = useDispatch()
    const {coffee, ingredient, loading, error} = useSelector(state => state.coffee)

    useEffect(() => {
        dispatch(featchCoffee("coffee"))
        dispatch(featchIngredient("ingredient"))
    }, [dispatch])

    console.log(coffee)
    console.log(ingredient)


    if(loading) return <h1>loading ......</h1>
    if(error) return <h1>{error.mesსage} </h1>
    return(
        <div>
            <h1>this is the Admin Page</h1>
        </div>
    )
}