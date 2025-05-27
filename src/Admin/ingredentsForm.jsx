
import css from "../style.module.css"


export const IngredientsForm = ({value, onChange, onSubmit}) => {
    
return(
        
  <div>
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
           <form className={css.formsecton} onSubmit={onSubmit}>
                <div className={css.formSection1}>
                <label>Ingredient Name
                <input type="text"name="name" value={value.name} onChange={onChange}/>
                </label>

                <label>Price
                <input type="number" name="price" value={value.price} onChange={onChange}/>
                </label>
                </div>
                

                <div className={css.formSection2}>
                <label>Description
                <input type="text" name="Description" value={value.Description} onChange={onChange}/>
                </label>
                </div>
                

                <div className={css.formSection1}>
                <label > Strength: 
                <select className={css.selectstyle} >
                <option value="light">Low</option>
                <option value="medium">Meium</option>
                <option value="hard">High</option>
                </select>
                </label>

                <label>Flavor
                <input type="text" name="Flavor" value={value.Flavor} onChange={onChange}/>
                </label>
                </div> 
                            
                
                
            <button className={`${css.buttonstyle } ${ css.collorbrown} ${ css.manage}`}>Manage Ingredients</button>
           </form>

        </div>   
    
)


}