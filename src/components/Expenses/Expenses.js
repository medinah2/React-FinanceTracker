import "./Expenses.css"
import Card from "../UI/Card"
import ExpensesFilter from "./ExpensesFilter";
import React, {useState} from "react";
import ExpenseList from "./ExpensesList"
import ExpensesChart from "./ExpensesChart"

function Expenses(props) {

    const [filteredYear, setFilteredYear] =useState('2021');
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredList = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return(
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            <ExpensesChart expenses={filteredList}/>
            <ExpenseList items={filteredList}/>
        </Card>
    );
}

export default Expenses;
