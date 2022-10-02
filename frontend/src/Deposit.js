import React, {useState} from 'react'
import './Deposit.css'
import { Link } from 'react-router-dom'
import Profile from './Profile'




function Deposit() {
    const [amount, setAmount] = useState('')

    const handleSubmit = (event) =>{
        setAmount(event.target.value)
      }
    

  return (
    <div className='container'>
        <div className='smallerContainer'>
            <div>
                Deposit amount
            </div>
            <div>
            {/* <label for="price" class="block text-sm font-medium text-gray-700">Price</label> */}
            <div class="relative mt-1 rounded-md shadow-sm">
    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
      <span class="text-gray-500 sm:text-sm">$</span>
    </div>
    <input type="text" name="price" id="price" class="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="0.00" onChange={handleSubmit}/>
  
            </div>
            </div>
            <div>
                Deposit from  <span className='bankAccount'>TD CHECKINGS (..0628)</span>
            </div>
            <div>Deposit will be processedby 11PM ET and will be reflected in your vault by the day

            </div>
            <Link to='/profile'>
            <button className='button'>Continue</button>
            </Link>
            
        </div>
    </div>
  )
}

export default Deposit

