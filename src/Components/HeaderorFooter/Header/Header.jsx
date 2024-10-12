import React from 'react'
import "./Header.css"
import {Link} from "react-router-dom"
import { CgSearch } from "react-icons/cg";
import { TbProgressHelp } from "react-icons/tb";
import { FaOpencart } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
function Header() {
  return (
    <header>
        <nav>
            <div>
            <Link to={"/"}>AllBirds</Link>
                <Link to={"/menWears"}>MEN</Link>
                <Link>WOMEN</Link>
                <Link>SOCKS</Link>
                <Link>SELL</Link>
            </div>
            <div>
            <Link>MEN</Link>
                <Link>SUSTAINABILITY</Link>
                <Link>RERUN</Link>
                <Link>STORES</Link>
                <Link><CgSearch  className='icn'/></Link>
                <Link to="/login"><VscAccount  className='icn'/></Link>
                <Link><TbProgressHelp  className='icn'/></Link>
                <Link><FaOpencart  className='icn'/></Link>
            </div>
        </nav>
    </header>
  )
}

export default Header
