

// import React, { useState } from 'react';
// import './main.css';

// const Main = () => {
//   const [expenses, setExpenses] = useState([]);
//   const [description, setDescription] = useState('');
//   const [amount, setAmount] = useState('');
//   const [totalExpense, setTotalExpense] = useState(0);
//   const maxExpenseLimit = 1000; // Set your maximum expense limit here

//   const addExpense = () => {
//     if (description.trim() === '' || isNaN(amount) || amount <= 0) {
//       alert('Please enter a valid description and amount.');
//       return;
//     }

//     const newExpense = {
//       description: description,
//       amount: parseFloat(amount),
//     };

//     setExpenses([...expenses, newExpense]);
//     setTotalExpense(totalExpense + parseFloat(amount));
//     setDescription('');
//     setAmount('');
//   };

//   const checkExpenseLimit = () => {
//     if (totalExpense > maxExpenseLimit) {
//       alert('OOPS! Looks like expenses exceed this Month limit!');
//     } else {
//       alert(`Great!! you are  adding up to your savings . Total Expenses: ₹${totalExpense.toFixed(2)}`);
//     }
//   };

//   return (
//     <div className="main-container">
//       <h1>Expense Tracker</h1>
//       <div className="expense-input">
//         <label>Description:</label>
//         <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
//         <label>Amount:</label>
//         <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
//         <button onClick={addExpense}>Add Expense</button>
//       </div>
//       <div className="expense-list">
//         <h2>Expenses:</h2>
//         <ul>
//           {expenses.map((expense, index) => (
//             <li key={index}>
//               {expense.description}: ₹{expense.amount.toFixed(2)} {/* Display amount in Indian Rupees */}
//             </li>
//           ))}
//         </ul>
//         <p>Total Expenses: ₹{totalExpense.toFixed(2)}</p> {/* Display total in Indian Rupees */}
//         <button onClick={checkExpenseLimit}>Check Expense Limit</button>
//       </div>
//     </div>
//   );
// };

// export default Main;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './main.css';

const Main = () => {
  const navigate = useNavigate();
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [totalExpense, setTotalExpense] = useState(0);
  const maxExpenseLimit = 1000; // Set your maximum expense limit here

  const addExpense = () => {
    if (description.trim() === '' || isNaN(amount) || amount <= 0) {
      alert('Please enter a valid description and amount.');
      return;
    }

    const newExpense = {
      description: description,
      amount: parseFloat(amount),
    };

    setExpenses([...expenses, newExpense]);
    setTotalExpense(totalExpense + parseFloat(amount));
    setDescription('');
    setAmount('');
  };

  const checkExpenseLimit = () => {
    if (totalExpense > maxExpenseLimit) {
      alert('OOPS! Looks like expenses exceed this Month limit!');
    } else {
      alert(`Great!! you are adding up to your savings. Total Expenses: ₹${totalExpense.toFixed(2)}`);
      // Navigate to /main when the "Get Started" button is clicked
      navigate('/main');
    }
  };

  return (
    <div className="main-container">
      <h1>Expense Tracker</h1>
      <div className="expense-input">
        <label>Description:</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        <label>Amount:</label>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        <button onClick={addExpense}>Add Expense</button>
      </div>
      <div className="expense-list">
        <h2>Expenses:</h2>
        <ul>
          {expenses.map((expense, index) => (
            <li key={index}>
              {expense.description}: ₹{expense.amount.toFixed(2)} {/* Display amount in Indian Rupees */}
            </li>
          ))}
        </ul>
        <p>Total Expenses: ₹{totalExpense.toFixed(2)}</p> {/* Display total in Indian Rupees */}
        <button onClick={checkExpenseLimit}>Check</button>
      </div>
    </div>
  );
};

export default Main;

