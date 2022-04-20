import React from 'react'
import Showcode from './showcode'

const Card = () => {
  return (
    <>
    <div className="txt-box">
  <div className="head2 pad-1">Cards</div>
  <div className="pad-0-5 p1">Card are used to show user related data collectively, like product details.</div>
  <div className=" head4 pad-0-5">Example of small cards Text+image</div>
  <div className="p2 pad-0-5">This card are used to dispaly some important information in samll space. This are
    mostely used to display discounts.</div>
  <section className="card-main-container  darkgray-bg pad-1">
    <section className="card-offer-container">
      <div className="card-offer">
        <img src="https://buildui.netlify.app/images/img-products/img8.jpg" alt='' className="card-offer-img" />
        <div className="card-offer-head">
          sample prod
        </div>
        <div className="card-offer-txt">
          this is sample card only
        </div>
        <a href="." className="card-offer-link link-fancy">from RS 200</a>
      </div>
      <div className="card-offer">
        <img src="https://buildui.netlify.app/images/img-products/img4.jpg" alt='' className="card-offer-img" />
        <div className="card-offer-head">
          sample prod
        </div>
        <div className="card-offer-txt">
          this is sample card only
        </div>
        <a href="." className="card-offer-link link-fancy">from RS 200</a>
      </div>
      <div className="card-offer">
        <img src="https://buildui.netlify.app/images/img-products/img11.jpg" alt='' className="card-offer-img" />
        <div className="card-offer-head">
          sample prod and
        </div>
        <div className="card-offer-txt">
          this is sample card only
        </div>
        <a href="." className="card-offer-link link-fancy">Rs 200</a>
      </div>
      <div className="card-offer">
        <img src="https://buildui.netlify.app/images/img-products/img5.jpg" alt='' className="card-offer-img" />
        <div className="card-offer-head">
          sample prod
        </div>
        <div className="card-offer-txt">
          this is sample card only
        </div>
        <a href="." className="card-offer-link link-fancy">Rs 200</a>
      </div>
      <div className="card-offer">
        <img src="https://buildui.netlify.app/images/img-products/img13.jpg" alt='' className="card-offer-img" />
        <div className="card-offer-head">
          sample prod
        </div>
        <div className="card-offer-txt">
          this is sample card only
        </div>
        <a href="." className="card-offer-link link-fancy">Rs 200</a>
      </div>
      <div className="card-offer">
        <img src="https://buildui.netlify.app/images/img-products/img6.jpg" alt='' className="card-offer-img" />
        <div className="card-offer-head">
          sample prod
        </div>
        <div className="card-offer-txt">
          this is sample card only
        </div>
        <a href="." className="card-offer-link link-fancy">Rs 200</a>
      </div>
    </section>
  </section>
  <Showcode code={`<section className="card-main-container  darkgray-bg pad-1">
    <section className="card-offer-container">
      <div className="card-offer">
        <img src="https://buildui.netlify.app/images/img-products/img8.jpg" alt='' className="card-offer-img" />
        <div className="card-offer-head">
          sample prod
        </div>
        <div className="card-offer-txt">
          this is sample card only
        </div>
        <a href="." className="card-offer-link link-fancy">from RS 200</a>
      </div>
      <div className="card-offer">
        <img src="https://buildui.netlify.app/images/img-products/img4.jpg" alt='' className="card-offer-img" />
        <div className="card-offer-head">
          sample prod
        </div>
        </section>
        </section>`}/>
  <hr />
  <div className="head4 pad-0-5">Example of Vertical Card- Text+Image</div>
  <div className="p2 pad-0-5">Below are 3 variations, card with badge, card with image default-container, card
    with
    close button. All the cards have like button.</div>
  <section className="card-main-container darkgray-bg">
    <div className="card-normal">
      <img src="https://buildui.netlify.app/images/img-products/img14.jpg" alt='' className="card-normal-img" />
      <div className="card-normal-info">
        <div className="card-head">sample product</div>
        <div className="card-sub">This is sample card only so don't copy this as hole</div>
        <div className="card-normal-rating">3.5<span className="material-icons card-normal-rating-icon">
            star
          </span></div>
        <div className="card-normal-price">$200 <span className="card-normal-oldprice">$2000</span></div>
        <div className="card-normal-discount">
          save %68
        </div>
        <button className="btn-fancy card-normal-btn">Bye Now</button>
      </div>
    </div>
    <div className="card-normal">
      <img src="https://buildui.netlify.app/images/img-products/img12.jpg" alt='' className="card-normal-img" />
      <div className="card-normal-info">
        <div className="card-head">sample product</div>
        <div className="card-sub">This is sample card only so don't copy this as hole</div>
        <div className="card-normal-rating">3.5<span className="material-icons card-normal-rating-icon">
            star
          </span></div>
        <div className="card-normal-price">$200 <span className="card-normal-oldprice">$2000</span></div>
        <div className="card-normal-discount">
          save %68
        </div>
        <button className="btn-fancy card-normal-btn">Bye Now</button>
      </div>
    </div>
  </section>
  <Showcode code={` <section className="card-main-container darkgray-bg">
    <div className="card-normal">
      <img src="https://buildui.netlify.app/images/img-products/img14.jpg" alt='' className="card-normal-img" />
      <div className="card-normal-info">
        <div className="card-head">sample product</div>
        <div className="card-sub">This is sample card only so don't copy this as hole</div>
        <div className="card-normal-rating">3.5<span className="material-icons card-normal-rating-icon">
            star
          </span></div>
        <div className="card-normal-price">$200 <span className="card-normal-oldprice">$2000</span></div>
        <div className="card-normal-discount">
          save %68
        </div>
        <button className="btn-fancy card-normal-btn">Bye Now</button>
      </div>
    </div>
    </section>`}/>
  <hr />
  <div className="head4 pad-0-5">Example of Card with Text Overlay</div>
  <div className="p2 pad-0-5">If you want to display some default not working card then, Use class names as per below
    code.</div>
  <section className="card-main-container darkgray-bg pad-1">
    <section className="card-offer-container">
      <div className="card-offer card-disable">
        <div className="card-disable-txt">OUT OF STOCK</div>
        <img src="https://buildui.netlify.app/images/img-products/img7.jpg" alt='' className="card-offer-img" />
        <span className="card-badge badge-txt-cta1">new</span>
        <div className="card-offer-info">
          <div className="card-offer-head">
            Sample product
          </div>
          <div className="card-offer-txt">
            This is sample product only so, plz don't copy this.
          </div>
          <a href="." className="card-offer-link link-fancy">Rs 200</a>
        </div>
      </div>
      <div className="card-offer card-disable">
        <div className="card-disable-txt">OUT OF STACK</div>
        <img src="https://buildui.netlify.app/images/img-products/img8.jpg" alt='' className="card-offer-img" />
        <div className="card-offer-head">
          sample product
        </div>
        <div className="card-offer-txt">
          This is sample card only.
        </div>
        <a href="." className="card-offer-link link-fancy">from RS 200</a>
      </div>
      <div className="card-offer card-disable">
        <div className="card-disable-txt">OUT OF STACK</div>
        <img src="https://buildui.netlify.app/images/img-products/img9.jpg" alt='' className="card-offer-img" />
        <div className="card-offer-head">
          sample product
        </div>
        <div className="card-offer-txt">
          This is sample card only.
        </div>
        <a href="." className="card-offer-link link-fancy">Rs 200</a>
      </div>
    </section>
    <div className="card-normal card-disable">
      <div className="card-disable-txt">OUT OF STOCK</div>
      <span className="card-badge badge-txt-red">hot</span>
      <img src="https://buildui.netlify.app/images/img-products/img13.jpg" alt='' className="card-normal-img" />
      <div className="card-normal-info">
        <div className="card-head">sample product</div>
        <div className="card-sub">This is sample product only so, plz don't copy this.</div>
        <div className="card-normal-rating">3.5<span className="material-icons card-normal-rating-icon">
            star
          </span></div>
        <div className="card-normal-price">$200 <span className="card-normal-oldprice">$2000</span></div>
        <div className="card-normal-discount">
          save %68
        </div>
        <button className="btn-fancy card-normal-btn">Bye Now</button>
      </div>
    </div>
    <div className="card-normal card-disable">
      <div className="card-disable-txt">OUT OF STACK</div>
      <img src="https://buildui.netlify.app/images/img-products/img12.jpg" alt='' className="card-normal-img" />
      <div className="card-normal-info">
        <div className="card-head">sample product</div>
        <div className="card-sub">This is sample product only so, plz don't copy this.</div>
        <div className="card-normal-rating">3.5<span className="material-icons card-normal-rating-icon">
            star
          </span></div>
        <div className="card-normal-price">$200 <span className="card-normal-oldprice">$2000</span></div>
        <div className="card-normal-discount">
          save %68
        </div>
        <button className="btn-fancy card-normal-btn">Bye Now</button>
      </div>
    </div>
  </section>
  <Showcode code={`<div className="card-normal card-disable">
      <div className="card-disable-txt">OUT OF STOCK</div>
      <span className="card-badge badge-txt-red">hot</span>
      <img src="https://buildui.netlify.app/images/img-products/img13.jpg" alt='' className="card-normal-img" />
      <div className="card-normal-info">
        <div className="card-head">sample product</div>
        <div className="card-sub">This is sample product only so, plz don't copy this.</div>
        <div className="card-normal-rating">3.5<span className="material-icons card-normal-rating-icon">
            star
          </span></div>
        <div className="card-normal-price">$200 <span className="card-normal-oldprice">$2000</span></div>
        <div className="card-normal-discount">
          save %68
        </div>
        <button className="btn-fancy card-normal-btn">Bye Now</button>
      </div>
    </div>`}/>
  <hr />
  <div className="head4 pad-0-5">Example of card with square images+text </div>
  <div className="p2 pad-0-5"> This card are used to display catogory or some offers. Usualy it is used to represent
    bunch of card in single card.
    There is also text overlayed card for this type.
  </div>
  <section className="card-sm-container darkgray-bg pad-1">
    <div className="card-sm">
      <img src="https://buildui.netlify.app/images/img-products/img14.jpg" alt='' className="card-sm-img" />
      <div className="card-sm-info">
        <div className="card-sm-head">sample product</div>
        <div className="card-sm-txt">all are at 50% discount</div>
        <div className="card-sm-discount">63% discount</div>
        <div className="card-sm-sub">Deal of the day</div>
        {/* <button class="card-sm-btn btn-fancy">Buy</button> */}
      </div>
    </div>
    <div className="card-sm">
      <img src="https://buildui.netlify.app/images/img-products/img11.jpg" alt='' className="card-sm-img" />
      <div className="card-sm-info">
        <div className="card-sm-head">sample product</div>
        <div className="card-sm-txt">all are at 50% discount</div>
        <div className="card-sm-discount">63% discount</div>
        <div className="card-sm-sub">Deal of the day</div>
        {/* <button class="card-sm-btn btn-fancy">Buy</button> */}
      </div>
    </div>
    <div className="card-sm">
      <img src="https://buildui.netlify.app/images/img-products/img13.jpg" alt='' className="card-sm-img" />
      <div className="card-sm-info">
        <div className="card-sm-head">sample product</div>
        <div className="card-sm-txt">all are at 50% discount</div>
        <div className="card-sm-discount">63% discount</div>
        <div className="card-sm-sub">Deal of the day</div>
        {/* <button class="card-sm-btn btn-fancy">Buy</button> */}
      </div>
    </div>
    <div className="card-sm card-disable">
      <div className="card-disable-container">
        <div className="card-disable-txt">OUT OF STOCK</div>
      </div>
      <img src="https://buildui.netlify.app/images/img-products/img7.jpg" alt='' className="card-sm-img" />
      <div className="card-sm-info">
        <div className="card-sm-head">sample product</div>
        <div className="card-sm-txt">all are at 50% discount</div>
        <div className="card-sm-discount">63% discount</div>
        <div className="card-sm-sub">Deal of the day</div>
        {/* <button class="card-sm-btn btn-fancy">Buy</button> */}
      </div>
    </div>
  </section>
  <Showcode code={`<section className="card-sm-container darkgray-bg pad-1">
    <div className="card-sm">
      <img src="https://buildui.netlify.app/images/img-products/img14.jpg" alt='' className="card-sm-img" />
      <div className="card-sm-info">
        <div className="card-sm-head">sample product</div>
        <div className="card-sm-txt">all are at 50% discount</div>
        <div className="card-sm-discount">63% discount</div>
        <div className="card-sm-sub">Deal of the day</div>
        {/* <button class="card-sm-btn btn-fancy">Buy</button> */}
      </div>
    </div>
    </section>`}/>
  <hr />
</div>

    </>
  )
}

export default Card