import "./Expenses.css"
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card"
import ExpensesFilter from "./ExpensesFilter";
import React, {useState} from "react";

function Expenses({expenseList}) {

    const [filteredYear, setFilteredYear] =useState('2021');
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    return(
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
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