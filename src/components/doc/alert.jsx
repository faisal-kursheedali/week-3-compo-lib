import React from 'react'
import Showcode from './showcode'
import{AiFillCloseCircle,AiFillBug} from'react-icons/ai'
import{GoVerified} from'react-icons/go'
import{BiErrorAlt} from'react-icons/bi'
const Alert = () => {
  return (
    <>
    
    <div className="txt-box">
  <div className="head1">Alert</div>
  <div className="p1">Alerts are used to attract user's attention for important information without interrupting the
    user's flow.</div>
  <div className="head3">Example of Alert Bar without close button</div>
  <div className="p2">Alerts are available in 5 types- success alert, error alert, warning alert, primary alert,
    secondary alert.All types of alert have there own colors, so to use it give the class name with color like
    <span className="txt-code">alert-green</span>
  </div>
  <div className="head3">Types of alert :</div>
  <ul className="p2">
    <li><span className="txt-code p3">alert-green</span>
      - success alert</li>
    <li><span className="txt-code p3">alert-red</span>
      - danger alert</li>
    <li><span className="txt-code p3">alert-yellow</span>
      - warning alert</li>
    <li><span className="txt-code p3">alert-blue</span>
      - primary alert</li>
    <li><span className="txt-code p3">alert-liteblack</span>
      - secondary alert</li>
    <li><span className="txt-code p3">alert-liteblue</span>
      - info alert</li>
  </ul>
  <div className="box-center darkgray-bg">
    <div className="alert-green">hello</div>
    <div className="alert-red">hello</div>
    <div className="alert-yellow">hello</div>
    <div className="alert-blue">hello</div>
    <div className="alert-liteblue">hello</div>
    <div className="alert-liteblack">hello</div>
    <div className="alert">hello</div>
  </div>
  <div className="head3">How to use :</div>
  <div className="p2">it is very esy to use you just need to put any one of the class name in the container tag
    like<span className="txt-code">alert-green</span>. If you dont't want any color on your alert then you can go
    with<span className="txt-code">alert</span> on class name which have default colors in alert.
    <Showcode code={`
    <<div className="alert-green">hello</div>
    <div className="alert-red">hello</div>
    <div className="alert-yellow">hello</div>
    <div className="alert-blue">hello</div>
    <div className="alert-liteblue">hello</div>
    <div className="alert-liteblack">hello</div>
    <div className="alert">hello</div>`}/>
    <hr />
    <div className="head3">With icons : </div>
    <div className="box-center darkgray-bg">
      <div className="alert alert-red"><AiFillBug className='alert-icn' />hello</div>
      <div className="alert alert-yellow">
      <BiErrorAlt className='alert-icn'/> hello
      </div>
      <div className="alert alert-green">
      <GoVerified className='alert-icn'/> hello
      </div>
    </div>
    <div className="head3">How to use :</div>
      <div className="p2">Here I have ise react icons so 1st import react icon that You use here and add a class name to it as <span className="txt-code">alert-icn</span>.</div>

    <Showcode code={`<div className="alert alert-red"><AiFillBug className='alert-icn' />hello</div>
      <div className="alert alert-yellow">
      <BiErrorAlt className='alert-icn'/> hello
      </div>
      <div className="alert alert-green">
      <GoVerified className='alert-icn'/> hello
      </div>`}/>
    <hr />
  </div>
  <div className="head3">Alert with close button</div>
  <div className="box-center darkgray-bg">
    <div className="alert-green"><GoVerified className='alert-icn'/> hello<AiFillCloseCircle className='alert-close'/></div>
    <div className="alert-red"><AiFillBug className='alert-icn' />hello<AiFillCloseCircle className='alert-close'/></div>
  </div>
  <div className="head3">How to use :</div>
  <div className="p2">Here I have ise react icons so 1st import react icon that You use here and add a class name to it as <span className="txt-code">alert-icn</span>. And for closer icon or exit icon give class name as <span className="txt-code">alert-close</span> </div>
  <Showcode code={`<div className="alert-green"><GoVerified className='alert-icn'/> hello<AiFillCloseCircle className='alert-close'/></div>
    <div className="alert-red"><AiFillBug className='alert-icn' />hello<AiFillCloseCircle className='alert-close'/></div>
  </div>>`}/>
  <hr />
</div>


    </>
  )
}

export default Alert