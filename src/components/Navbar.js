import React, {useState} from 'react'
import logo from '../assets/druma-mini.webp'
import '../css/navbar.css'

const Navbar = () => {

  const [bar, setBar] = useState(false);

  const [popNavStyle, setPopNavStyle] = useState({
    position: "fixed",
    top: "-250px"
  })

  const handleOpenPopMenu = () => {
    setBar(true);
    setPopNavStyle({
      ...popNavStyle,
      top: "0px"
    })
  }

  const handleClosePopBtn = () => {
    setBar(false);
    setPopNavStyle({
      ...popNavStyle,
      top: "-250px"
    })
  }

  return (
    <>
      <div id='pop' className='pop-nav' style={popNavStyle}>
        <button id='cut' onClick={handleClosePopBtn}><i class="fa-solid fa-xmark"></i></button>
        <br />
        <div id='pop-links'>
          <div><a href='#hom' onClick={handleClosePopBtn}>Home</a></div>
          <div><a href='#abo' onClick={handleClosePopBtn}>About</a></div>
          <div><a href='#serv' onClick={handleClosePopBtn}>Services</a></div>
          <div><a href='#foot' onClick={handleClosePopBtn}>Contact</a></div>
        </div>
      </div>

      <div id='navbar'>
        <div id='logo'><img src={logo}></img></div>
        <div id='links'>
          <ul>
            <li><a href='#hom'>Home</a></li>
            <li><a href='#abo'>About</a></li>
            <li><a href='#serv'>Services</a></li>
            <li><a href='#foot'>Contact</a></li>
          </ul>
        </div>
        <div hidden={bar} id='menu-icon' onClick={handleOpenPopMenu}><i class="fa-solid fa-bars"></i></div>
      </div>
    </>
  )
}

export default Navbar