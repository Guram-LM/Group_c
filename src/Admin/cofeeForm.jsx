export const CofeeForm = ({value, onChange, onSubmit}) => {
return(
        <div>
           <form onSubmit={onSubmit}>
            <input type="text"placeholder="Coffee Name"name="name" value={value.name} onChange={onChange}/>
            <input type="number"placeholder=" Price" name="price" value={value.price} onChange={onChange}/>
            <input type="text"placeholder=" Country of Origin"name="Country" value={value.Country} onChange={onChange}/>
            <input type="text"placeholder=" Description" name="Description" value={value.Description} onChange={onChange}/>
            <input type="text"placeholder=" Image URL" name="img" value={value.img} onChange={onChange}/>
            <input type="number"placeholder=" Caffeine(mg)" name="weight" value={value.weight} onChange={onChange}/>
            <button>Add Coffee</button>
           </form>
        </div>
)


}