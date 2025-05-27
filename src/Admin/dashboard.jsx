import { useDispatch, useSelector } from "react-redux"
import { featchCoffee } from "../Store/FeathData/feath.thunks"
import { useEffect } from "react"
import css from "../style.module.css"
import { Link } from "react-router-dom"
import coffeeimg from "../assets/coffee.jpeg"
import { useDeleteHook } from "../hook/deleteHok"


export const Dashboard = () => {

    const {deleteItem, error:deleteError, loading:deleteLoading} = useDeleteHook("coffee")

    const {coffee,ingredient, loading, error } = useSelector(state => state.get)
    const dispatch =useDispatch()

    useEffect(() => {
        dispatch(featchCoffee("coffee"))
    },[] )
    console.log(coffee)



    if(loading || deleteLoading) return <h1> Loading ...</h1>
    if(error) return <h1>{error.message}</h1>



    return(
        <div>

            
            <div>
                            <div className={css.dashboardheader}>
                                <div>
                                    <h1>Coffee Dashboard</h1>
                                </div>
                                <div>
                                    <Link to={"/"}  className={`${css.buttonstyle } ${ css.collorLightBouwn}`}>Add New Coffee</Link>
                                </div>
                            </div>
                            
                        </div>








<div className={css.tableWrapper}>
  <div className={css.tableHeader}>
    <p className={css.cell}>ID</p>
    <p className={css.cell}>Name</p>
    <p className={css.cell}>Origin</p>
    <p className={css.cell}>Caffeine</p>
    <p className={css.cell}>Price</p>
    <p className={css.cell}>Actions</p>
  </div>

  <div className={css.tableRow}>
    <p className={css.cell}>cof_sample1</p>
    <p className={css.cell}>Ethiopian Yirgacheffe</p>
    <p className={css.cell}>Ethiopia</p>
    <p className={css.cell}>120mg</p>
    <p className={css.cell}>$4.99</p>
    <div className={css.cell}>
      <button className={`${css.btn} ${css.view}`}>View</button>
      <button className={`${css.btn} ${css.edit}`}>Edit</button>
      <button className={`${css.btn} ${css.delete}`}>Delete</button>
    </div>
  </div>
</div>



 
  







                <div className={css.coffeeCards}>

                    {coffee.map((ingr) => (
                        <div key={ingr.id} className={css.card}> 
                            <div className={css.cardImg}>
                                <img src={ingr.data.img || coffeeimg} alt="img" />
                            </div>


                            <div className={css.cardContent}>
                                <h1 className={css.cardTitle}> {ingr.data.name}</h1>  
                                <p>{ingr.data.Description}</p>
                                <div>
                                    
                                    <p><span>Origin: </span> {ingr.data.Country}</p> 
                                    <p><span>Caffeine: </span>{ingr.data.weight}</p> 
                                    <p><span>Price: </span>{ingr.data.price}</p>
                                </div>
            
                            </div>

                            <div className={css.buttonSection}>
                                    <Link to={"/"}  className={`${css.buttonstyle } ${ css.collorLightBouwn}`}>View More</Link>
                                <div className={css.buttongap}>
                                    <Link to={`/admin/edit/${ingr.id}`}className={`${css.buttonstyle } ${ css.collorbrown}`}>Edit</Link>
                                    <Link  onClick={() => deleteItem({id: ingr.id, resource:"coffee"})}  className={`${css.buttonstyle } ${ css.collorRead}`}>Delete</Link>
                                </div>
                                
                            </div>
                            
                    </div>
                    
                    ))}
                    
                    
                </div>
     </div>
    )
}