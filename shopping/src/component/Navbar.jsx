import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { Navigate, useNavigate } from 'react-router';


const Navbar = () => {
    const menuList = ["WOMAN", "MAN", "THE NEW", "KIDS", "TRAVEL"]
    const navigate = useNavigate();
    const goToLogin =()=>{
        navigate("/login")
    }
  return (
    <div>
        <div>
            <div className='login-button' onClick={goToLogin}>
                <FontAwesomeIcon icon = {faUser} />
                <div>Login</div>
            </div>
        </div>
        <div className="logo">
            <img width="130px" src='https://images.icon-icons.com/2845/PNG/512/zara_logo_icon_181327.png' />
        </div>
        <div className='menu-area'>
            <ul className='menu-list'>
                {menuList.map((menu)=>(
                    <li>{menu}</li>
                ))}
            </ul>
            <div className='search-area'>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input className="search" src= "text" placeholder = "제품검색"/>
            </div>
        </div>
    </div>
  )
}

export default Navbar