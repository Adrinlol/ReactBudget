// Component that is responsible for the list
import React from 'react';
import Item from './ExpenseItem';
import {MdDelete} from 'react-icons/md';

const ExpenseList = ({ expenses, handleEdit, 
        handleDelete, clearItems }) => {
    return (
        <>
            <ul className="list">
                {expenses.map(expense => {
                    // Since i'm rendering the list, I need to add key prop
                    return <Item key={expense.id} expense={expense} handleDelete={handleDelete} handleEdit={handleEdit} />;
                })}
            </ul>
            {/* Button that will clear the expenses if there  */}
            {expenses.length > 0 && (
            <button className="btn" onClick={clearItems}>
                Clear expenses
                <MdDelete className="btn-icon" />
            </button>
            )}
        </>
    );
};

export default ExpenseList;
