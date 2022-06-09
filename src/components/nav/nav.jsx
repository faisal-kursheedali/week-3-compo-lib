import React, { useState } from 'react'
// import "../css/import.css";
// import "./nav.css";
// import{Link} from 'react-router-dom'
import { FiTool } from 'react-icons/fi'
import { BsFillSunFill,BsFillMoonStarsFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'


const Nav = () => {
  const [darkmode, setDarkmode] = useState(false)
  return (
    <>
      <div className="nav">
        <div className="nav-logo">
          <Link className='nav-link' to="/">
            <FiTool className='nav-logo-icn' />
            build UI</Link></div>
        <ul className="nav-list">
          <Link className='nav-link' to="/"><li className="nav-item">Home</li></Link>
          <Link className='nav-link' to="/doc"><li className="nav-item">Document</li></Link>
          {/* <li className="nav-item"><a href="https://github.com/faisal-kursheedali/week-3-compo-lib" className='nav-link' ><BsGithub/></a></li> */}
          {
            darkmode ? <li className="nav-item" onClick={() => {
              setDarkmode(false)
              document.body.style.backgroundColor = `var(--white-bg)`
              document.body.style.color = `var(--black-txt)`
            }}><BsFillSunFill style={{color:"orange"}}/></li> : <li className="nav-item" onClick={() => {
              setDarkmode(true)
              document.body.style.backgroundColor = `var(--dark-bg)`
              document.body.style.color = `var(--white-txt)`
            }}><BsFillMoonStarsFill style={{color:"white"}} /></li>
          }

          {/* <li className="nav-item"></li> */}
        </ul>
      </div>
    </>
  )
}

export default Nav
