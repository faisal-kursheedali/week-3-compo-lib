import React from 'react'
import {FiTool } from "react-icons/fi"
const Navigation = () => {
  return (
    <>
    <div className='txt-box'>
  <div className="head2">Navigation</div>
  <div className="p1">Navigation bar is used to navigate through the web apps or websites. This navigation component is responsive. It is a hamburger menu in medium and small devices</div>
  <div className="head3">Example of Navigation
  </div>
  <div className="nav" style={{margin:'8px'}}>
           <div className="nav-logo">
               <FiTool className='nav-logo-icn'/>
               build UI</div>
            <ul className="nav-list">
                <li className="nav-item">Home</li>
                <li className="nav-item">Document</li>
                
                {/* <li className="nav-item"></li> */}
            </ul>
        </div>
  <div className="p2">Navigation is broken in 4 parts:</div>
  <ul className="list-rnd-dark">
    <li>Burger section- to show hamburger in M,S,XS devices, it will be hidden on L, XL devices</li>
    <li>Brand logo- It will be displayed in L,XL devices and hidden on M,S,XS devices</li>
    <li>Brand title- It will be displayed in M,S,XS devices and hidden on L,XL devices</li>
    <li>Navigation links- It will be displayed in L,XL device, and inside hamburger menu in M,S,XS devices<ul className="list-sqr">You can include Brand logo/Avatar goes in 1st "li" of nav-links, it will be displayed inside hamburger menu in M,S,XS devices, hidden on L,XL devices</ul> </li>
    <li>Search bar</li>
    <li>Section to show icons and text below it on nav bar, text will get hidden in M,S,XS devices. If you want to hide any of the icon, add hide-profile-mobile style for that li element</li>
  </ul>
</div>

    </>
  )
}

export default Navigation