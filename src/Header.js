import React, { useState } from 'react'
import Menu from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VieoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import "./Header.css"
import {Link} from "react-router-dom"

function Header() {

const [inputSearch, setInputSearch]=useState("")

  return (
    <div className='header'>
  <div className="header-left">
    
  <Menu />

  <Link to="/">
  <img className='header-logo'
   src='https://img.freepik.com/free-icon/youtube_318-566773.jpg' 
   alt='youtube logo' />
  </Link>
 
    
    </div>   

    <div className="header-input">

    <input onChange={e=> setInputSearch(e.target.value)} value={inputSearch} placeholder="Search" type='text' />

<Link to={`/search/${inputSearch}`}>

<SearchIcon  className='header-inputbutton' />
</Link>

    
        </div>   
   
   <div className="header-icons">
   <VieoCallIcon className='header-icon' />
    <AppsIcon  className='header-icon' />
    <NotificationsIcon  className='header-icon' />
    <AccountCircle
    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAedr_1NWFx6r3W62ZW_YV-fNakbmCP-8ZzVLW00jccEnvH804SKi6EPWUuSP8TDI-I-g&usqp=CAU' 
    alt=''
    
    
    />
   </div>
   
    </div>

  )
}

export default Header