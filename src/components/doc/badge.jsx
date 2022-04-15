import React from 'react'
import {BsCartCheckFill} from 'react-icons/bs'
import Showcode from './showcode'
const Badge = () => {
  return (
    <>
       <div className="txt-box">
  <div className="head2 pad-1">Badges</div>
  <div className="p1 pad-0-5">Badges are being used to display a notification count or status information</div>
  <div className="head4 pad-0-5">Example of Status Badge</div>
  <div className="p2 pad-0-5">We have 2 types of status badges that can be integrated with Avatars. You can show
    colors to show the online status of user. And to show cart or notification count, you can use number badge.
    Check code below to copy the html part as is.</div>
  <div className="darkgray-bg pad-1 border-none">
    <div className="badge-avatar badge-btm-right badge-green">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4mZWAZ6H7rMwse_xz7xZCX6a4blTjTD_eSQ&usqp=CAU" alt='' className="avatar-rnd avatar-xl" />
    </div>
    <div className="badge-avatar badge-btm-right badge-yellow">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4mZWAZ6H7rMwse_xz7xZCX6a4blTjTD_eSQ&usqp=CAU" alt='' className="avatar-rnd avatar-lrg" />
    </div>
    <div className="badge-avatar badge-btm-right badge-red">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4mZWAZ6H7rMwse_xz7xZCX6a4blTjTD_eSQ&usqp=CAU" alt='' className="avatar-rnd avatar-md" />
    </div>
    <div className="badge-avatar badge-btm-right badge-red">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4mZWAZ6H7rMwse_xz7xZCX6a4blTjTD_eSQ&usqp=CAU" alt='' className="avatar-rnd avatar-sm" />
    </div>
    <div className="badge-avatar badge-btm-right badge-red">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4mZWAZ6H7rMwse_xz7xZCX6a4blTjTD_eSQ&usqp=CAU" alt='' className="avatar-rnd avatar-xsm" />
    </div>
    <div className="badge-icn-container marg-2"><BsCartCheckFill className="material-icons badge-icon"/>
    </div>
  </div>
    <Showcode code={`<div className="badge-avatar badge-btm-right badge-green">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4mZWAZ6H7rMwse_xz7xZCX6a4blTjTD_eSQ&usqp=CAU" alt='' className="avatar-rnd avatar-xl" />
    </div>
    <div className="badge-avatar badge-btm-right badge-yellow">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4mZWAZ6H7rMwse_xz7xZCX6a4blTjTD_eSQ&usqp=CAU" alt='' className="avatar-rnd avatar-lrg" />
    </div>
    <div className="badge-avatar badge-btm-right badge-red">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4mZWAZ6H7rMwse_xz7xZCX6a4blTjTD_eSQ&usqp=CAU" alt='' className="avatar-rnd avatar-md" />
    </div>
    <div className="badge-avatar badge-btm-right badge-red">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4mZWAZ6H7rMwse_xz7xZCX6a4blTjTD_eSQ&usqp=CAU" alt='' className="avatar-rnd avatar-sm" />
    </div>
    <div className="badge-avatar badge-btm-right badge-red">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4mZWAZ6H7rMwse_xz7xZCX6a4blTjTD_eSQ&usqp=CAU" alt='' className="avatar-rnd avatar-xsm" />
    </div>
    <div className="badge-icn-container marg-2"><BsCartCheckFill className="material-icons badge-icon"/>
    </div>`}/>
  <hr />
  <div className="head4 pad-0-5">Example of Text Badge</div>
  <div className="p2 pad-0-5">We have 2 types of text badges that can be integrated with text. Badge with rounded
    edges and square edges. It will change as per the parent element's
    font-size.</div>
  <div className="box-container-flex-column darkgray-bg pad-1 border-none">
    <p className="head4">Example of text with Badge <span className="badge-txt badge-txt-cta1">New</span></p>
    <p className="p1">Example of text with Badge <span className="badge-txt-rnd badge-txt-cta2">New</span></p>
    <p className="p2">Example of text with Badge <span className="badge-txt-rnd badge-txt-green">New</span></p>
    <p className="p3">Example of text with Badge <span className="badge-txt-rnd badge-txt-yellow">New</span></p>
    <p className="small">Example of text with Badge <span className="badge-txt-rnd badge-txt-cta1">New</span></p>
    <p className="p2">Example of text with default Badge <span className="badge-txt-rnd">New</span></p>
    <p className="p2">Example of text with squared Badge <span className="badge-txt badge-txt-red">New</span></p>
  </div>
  <Showcode code={`<p className="head4">Example of text with Badge <span className="badge-txt badge-txt-cta1">New</span></p>
    <p className="p1">Example of text with Badge <span className="badge-txt-rnd badge-txt-cta2">New</span></p>
    <p className="p2">Example of text with Badge <span className="badge-txt-rnd badge-txt-green">New</span></p>
    <p className="p3">Example of text with Badge <span className="badge-txt-rnd badge-txt-yellow">New</span></p>
    <p className="small">Example of text with Badge <span className="badge-txt-rnd badge-txt-cta1">New</span></p>
    <p className="p2">Example of text with default Badge <span className="badge-txt-rnd">New</span></p>
    <p className="p2">Example of text with squared Badge <span className="badge-txt badge-txt-red">New</span></p>`}/>
  <hr />
</div>

    </>
  )
}

export default Badge