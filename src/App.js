// useState is a function that returns array with 2 values
import React, {useState} from 'react';
import './App.css';
// Dynamic, unique id 
import uuid from 'uuid/v4';

import ExpensList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';
import Alert from './components/Alert';

const initialExpenses = [
  {id:uuid(),charge:"rent",amount:1600},
  {id:uuid(),charge:"ice-cream",amount:200},
  {id:uuid(),charge:"hookers",amount:1200}
];

function App() {
  // *** State values ***
  // All expenses, add expense
  const [expenses, setExpenses] = useState(initialExpenses);
  // Single expense - initial value = empty
  const [charge, setCharge] = useState(' ');
  // Single amount - initial value = empty
  const [amount, setAmount] = useState(' ');
  // alert that is false from the start
  const [alert, setAlert] = useState({show:false});

  // *** Functionality ***
  // Passing the event object
  const handleCharge = e => {
    // Value is whatever we type in this input
    // Changing the value by passing new value
    setCharge(e.target.value)
  }

  // Handle Amount
  const handleAmount = e => {
    // Value is whatever we type in this input
    // Changing the value by passing new value
    setAmount(e.target.value)
  }

  // Handle alert
    const handleAlert = ({type,text}) => {
      // Change the state of the show to true 
      setAlert({show:true});
      // Display the alert back to false in 5 seconds
      setTimeout(() => {
        setAlert({show: false})
      },5000)
  }
  // Handle submit
  const handleSubmit = e => {
    // Prevent default
    e.preventDefault();

    // If the charge is not an empty string and amount is > 0
    if(charge !== '' && amount > 0 ) {
      // This is same as writing charge=charge amount=amount
      const singleExpense = {id:uuid(), charge, amount};
      // Spread operator
      setExpenses([...expenses,singleExpense]);
      // Reset the input back to the empty strings
      setCharge('');
      setAmount('');
    }
    else {
      // Handle alert called
    }
  }

  return (
    <>
      {/* Only display the alert if the show is true */}
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <Alert />
      <h1>Budget Calculator</h1>
      <main className="App"> 
        <ExpenseForm 
          charge={charge} 
          amount={amount} 
          handleAmount={handleAmount}
          handleCharge={handleCharge}
          handleSubmit={handleSubmit}
        />
        <ExpensList expenses={expenses}/>
      </main>
      <h1>
        total spending: <span className="total">
          ${expenses.reduce((acc,curr)=> {
            // ParseInt so the value is only numbers
            return (acc += parseInt(curr.amount));
          },0)}
          </span>
      </h1>
    </>
  );
}

export default App;
