import { useDispatch, useSelector } from "react-redux"
import { deleteThunk } from "../Store/deleteData/delete.thunks"
import { useEffect } from "react"
import { featchCoffee, featchIngredient } from "../Store/FeathData/feath.thunks"

export const useDeleteHook = (resource) =>  {
    const dispatch = useDispatch()
    const {loading, error} = useSelector(state => state.delete)

    const deleteItem = ({id, resource}) => {
        if(!id || !resource) return
        dispatch(deleteThunk({id, resource}))
    }

    useEffect(() => {
        if(!loading){
            dispatch(featchCoffee(resource))
            dispatch(featchIngredient(resource))
        }

    },[loading])

    return {deleteItem, loading, error}
}