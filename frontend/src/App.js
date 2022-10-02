import Login from './Login';
import SignUp from './SignUp';
import Deposit from './Deposit';
import Profile from './Profile';
import './App.css';
import { Routes, Route} from "react-router-dom"
import {useState} from 'react'

function App() {
const [name, setName] = useState('')
const [amount, setAmount] = useState('')

const handleNameSubmit = (event) =>{
  setName(event.target.value)
}
const handleAmountSubmit = (event) =>{
  setAmount(event.target.value)
}

  return (
    <div className="App">
      <Routes>
        <Route path = '/' element={<Login/>} />
        <Route path = '/SignUp' element={<SignUp handleNameSubmit={handleNameSubmit}/>} />
        <Route path = '/deposit' element={<Deposit handleAmountSubmit={handleAmountSubmit}/>} />
        <Route path = '/profile' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
