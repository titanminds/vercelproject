'use client'
import Link from "next/link"
import { useState } from "react"
export default function MobileMenu({ isSidebar, handleMobileMenu, handleSidebar }) {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <div className="mobile-menu">
                <div className="menu-backdrop" onClick={handleMobileMenu} />
                <div className="close-btn" onClick={handleMobileMenu}><span className="far fa-times" /></div>
                <nav className="menu-box">
                    <div className="nav-logo"><Link href="/"><img src="/assets/images/logo-2.png" alt="" /></Link></div>
                    <div className="menu-outer">
                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="navigation clearfix">
                                <li className={isActive.key == 1 ? "dropdown current" : "dropdown"}><Link href="/">Home</Link>
                                    <ul style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                        <li><Link href="/">Home Page 01</Link></li>
                                        <li><Link href="/index-2">Home Page 02</Link></li>
                                        <li><Link href="/index-3">Home Page 03</Link></li>
                                        <li><Link href="/index-4">Home Page 04</Link></li>
                                        <li><Link href="/index-5">Home Page 05</Link></li>
                                    </ul>
                                    <div className={isActive.key == 1 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(1)}><span className="fa fa-angle-right" /></div>
                                </li>
                                <li className={isActive.key == 2 ? "dropdown current" : "dropdown"}><Link href="/#">About</Link>
                                    <ul style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                        <li><Link href="/about">About Company</Link></li>
                                        <li><Link href="/history">History</Link></li>
                                        <li><Link href="/team">Team Members</Link></li>
                                        <li><Link href="/faq">Faq’s</Link></li>
                                        <li><Link href="/error">404</Link></li>
                                    </ul>
                                    <div className={isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(2)}><span className="fa fa-angle-right" /></div>
                                </li>
                                <li className={isActive.key == 3 ? "dropdown current" : "dropdown"}><Link href="/#">Trading</Link>
                                    <ul style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                        <li><Link href="/account-1">Accounts Overview</Link></li>
                                        <li><Link href="/account-2">Demo Account</Link></li>
                                        <li><Link href="/account-3">Individual Account</Link></li>
                                        <li><Link href="/account-4">Professional Account</Link></li>
                                        <li><Link href="/account-5">VIP Account</Link></li>
                                        <li><Link href="/account-6">ECN Account</Link></li>
                                        <li><Link href="/trader-1">MetaTrader 4</Link></li>
                                        <li><Link href="/trader-2">MetaTrader 5</Link></li>
                                        <li><Link href="/education">Education</Link></li>
                                        <li><Link href="/education-details">Education Details</Link></li>
                                    </ul>
                                    <div className={isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(3)}><span className="fa fa-angle-right" /></div>
                                </li>
                                <li className={isActive.key == 4 ? "dropdown current" : "dropdown"}><Link href="/#">Services</Link>
                                    <ul style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                                        <li><Link href="/service">Services Overview</Link></li>
                                        <li><Link href="/service-details">Currency Pairs</Link></li>
                                        <li><Link href="/service-details-2">Trading Accounts</Link></li>
                                        <li><Link href="/service-details-3">Platform & Tools</Link></li>
                                        <li><Link href="/service-details-4">Monitoring & Support</Link></li>
                                        <li><Link href="/service-details-5">Education & Training</Link></li>
                                    </ul>
                                    <div className={isActive.key == 4 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(4)}><span className="fa fa-angle-right" /></div>
                                </li>
                                <li className={isActive.key == 5 ? "dropdown current" : "dropdown"}><Link href="/#">Blog</Link>
                                    <ul style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                                        <li><Link href="/blog">Grid View 01</Link></li>
                                        <li><Link href="/blog-2">Grid View 02</Link></li>
                                        <li><Link href="/blog-3">List View 01</Link></li>
                                        <li><Link href="/blog-4">List View 02</Link></li>
                                        <li><Link href="/blog-details">Single Post</Link></li>
                                    </ul>
                                    <div className={isActive.key == 5 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(5)}><span className="fa fa-angle-right" /></div>
                                </li>
                                <li><Link href="/contact">Contact</Link></li>
                            </ul>
                        </div>

                    </div>
                    {/*Social Links*/}
                    <div className="social-links">
                        <ul className="clearfix">
                            <li><Link href="/#"><span className="fab fa-twitter" /></Link></li>
                            <li><Link href="/#"><span className="fab fa-facebook-square" /></Link></li>
                            <li><Link href="/#"><span className="fab fa-pinterest-p" /></Link></li>
                            <li><Link href="/#"><span className="fab fa-instagram" /></Link></li>
                            <li><Link href="/#"><span className="fab fa-youtube" /></Link></li>
                        </ul>
                    </div>
                </nav>
            </div>{/* End Mobile Menu */}
            <div className="nav-overlay" style={{ display: `${isSidebar ? "block" : "none"}` }} onClick={handleSidebar} />

          

        </>
    )
}
