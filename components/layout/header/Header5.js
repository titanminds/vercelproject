import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"


export default function Header5({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (
        <>

        {/* main header */}
        <header className={`main-header header-style-five ${scroll ? "fixed-header" : ""}`}>

            <div className="header-top-three">
                <div className="outer-container">
                    <div className="left-column">
                        <h6><i className="flaticon-thunder"></i><strong>Time-limited deals</strong> Benefit from a 20% discount with code <span>FxOct10</span></h6>
                    </div>
                    <div className="right-column">
                        <ul className="links-list clearfix">
                            <li><Link href="/faq">Faq’s</Link></li>
                            <li><Link href="/blog">News</Link></li>
                            <li><Link href="/index-5">Login</Link></li>
                            <li><Link href="/index-5">Register</Link></li>
                        </ul>
                        <ul className="social-links">
                            <li><Link href="/index-5"><i className="flaticon-facebook"></i></Link></li>
                            <li><Link href="/index-5"><i className="flaticon-video-camera"></i></Link></li>
                            <li><Link href="/index-5"><i className="flaticon-instagram-logo"></i></Link></li>
                            <li><Link href="/index-5"><i className="flaticon-youtube"></i></Link></li>
                        </ul>
                    </div>
                </div>
            </div>


            {/* header lower */}
            <div className="header-lower">
                <div className="outer-container">
                    <div className="outer-box">
                        <figure className="logo-box"><Link href="/index-5"><img src="assets/images/logo-8.png" alt=""/></Link></figure>
                        <div className="menu-area clearfix">
                            {/* mobile navigation toggler */}
                            <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                                <i className="icon-bar"></i>
                                <i className="icon-bar"></i>
                                <i className="icon-bar"></i>
                            </div>
                            <nav className="main-menu navbar-expand-md navbar-light">
                                <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                    <Menu />
                                </div>
                            </nav>
                            <div className="search-box-outer search-toggler" onClick={handlePopup}><i className="flaticon-search"></i></div>
                        </div>
                        <div className="menu-right-content">
                            <div className="link-box">
                                <div className="icon-box"><i className="flaticon-bandwidth"></i></div>
                                <h6><Link href="/index-5">Start <br/>Evaluation <i className="flaticon-right-arrow"></i></Link></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* sticky header */}
            <div className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}>
                <div className="outer-container">
                    <div className="outer-box">
                        <figure className="logo-box"><Link href="/index-5"><img src="assets/images/logo-8.png" alt=""/></Link></figure>
                        <div className="menu-area clearfix">
                            <nav className="main-menu clearfix">
                                <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                    <Menu />
                                </div>
                            </nav>
                            <div className="search-box-outer search-toggler" onClick={handlePopup}><i className="flaticon-search"></i></div>
                        </div>
                        <div className="menu-right-content">
                            <div className="link-box">
                                <div className="icon-box"><i className="flaticon-bandwidth"></i></div>
                                <h6><Link href="/index-5">Start <br/>Evaluation <i className="flaticon-right-arrow"></i></Link></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <MobileMenu handleMobileMenu={handleMobileMenu} />
        </header>
        </>
    )
}
