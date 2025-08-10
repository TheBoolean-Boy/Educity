import './Navbar.css'
import logo from '../../assets/logo.png'
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png';

function Navbar(){
  const [sticky, setSticky] = useState(false);
  const [mobilemenu, setMobileMenu] = useState(false);

  useEffect( () => {
    window.addEventListener( 'scroll', () => {
    window.scrollY > 50 ? setSticky(true) : setSticky(false);
  })
  }, [])

  const toggle = () => {
    setMobileMenu(!mobilemenu);
  }
  return(
    <nav className={`container ${sticky?'dark-nav': null } `}>
    <img src={logo} alt="" className='logo' />
    <ul className= {mobilemenu? '': 'hide-mobile-menu'}>
      <li><Link to='hero' smooth={true} offset={-50} duration={500}>Home</Link></li>
      <li><Link to='program' smooth={true} offset={-270} duration={500}>Program</Link></li>
      <li><Link to='about' smooth={true} offset={-170} duration={500}>About</Link></li>
      <li><Link to='campus' smooth={true} offset={-220} duration={500}>Campus</Link></li>
      <li><Link to='testimonials' smooth={true} offset={-280} duration={500}>Testimonials</Link></li>
      <li><Link to='contact' smooth={true} offset={0} duration={500} className='btn'>Contact Us</Link></li>
    </ul>
    <img src={menu_icon} className='menu-icon' onClick={toggle} />
    </nav>
  )
}

export default Navbar;