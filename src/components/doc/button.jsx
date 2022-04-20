import React from 'react'
import Showcode from './showcode'
import {MdPowerSettingsNew} from 'react-icons/md'
const Button = () => {
  return (
    <>
        <div className="txt-box">
  <div className="head2 pad-1">Buttons</div>
  <div className="p1 pad-0-5">Buttons are also called as call to action. We have range of buttons and their states.
    You may
    use a tag or button element, you need to add respective classes, and you are good to go.</div>
  <div className="head4 pad-0-5">Example of Primary Button Styles</div>
  <div className="p2 pad-0-5">Whenever you want your user to click on a link or button, use primary style buttons.
  </div>
  <div className="box-container-flex darkgray-bg border-none">
    <button className="btn">click</button>
    <button className="btn-outline">
    <MdPowerSettingsNew className="btn-outline-icn"/>
        click</button>
    <a href className="link-underlined pad-1"> hii there <MdPowerSettingsNew className='btn-icn'/></a>
    
      
    <button className="btn"><MdPowerSettingsNew className=""/>
        click</button>
  </div>
<Showcode code={`<button className="btn">click</button>
    <button className="btn-outline">
    <MdPowerSettingsNew className="btn-outline-icn"/>
        click</button>
    <a href className="link-underlined pad-1"> hii there <MdPowerSettingsNew className='btn-icn'/></a>
    
      
    <button className="btn"><MdPowerSettingsNew className=""/>
        click</button>`}/>
  <hr />
  <div className="head4 pad-0-5 ">Example of Secondary Button Styles</div>
  <div className="p2 pad-0-5">If you want user not to pay attention to buttons then use Secondary buttons.You just
    need to put <span className="txt-code">btn-sec</span> after giving the type of button class name in your tag.You
    can
    directly
    copy below html code and use it in your app.</div>
  <div className="box-container-flex border-darkgray">
    <button className="btn-sec btn">click</button>
    <button className="btn-outline-sec btn-outline">click</button>
    <a href className="link-underlined link-sec pad-1"> hii there<MdPowerSettingsNew  className="pad-1  btn-icn-sec"/></a>
    <button className="btn-sec btn"><MdPowerSettingsNew  className=""/>
        click</button>
  </div>
  <Showcode code={`<button className="btn-sec btn">click</button>
    <button className="btn-outline-sec btn-outline">click</button>
    <a href className="link-underlined link-sec pad-1"> hii there<MdPowerSettingsNew  className="pad-1  btn-icn-sec"/></a>
    <button className="btn-sec btn"><MdPowerSettingsNew  className=""/>
        click</button>`}/>
  <hr />
  <div className="head4 pad-0-5">Button with Animations</div>
  <div className="p2 pad0-5">You can add some small animation on button. you just need to add <span className="txt-code">btn-fancy</span> for fancy primary button, <span className="txt-code">btn-outline-fancy</span> for primary outlined button, <span className="txt-code">link-fancy</span> for fancy link.</div>
  <div className="box-container-flex border-none darkgray-bg">
    <button className="btn-fancy">click</button>
    <button className="btn-outline-fancy">click</button>
    <div className="pad-1"><a href className=" link-fancy"> hii there</a></div>
  </div>
  <Showcode code={`<button className="btn-fancy">click</button>
    <button className="btn-outline-fancy">click</button>
    <div className="pad-1"><a href className=" link-fancy"> hii there</a></div>`}/>
  <hr />
</div>

    </>
  )
}

export default Button