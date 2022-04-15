import React from 'react'
import {Install,Avatar,Badge,Input} from "../doc/import-doc"
import Footer from '../footer'
import { Usenavcontext } from './nav-context'

const Sidenav= () => {
  const{select,setSelect}=Usenavcontext()
  return (
    <>
    <div className="container-for-sidenav">
    <div className="sidenav">
       <ul className="sidenav-list">
         <li className="sidenav-item" onClick={()=>setSelect(Install)} style={{borderBlockColor:'var(--cta1)'}}>Installation</li>
         <li className="sidenav-item" onClick={()=>setSelect(<Avatar/>)} style={{borderBlockColor:'var(--cta1)'}}>Avatar</li>
         <li className="sidenav-item" onClick={()=>setSelect(<Badge/>)} style={{borderBlockColor:'var(--cta1)'}}>Badge</li>
         <li className="sidenav-item" onClick={()=>setSelect(<Input/>)} style={{borderBlockColor:'var(--cta1)'}}>Input</li>
       </ul>

        
      </div>
      <div className="content-of-sidenav">
        {
          select
        }
        <Footer/>
      </div>
      </div>
    </>
  )
}

export default Sidenav
