import "./Expenses.css"
import ExpenseItem from "./ExpenseItem";
import Card from "./Card"

function Expenses({expenseList}) {
    return(
        <Card className="expenses">
            {
                expenseList.map((user, i) =>{
                    return(
                        <ExpenseItem title={expenseList[i].title} amount={expenseList[i].amount} date={expenseList[i].date}/>
                    );
                })
            }
        </Card>
    );
}

export default Expenses;