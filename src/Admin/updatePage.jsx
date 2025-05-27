import { useDispatch, useSelector } from "react-redux"
import { CofeeForm } from "./cofeeForm"
import { useEffect, useState } from "react"
import { updateDataThunk } from "../Store/update/updataThunks"
import { useParams } from "react-router-dom"
import { featchCoffee } from "../Store/FeathData/feath.thunks"

export const UpdatePage = () => {
    const { id } = useParams()
    const dispatch = useDispatch()

    const { loading, error, updatedItem } = useSelector(state => state.update)
    const { coffee } = useSelector(state => state.get)

    const [value, setValue] = useState({
        name: "",
        img: "",
        price: "",
        Country: "",
        Description: "",
        weight: "",
    })

    
    useEffect(() => {
        if (coffee.length === 0) {
            dispatch(featchCoffee("coffee"))
        }
    }, [dispatch, coffee.length])

  
    useEffect(() => {
        if (coffee.length > 0) {
            const foundCoffee = coffee.find(item => String(item.id) === String(id))
            if (foundCoffee) {
                setValue({
                    name: foundCoffee.name || "",
                    img: foundCoffee.img || "",
                    price: foundCoffee.price || "",
                    Country: foundCoffee.Country || "",
                    Description: foundCoffee.Description || "",
                    weight: foundCoffee.weight || "",
                })
            }
        }
    }, [coffee, id])

    const onChange = (e) => {
        const { name, value } = e.target
        setValue(prev => ({ ...prev, [name]: value }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const Data = {
            name: value.name,
            img: value.img,
            price: Number(value.price),
            Country: value.Country,
            Description: value.Description,
            weight: Number(value.weight),
        }

        dispatch(updateDataThunk({
            id: id,
            updatedData: Data,
            resource: "coffee"
        }))
    }

    if (loading) return <h2>Updating...</h2>
    if (error) return <h2>Error: {error.message}</h2>

    return (
        <div>
            <h1>Edit Coffee</h1>
            <CofeeForm value={value} onChange={onChange} onSubmit={onSubmit} />
        </div>
    )
}