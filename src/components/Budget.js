import { useContext, useState } from "react"
import { AppContext } from "../context/AppContext";

const Budget = () => {

    const {expenses, budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const handleBudgetChange = (e) => {
        setNewBudget(e.target.value);
        if(newBudget >= 20000){
            alert(`The value cannot exeed remaining funds £ ${totalExpenses}`)
            return budget;
        }
        else if(newBudget <= totalExpenses){
            alert("You cannot reduce the budget value lower than the spending")
        }
    }


    return (
        <div className="alert alert-secondary">
            <span>Budget : £ </span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}/>
        </div>
    )
}

export default Budget;