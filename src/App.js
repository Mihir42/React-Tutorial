import './App.css';
import Employee from './components/Employee';
import { useState } from 'react';

function App() {
  const [role, setRole] = useState('dev');
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
      <>
      <input type = 'text' onChange = {(e) => {
        console.log(e.target.value);
        setRole(e.target.value);
      }}
      />
          <Employee name = 'Luigi' role = 'Plumber' />
          <Employee name = 'Mario' role = {role}/>
          <Employee name = 'Yoshi' />
      </>
      ) : (
        <p>You cannot see the employees</p>
      ) }
    </div>
  );
}

export default App;
