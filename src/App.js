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
  const [expenses, setExpenses] = useState(initialExpenses);

  return (
    <>
      <Alert></Alert>
      <ExpenseForm />
      <ExpensList />
    </>
  );
}

export default App;
