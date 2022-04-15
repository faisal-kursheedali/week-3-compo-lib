import React from 'react'
import Showcode from './showcode'

const Image = () => {
  return (
    <>
        <div className="txt-box">
  <div className="head2">Images</div>
  <div className="p1">Images can be responsive to fit the parent's width, and also can be customised to be round
    shaped</div>
  <div className="head3">Example of Responsive Image</div>
  <div className="p2">You can add class img-responsive to make your image fit the width of container. It's height will
    get adjusted by keeping the aspect ratio same. If you want to change the aspect ratio, you will have to crop
    the image.
  </div>
  <div className="head4 txt-underline">Responsive Image</div>
  <div className="p2">You can make your image responsive by adding <span className="cta1">img-sqr</span> in your tag<span className="txt-code">class="img-sqr"</span></div>
  <div className="darkgray-bg flx-center-rw" style={{margin:"4px",padding:'8px'}}>
    <img src="https://buildui.netlify.app/images/img12.jpg" alt="" className="img-sqr" />
  </div>

<Showcode code={`<img src="" alt="" className="img-sqr" />  `}/>
  
  <hr />
  <div className="head4 txt-underline">Responsive Round Image</div>
  <div className="p2">To make your image round you need to keep them inside the container with class name <span className="cta1">img-rnd-container</span> as <span className="txt-code">class="img-rnd"</span> and inside that
    container you have to put you'r image tage with class name <span className="cta1">img-rnd-container</span> as
    <span className="txt-code">class="img-rnd"</span></div>
  <div className="pad1 compo-display-container darkgray-bg">
    <div className="img-rnd-container" style={{margin:"8px"}}>
      <img src="https://buildui.netlify.app/images/img14.jpg" alt="" className="img-rnd" />
    </div>
  </div>
  <Showcode code={`
  <div className="img-rnd-container">
  <img src="" alt="" className='img-rnd'/>
</div>
`}/>
  
  
  <hr />
</div>

    </>
  )
}

export default Image