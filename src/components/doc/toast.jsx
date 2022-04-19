import React, { useState } from 'react'
import{AiFillCloseCircle} from "react-icons/ai"
const Toast = () => {
    const [clr, setClr] = useState("toast-yellow")
    const [show, setShow] = useState(false)
    const clickHandler = (i) => {
        setClr(i.target.value)
        setShow(true)
        setTimeout(() => setShow(false), 4000)
    }
    return (
        <>
            <div className="txt-box">
                <div className="head2 pad-1">Toast</div>
                <div className="p1 pad-0-5">This component can be used for toast or snackbar component. Toast is mostly used to show
                    feedback message. Snackbar is to used show message that need user action</div>
                <div className="head4 pad-0-5">Example of Toast</div>
                <div className="p2 pad-0-5">Add toast class to wrapper. Toast has 3 themes, for error, success, warning, add
                    toast-success, toast-error, toast-inform class to style the theme.</div>
                <div className="head4 pad-0-5">Live Demo</div>
                <div className="container-flex darkgray-bg pad-1">
                    <button className="btn sample-toast-btn" value="toast-green" onClick={(i) => clickHandler(i)}>Green</button>
                    <button className="btn sample-toast-btn" value="toast-red" onClick={(i) => clickHandler(i)}>red</button>
                    <button className="btn sample-toast-btn" value="toast-yellow" onClick={(i) => clickHandler(i)}>yellow</button>
                </div>
                {show ? (<div className="toast" style={{ display: "block" }}>
                    <div className={clr}>
                        <div className="toast-txt">Hello</div>
                        <AiFillCloseCircle className="material-icons toast-close" onClick={() => setShow(false)}/>
                        
                    </div>
                </div>) : ""}

                <xmp className="xmp-box">
                    &lt;div class="toast"&gt;
                    &lt;div class="toast-yellow"&gt;
                    &lt;div class="toast-txt"&gt;Hello&lt;/div&gt;
                    &lt;span class="material-icons toast-close"&gt;
                    close
                    &lt;/span&gt;
                    &lt;/div&gt;
                    &lt;/div&gt;
                </xmp>
                <hr />
            </div>

        </>
    )
}

export default Toast