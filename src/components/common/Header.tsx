import React, { useState } from "react";
import logo from "../../../public/images/cargo-high-resolution-logo.png";
import { ILinks } from './index';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { ImCross } from "react-icons/im"
const Header: React.FC = () => {
    const [menu, setMenu] = useState(false)

    const links: ILinks[] = [
        { link: "HOMES" },
        { link: "PAGES" },
        { link: "TRACKING" },
        { link: "SERVICES" },
        { link: "BLOG" }
    ];

    const clickHandler = () => {
        setMenu(!menu)
    }

    return (
        <div className="flex justify-between items-center p-4 font-semibold relative">
            <img src={logo} width={160} height={100} alt="logo" className="w-16 rounded" />
            <div className="flex gap-10 items-center max-md:hidden">
                {links.map(link => {
                    return (
                        <><div>
                            {link.link}</div></>
                    )
                })}
            </div>
            <div className="flex gap-2 items-center text-sm">
                <button className="bg-yellow p-3 hover:bg-orange-300 max-md:hidden rounded  ">GET A QUOTE</button>
                <button onClick={clickHandler} className="md:hidden text-4xl font-semibold"><HiOutlineMenuAlt3 /></button>
                <button className="bg-black text-white p-3 hover:bg-slate-400 rounded">SIGN IN</button>
            </div>
            <div className="lg:hidden absolute right-0 top-0 z-[1000] bg-yellow duration-200  w-full ">
                {menu && <div className="flex flex-col p-4  duration-75 min-h-screen overflow-hidden  ">
                    <div><ImCross className="text-2xl " onClick={() => {
                        setMenu(!menu)
                    }} /></div>
                    {links.map(link => {
                        return (
                            <div className="flex flex-col gap-10  my-4 items-center text-2xl ">{link.link}</div>
                        )
                    })}
                    <div className="flex justify-center">
                        <button onClick={() => {
                            alert("hello my name is lakna wts up")
                        }} className="bg-slate-800 text-white p-3 hover:bg-slate-400 rounded">GET A QUOTE</button>
                    </div></div>}
            </div>
        </div>
    )
};

export default Header
