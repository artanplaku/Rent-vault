import React from 'react'
import image from './image.png'
import './Profile.css';
import vault from './vault.png'

const Profile = () => {
  return (
    <div className='profileContainer'>
        <div className='secondContainer'>
            <div className='thirdDiv'>
                <div>
                    <img src={image} alt='profile picture'></img>
                    <div>Jackson's</div>
                    <div className='balance'>Vault Balance</div>
                    <div>
                        <div className='vaultpic'>
                        <img src={vault}></img>
                        </div>
                        <div className='amount'>$3,000.00</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile