'use client'
import Link from "next/link";
import { ReactNode, useState } from "react";


type NavBarProps =
    {
        marginTop?: string;
    }
export default function Navbar({ marginTop = 'mt-20' }: NavBarProps) {
    const [menu, setMenu] = useState(false)
    const setMenuOpen = () => setMenu(true);
    const setMenuClose = () => setMenu(false);

    return (
        <>
            <div className="top-0 py-1 lg:py-2 w-full bg-transparent lg:relative z-40">
                <nav className="z-10 sticky top-0 left-0 right-0 max-w-4xl xl:max-w-5xl mx-auto px-5 py-2.5 lg:border-none lg:py-4">
                    <div className="flex items-center justify-between">
                        <button>
                            <div className="flex items-center space-x-2">
                                <h2 className="text-black font-bold text-2xl">Razzy's Sports Institute</h2>
                            </div>
                        </button>
                        <div className="hidden lg:block">
                            <ul className="flex space-x-10 text-base font-bold text-black/60 ">
                                <li
                                    className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                                    <a href="#">Home</a>
                                </li>
                                <li
                                    className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                                    {/* <a href="#">Our services</a> */}
                                    <div className="flex w-full justify-center items-center">

                                        <div className="dropdown inline-block relative">
                                            <button className="inline-flex items-center">
                                                <span className="mr-1">Our Services</span>
                                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                                            </button>
                                            <ul className="dropdown-menu absolute text-sm shadow-2xl hidden pt-1">
                                                <li className=""><a className="rounded-t bg-option-bg hover:text-white hover:bg-option-hover-bg py-2 px-4 block whitespace-no-wrap"
                                                    href="#">Sports Training</a></li>
                                                <li className=""><a className="bg-option-bg hover:text-white hover:bg-option-hover-bg  py-2 px-4 block whitespace-no-wrap" href="#">Adult Metabolic Classes</a></li>
                                            </ul>
                                        </div>

                                    </div>
                                </li>
                                <li
                                    className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                                    <a href="#">About</a>
                                </li>
                                <li
                                    className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                                    <a href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className="hidden lg:flex lg:items-center gap-x-2">
                            <button className="flex items-center text-black  justify-center px-6 py-2.5 font-semibold">Sign up</button>
                            {/* <button className="flex items-center justify-center rounded-md bg-[#4A3BFF] text-white px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200">Login</button> */}
                        </div>
                        <div className="flex items-center justify-center lg:hidden">
                            <button onClick={setMenuOpen} className="focus:outline-none text-slate-200 ">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" className="text-2xl text-slate-800 focus:outline-none active:scale-110 active:text-red-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
            {menu ?
                (
                    <div className="absolute grid grid-cols-1 mobileMenuSlide -left-[500px] bg-primary-background z-50 h-screen w-full">
                        <div className="absolute text-xl right-0 grid grid-cols-1 mx-5 mt-5 gap-4 justify-items-end bg-primary-background ">
                            <div className="">
                                <a href="#">Home</a>
                            </div>
                            <div className="">
                                <a href="#">Our Services</a>
                            </div>
                            <div>
                                <a href="#">About</a>
                            </div>
                            <div>
                                <a href="#">Contact</a>
                            </div>
                        </div>
                    </div>
                )
                :
                (
                    <></>
                )}

        </>
    )
}

interface Props {
    children: ReactNode;
    link: string;
    marginRight?: boolean
    hamburger?: boolean
}

const NavBarOption: React.FC<Props> = ({ children, link, marginRight = true, hamburger = false }) => {

    return (
        <Link href={link}>
            {hamburger ?
                (
                    <>
                        <span className={`${marginRight ? 'mr-5' : ''} text-rust px-3 py-2 text-right block text-navbar-font-xl`}>
                            {children}
                        </span>
                    </>
                ) :
                (
                    <>
                        <span className={`${marginRight ? 'mr-5' : ''} text-button-primary text-navbar-font-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]`}>
                            {children}
                        </span>
                    </>
                )}
        </Link>
    );
};

