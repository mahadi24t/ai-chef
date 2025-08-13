export default function Maino() {
    const Ingradients = [
        "Oregano",
        "Chicken",
        "Tomato",
    ]
    const ingradientsList = Ingradients.map(ingredient => 
        (<li key={ingredient}>{ingredient}</li>
     ))
     function handlesubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const newIngredient = formData.get("ingredient");
        ingradientsList.push(newIngredient);
        alert("Ingredient added"); 
    }
    return (
        <main>
            <form onClick={handlesubmit} className="add-ingredient-form">
                <input 
                type="text"
                placeholder="e.g oregano"
                aria-label="Add Ingradient" />
                <button>Add Ingradient</button>
            </form>
            <ul>
                {ingradientsList}
            </ul>
        </main>
    );
}