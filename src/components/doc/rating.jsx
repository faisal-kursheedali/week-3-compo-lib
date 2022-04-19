import React,{useState} from 'react'
import{AiFillStar,AiOutlineStar} from "react-icons/ai"
const Rating = () => {
    const[count,setCount]=useState(0)
  return (
    <>
        <div className="txt-box">
  <div className="head2 pad-1">Rating</div>
  <div className="p2 pad-0-5">Rating components can be used as read-only badge or in reviews section. Can be used in reviews section as form too.</div>
  <div className="head4 pad-0-5">Example of read-only ratings</div>
  <div className="p2 pad-0-5">There are two types, input read-only and badge</div>
  <div className="container-flex darkgray-bg pad-1">
    <div className="rating-container">
        {
            [...Array(5)].map((_,i)=>{
                
                return(count>=i ?(<AiFillStar className='rating-star-icn' onClick={()=>setCount(i)}/>):(<AiOutlineStar onClick={()=>setCount(i)} className='rating-star-icn'/>))
            })
        }
    </div> 
    <div className="rating-example-display" />
    <div className="rating-old-rnd">
      {count+1}
      <AiFillStar className="rating-old-icn rating-star-icn"/>
      
    </div>
  </div>
  <xmp className="xmp-box">
    &lt;div class="rating-container"&gt;
    &lt;label&gt;
    &lt;input type="checkbox"  disabled class="rating-input"&gt;
    &lt;span class="material-icons rating-star-icn"&gt;
    star
    &lt;/span&gt;
    &lt;/label&gt;
    &lt;label&gt;
    &lt;input type="checkbox" checked disabled class="rating-input"&gt;
    &lt;span class="material-icons rating-star-icn"&gt;
    star
    &lt;/span&gt;
    &lt;/label&gt;
    &lt;label&gt;
    &lt;input type="checkbox" checked disabled class="rating-input"&gt;
    &lt;span class="material-icons rating-star-icn"&gt;
    star
    &lt;/span&gt;
    &lt;/label&gt;
    &lt;label&gt;
    &lt;input type="checkbox" checked disabled class="rating-input"&gt;
    &lt;span class="material-icons rating-star-icn"&gt;
    star
    &lt;/span&gt;
    &lt;/label&gt;
    &lt;label&gt;
    &lt;input type="checkbox" checked disabled class="rating-input"&gt;
    &lt;span class="material-icons rating-star-icn"&gt;
    star
    &lt;/span&gt;
    &lt;/label&gt;
    &lt;div class="rating-example-display"&gt;&lt;/div&gt;
    &lt;div class="rating-old-rnd"&gt;
    3.5
    &lt;span class="material-icons rating-old-icn"&gt;
    star
    &lt;/span&gt;
    &lt;/div&gt;
    &lt;/div&gt;
  </xmp>
  <hr />
</div>

    </>
  )
}

export default Rating