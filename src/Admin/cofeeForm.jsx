
import css from "../style.module.css"


export const CofeeForm = ({value, onChange, onSubmit}) => {
return(
        
           <form className={css.formsecton} onSubmit={onSubmit}>
                <div className={css.formSection1}>
                <label>Coffee Name
                <input type="text"name="name" value={value.name} onChange={onChange}/>
                </label>
                <label> Country of Origin
                <input type="text"name="Country" value={value.Country} onChange={onChange}/>
                </label>
                </div>
                

                <div className={css.formSection2}>
                <label>Description
                <input type="text" name="Description" value={value.Description} onChange={onChange}/>
                </label>
                </div>
                
                <div className={css.formSection3}>
                <label>Image URL
                <input type="text"placeholder=" Image URL" name="img" value={value.img} onChange={onChange}/>
                </label>
                <label>Price
                <input type="number" name="price" value={value.price} onChange={onChange}/>
                </label>
                </div>
                
                <div className={css.formSection4}>
                <label> Caffeine(mg)
                <input type="number" name="weight" value={value.weight} onChange={onChange}/>
                </label>
                </div>
                <label>
                <div className={css.ingredientsSection}>

                </div>
                Hold Ctrl (or Cmd) to select multiple ingredients
                </label>
                
            <button className={`${css.buttonstyle } ${ css.collorbrown}`}>Add Coffee</button>
           </form>
    
)


}