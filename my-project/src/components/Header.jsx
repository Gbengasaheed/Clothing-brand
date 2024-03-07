import React from 'react'
import hamburger from "./../assets/menu-hamburger.svg"
import logo from "../assets/Group 211.png"
import search from "../assets/search.png"
import heart from "../assets/heart.png"
import cart from "../assets/cart-4.png"
import user from "../assets/fi_user.svg"

const catalogData = ["Women", "For men", "New", "Special collection "]

const Header = () => {
  return (
    <div className="w-full h-[86px] bg-red-400 p-8 md:px-20 ">
  <div className="flex justify-between items-center md:hidden">
    <div className="max-w-24 flex items-center gap-x-6">
      <img src={hamburger} alt="hamburger" />
      <img src={logo} alt="logo" />
    </div>
    <div className="max-w-28 flex items-center gap-x-4">
      <img src={search} alt="search" />
      <img src={heart} alt="heart" />
      <img src={cart} alt="cart" />
    </div>
  </div>
  <div className="hidden md:flex w-full h-full gap-20 justify-between items-center">
    <div className="max-w-24 flex gap-x-12 items-center">
      <img src={hamburger} alt="hamburger" />
      <img src={logo} alt="logo" className="ml-8" />
    </div>
    <div className="w-max flex h-full gap-x-12 justify-evenly items-center ml-8">
      {catalogData.map((item, index) => (
        <p key={index} className="cursor-pointer text-xl text-center">
          {item}
        </p>
      ))}
    </div>
    <div className="relative max-w-max flex items-center gap-x-6">
  <img src={user} />
  <img src={heart} />
  <img src={cart} />
  <p className="absolute w-[20px] h-[20px] bg-yellow-500 text-center rounded-full text-sm left-28 -top-4">
    2
  </p>
</div>
  </div>
</div>
  )
}

export default Header
