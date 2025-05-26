
import css from "../style.module.css"


export const IngredientsForm = ({value, onChange, onSubmit}) => {
return(
        
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
    
)


}