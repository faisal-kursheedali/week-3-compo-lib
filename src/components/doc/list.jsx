import React from 'react'
import Showcode from './showcode'

const List = () => {
  return (
    <>
        <div className="txt-box">
  <div className="head2">Lists</div>
  <div className="p1 pad-0-5">Lists can be used at so many places, navigation bar, stacked notifications, article pages, etc.
  </div>
  <div className=" darkgray-bg ">
    <div className="inline-block">
      <ul className="list-rnd-dark  inline-block ">
        <li>Item 1</li>
        <li>Itrm 2</li>
        <li>Item 3</li>
      </ul>
    </div>
    <div className="inline-block">
      <ul className="list-rnd-lite  inline-block ">
        <li>Item 1</li>
        <li>Itrm 2</li>
        <li>Item 3</li>
      </ul>
    </div>
    <div className="inline-block">
      <ul className="list-sqr  inline-block ">
        <li>Item 1</li>
        <li>Itrm 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  </div>
  <Showcode code={`<div className="inline-block">
      <ul className="list-rnd-dark  inline-block ">
        <li>Item 1</li>
        <li>Itrm 2</li>
        <li>Item 3</li>
      </ul>
    </div>
    <div className="inline-block">
      <ul className="list-rnd-lite  inline-block ">
        <li>Item 1</li>
        <li>Itrm 2</li>
        <li>Item 3</li>
      </ul>
    </div>
    <div className="inline-block">
      <ul className="list-sqr  inline-block ">
        <li>Item 1</li>
        <li>Itrm 2</li>
        <li>Item 3</li>
      </ul>
    </div>`}/>
  <hr />
  <div className="head4 pad-0-5">Example of Ordered List with bullets</div>
  <div className="p2 pad-0-5">Add class according to bullet style. Copy html code below and add your desired list items.
    To reverse the order of ordered list, add <span className="txt-code">reversed</span> attribute to <span className="txt-code">ol</span> element</div>
  <div className="darkgray-bg">
    <div className="inline-block">
      <ol className="list-num  inline-block ">
        <li>Item 1</li>
        <li>Itrm 2</li>
        <li>Item 3</li>
      </ol>
    </div>
    <div className="inline-block">
      <ol className="list-abc  inline-block ">
        <li>Item 1</li>
        <li>Itrm 2</li>
        <li>Item 3</li>
      </ol>
    </div>
    <div className="inline-block">
      <ol className="list-cap  inline-block ">
        <li>Item 1</li>
        <li>Itrm 2</li>
        <li>Item 3</li>
      </ol>
    </div>
    <div className="inline-block">
      <ol className="list-cap  inline-block ">
        <li>Item 1</li>
        <li>Itrm 2</li>
        <li>Item 3</li>
      </ol>
    </div>
    <div className="inline-block">
      <ol className="list-smroman  inline-block ">
        <li>Item 1</li>
        <li>Itrm 2</li>
        <li>Item 3</li>
      </ol>
    </div>
    <div className="inline-block">
      <ol className="list-lrgroman  inline-block ">
        <li>Item 1</li>
        <li>Itrm 2</li>
        <li>Item 3</li>
      </ol>
    </div>
  </div>
  <Showcode code={` <div className="inline-block">
      <ol className="list-num  inline-block ">
        <li>Item 1</li>
        <li>Itrm 2</li>
        <li>Item 3</li>
      </ol>
    </div>
    <div className="inline-block">
      <ol className="list-abc  inline-block ">
        <li>Item 1</li>
        <li>Itrm 2</li>
        <li>Item 3</li>
      </ol>
    </div>
    <div className="inline-block">
      <ol className="list-cap  inline-block ">
        <li>Item 1</li>
        <li>Itrm 2</li>
        <li>Item 3</li>
      </ol>
    </div>
    <div className="inline-block">
      <ol className="list-cap  inline-block ">
        <li>Item 1</li>
        <li>Itrm 2</li>
        <li>Item 3</li>
      </ol>
    </div>
    <div className="inline-block">
      <ol className="list-smroman  inline-block ">
        <li>Item 1</li>
        <li>Itrm 2</li>
        <li>Item 3</li>
      </ol>
    </div>
    <div className="inline-block">
      <ol className="list-lrgroman  inline-block ">
        <li>Item 1</li>
        <li>Itrm 2</li>
        <li>Item 3</li>
      </ol>
    </div>`}/>
  <hr />
  <div className="head4 pad-0-5">Example of List with no bullets</div>
  <div className="p2 pad-0-5">If you want list stacked but with no bullet and indentation, then you can add <span className="txt-code">list-no-style</span> class.
    Class <span className="txt-code">list-item-space</span> applies padding between two list items.</div>
  <div className="block border-darkgray litegray-bg pad-1">
    <div className="darkgray-bg  border-none pad-1">
      <ul className="list-no-style pad-1 list-item-space">
        <li>Item 1</li>
        <li>Itrm 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  </div>
  <Showcode code={`<div className="darkgray-bg  border-none pad-1">
      <ul className="list-no-style pad-1 list-item-space">
        <li>Item 1</li>
        <li>Itrm 2</li>
        <li>Item 3</li>
      </ul>
    </div>`}/>
  <hr />
  <div className="head4 pad-0-5">Example of List with inline items</div>
  <div className="p2 pad-0-5">If you want list items in same line instead of stacked, you can add <span className="txt-code">list-inline</span> class to make it inline.
    <div className="box-container-flex border-darkgray litegray-bg pad-1">
      <div className="darkgray-bg  border-none pad-1">
        <ul className="list-inline pad-1 list-item-space">
          <li>Item 1</li>
          <li>Itrm 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    </div>
    <Showcode code={`<div className="darkgray-bg  border-none pad-1">
        <ul className="list-inline pad-1 list-item-space">
          <li>Item 1</li>
          <li>Itrm 2</li>
          <li>Item 3</li>
        </ul>
      </div>`}/>
  </div>
</div>

    </>
  )
}

export default List