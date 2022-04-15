import React from 'react'
import Showcode from './showcode'
import{BiSearchAlt2} from 'react-icons/bi'
const Input = () => {
  return (
    <>
        <div className="txt-box">
  <div className="head2 pad-1">Inputs</div>
  <div className="p1 pad-0-5">Inputs are used to get the value from the user. There are huge verieties of input boxes all af them are listed below, read them and fallow the code to use in your code.</div>
  <div className="head4 pad-0-5">squared Input box</div>
  <div className="p2 pad-0-5">you just need to add <span className="txt-code">input</span> in the class name to getthe
    default Input box.</div>
  <Showcode code={`<input type="text" className="input-rnd" />`}/>
  
  <hr />
  <div className="box-container-flex litegray-bg pad-1 border-none">
    <input type="text" className="input" />
  </div>
  <div className="head4 pad-0-5">Rounded Input box</div>
  <div className="p2 pad-0-5">you just need to add <span className="txt-code">input-rnd</span> in the class name to get
    the default round Input box.</div>
  <div className="box-container-flex litegray-bg pad-1 border-none">
    <input type="text" className="input-rnd" />
  </div>
  <Showcode code={`<input type="text" className="input-rnd" />`}/>
  <hr />
  <div className="head4 pad-0-5">Sizes Input box</div>
  <div className="p2 pad-0-5">you just need to add <span className="txt-code">input-sm</span> or <span className="txt-code">input-md</span> or <span className="txt-code">input-lrg</span> in the class name to get the
    different sizes of Input box.</div>
  <div className="box-container-flex-column litegray-bg pad-1 border-none">
    <input type="text" className="input-sm" />
    <input type="text" className="input-md" />
    <input type="text" className="input-lrg" />
  </div>
  <Showcode code={`<input type="text" className="input-sm" />
    <input type="text" className="input-md" />
    <input type="text" className="input-lrg" />`}/>
  <hr />
  <div className="head4 pad-0-5">Coloured Input box</div>
  <div className="p2 pad-0-5">you just need to add <span className="txt-code">input-yellow</span> or <span className="txt-code">input-green</span> or <span className="txt-code">input-red</span> or <span className="txt-code">input-blue</span> or <span className="txt-code">input-gray</span> in the class name to get
    the different color of Input box.</div>
  <div className="box-container-flex-column litegray-bg pad-1 border-none">
    <input type="text" className="input-green" />
    <input type="text" className="input-yellow" />
    <input type="text" className="input-red" />
    <input type="text" className="input-blue" />
    <input type="text" className="input-gray" />
  </div>
  <Showcode code={`<input type="text" className="input-green" />
    <input type="text" className="input-yellow" />
    <input type="text" className="input-red" />
    <input type="text" className="input-blue" />
    <input type="text" className="input-gray" />`}/>
  <hr />
  <div className="head4 pad-0-5">Input box with icon</div>
  <div className="p2 pad-0-5">Since it has two different stuffs you have to create a container tage with name as <span className="txt-code">input-icn-container</span>.In this containner you can also give class name of
    input-shape, input-size and input-color to thos properties respectively.
    Inside this container tag you have to give class name as <span className="txt-code">input</span> inside the
    input tag. And inside the icon element you have to give class name as <span className="txt-code">input-icn</span>.
  </div>
  <div className="box-container-flex-column darkgray-bg  pad-1 border-none">
    <div className="input-icn-container">
      <input type="text" className="input" />
      <BiSearchAlt2 className="input-icn "/>
    </div>
    <div className="input-icn-container input-green">
      <input type="text" className="input" />
      <BiSearchAlt2 className="input-icn "/>
    </div>
    <div className="input-icn-container input-yellow">
      <input type="text" className="input" />
      <BiSearchAlt2 className="input-icn "/>
    </div>
    <div className="input-icn-container input-red">
      <input type="text" className="input" />
      <BiSearchAlt2 className="input-icn "/>
    </div>
    <div className="input-icn-container input-blue">
      <input type="text" className="input" />
      <BiSearchAlt2 className="input-icn "/>
    </div>
    <div className="input-icn-container input-gray">
      <input type="text" className="input" />
      <BiSearchAlt2 className="input-icn "/>
    </div>
  </div>
  <Showcode code={`<div className="input-icn-container">
      <input type="text" className="input" />
      <BiSearchAlt2 className="input-icn "/>
    </div>
    <div className="input-icn-container input-green">
      <input type="text" className="input" />
      <BiSearchAlt2 className="input-icn "/>
    </div>
    <div className="input-icn-container input-yellow">
      <input type="text" className="input" />
      <BiSearchAlt2 className="input-icn "/>
    </div>
    <div className="input-icn-container input-red">
      <input type="text" className="input" />
      <BiSearchAlt2 className="input-icn "/>
    </div>
    <div className="input-icn-container input-blue">
      <input type="text" className="input" />
      <BiSearchAlt2 className="input-icn "/>
    </div>
    <div className="input-icn-container input-gray">
      <input type="text" className="input" />
      <BiSearchAlt2 className="input-icn "/>
    </div>`}/>
  <hr />
</div>

    </>
  )
}

export default Input