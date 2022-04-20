import React,{useState} from 'react';


import{Avatar,Install,Image,Alert,Button}from  '../doc/import-doc'


import Footer from '../footer';
import { Usenavcontext } from './nav-context';

const Navmenu= () => {
    const{select,setSelect}=Usenavcontext()
const[menuClick,setMenuClick]=useState(false)
  return (
    <>
        <div className="navmenu-btn"onClick={()=>setMenuClick(!menuClick)}>menu</div>

        {
          menuClick?(<><div className="navmenu">
                <ul className="navmenu-list">
                    <li className="navmenu-item" onClick={()=>{ setMenuClick(!menuClick) }} >Back to doc</li>
                    
                    <li className="navmenu-item" onClick={()=>{setSelect(<Install/>); setMenuClick(!menuClick) }} >Installation</li>
                    <li className="navmenu-item" onClick={()=>{setSelect(<Avatar/>); setMenuClick(!menuClick) }} >Avatar</li>

                    <li className="navmenu-item" onClick={()=>{setSelect(<Button/>); setMenuClick(!menuClick) }} >Button</li>
                    


                    <li className="navmenu-item" onClick={()=>{setSelect(<Alert/>); setMenuClick(!menuClick) }} >Alert</li>
                    <li className="navmenu-item" onClick={()=>{setSelect(<Image/>); setMenuClick(!menuClick) }} >Image</li>


                    <li className="navmenu-item" onClick={()=>{ setMenuClick(!menuClick) }} >Back to doc</li>
                </ul>
            </div>
            <div className="container-for-navmenu">
            <div className="content-of-navmenu" style={{filter:'blur(3px)'}}>
                {
                  select
                }
                <Footer/>
          </div>
          </div>
          </>):
            <div className="container-for-navmenu">
          <div className="content-of-navmenu" >{
            select
            
        }<Footer/></div></div>
        }
        
        
  
    </>
  )
}

export default Navmenu
