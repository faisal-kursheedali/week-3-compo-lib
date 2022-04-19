import React from 'react'
import {AiFillCloseCircle}from 'react-icons/ai'

const Modal = () => {
  return (
    <>
         <div>
  <div className="txt-box">
    <div className="head2 pad-1">Modal</div>
    <div className="p1 pad-0-5">Modals are positioned over everything else in the document and remove scroll from the page. It gets closed only with close button on modal pop-up.</div>
    <div className="head4 pad-0-5">Example of Modal</div>
    <div className="p2 pad-0-5">You need to have wrapper div modal-interstitial class. Inside that, you can wrap content inside div.modal-content that you need to show in pop-up.
      Check out below code.</div>
    <div className="container-flex pad-1 darkgray-bg">
      <div className="modal-container" style={{display: 'block', position: 'relative', pointerEvents: 'none'}}>
        <div className="modal-head">sample</div>
        <div className="modal-sub">
          This is sample modal.
        </div>
        <AiFillCloseCircle className="modal-close"/>
        
        <div className="modal-btn">
          <button className="btn-outline btn-sec">btn 1</button>
          <button className="btn">btn 2</button>
        </div>
      </div>
    </div>
    <xmp className="xmp-box">
      &lt;div class="modal-container"&gt;
      &lt;div class="modal-head"&gt;sample&lt;/div&gt;
      &lt;div class="modal-sub"&gt;
      This is sample modal.
      &lt;/div&gt;
      &lt;span class="material-icons modal-close"&gt;
      close
      &lt;/span&gt;
      &lt;div class="modal-btn"&gt;
      &lt;button class="btn-outline btn-sec"&gt;btn 1&lt;/button&gt;
      &lt;button class="btn"&gt;btn 2&lt;/button&gt;
      &lt;/div&gt;
      &lt;/div&gt;
    </xmp>
    <hr />
  </div>
  <hr />
</div>

                
    </>
  )
}

export default Modal