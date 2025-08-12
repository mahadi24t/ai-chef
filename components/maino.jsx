export default function Maino() {
    return (
        <main>
            <form className="add-ingredient-form">
                <input 
                type="text"
                placeholder="e.g oregano"
                aria-label="Add Ingradient" />
                <button>Add Ingradient</button>
            </form>
        </main>
    );
}