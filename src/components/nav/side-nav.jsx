import React from 'react'



import {Install,Avatar,Image,Alert,Button,Card,Text,List} from "../doc/import-doc"



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

         <li className="sidenav-item" onClick={()=>setSelect(<Card/>)} style={{borderBlockColor:'var(--cta1)'}}>Card</li>
         <li className="sidenav-item" onClick={()=>setSelect(<List/>)} style={{borderBlockColor:'var(--cta1)'}}>List</li>
         <li className="sidenav-item" onClick={()=>setSelect(<Text/>)} style={{borderBlockColor:'var(--cta1)'}}>Text</li>


         <li className="sidenav-item" onClick={()=>setSelect(<Button/>)} style={{borderBlockColor:'var(--cta1)'}}>Button</li>


         <li className="sidenav-item" onClick={()=>setSelect(<Alert/>)} style={{borderBlockColor:'var(--cta1)'}}>Alert</li>

         <li className="sidenav-item" onClick={()=>setSelect(<Image/>)} style={{borderBlockColor:'var(--cta1)'}}>Image</li>



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
