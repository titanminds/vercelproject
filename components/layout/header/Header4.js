import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
export default function Header4({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (
        <>
            {/* <header className="main-header header-style-four"> */}
            
            <header className={`main-header header-style-four ${scroll ? "fixed-header" : ""}`}>

                <div className="header-upper">
                    <div className="auto-container">
                        <div className="upper-inner">
                            <div className="left-column">
                                <div className="single-item">
                                    <div className="icon-box"><img src="assets/images/icons/icon-44.png" alt=""/></div>
                                    <h5><Link href="/index-4">Login </Link><span>-or</span></h5>
                                    <h6><Link href="/index-4">Create your account</Link></h6>
                                </div>
                            </div>
                            <figure className="logo-box"><Link href="/index-4"><img src="assets/images/logo-6.png" alt=""/></Link></figure>
                            <div className="right-column">
                                <div className="single-item">
                                    <div className="icon-box"><img src="assets/images/icons/icon-45.png" alt=""/></div>
                                    <h5>Get Funded</h5>
                                    <h6>Profit with our expertise</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* header lower */}
                <div className="header-lower">
                    <div className="auto-container">
                        <div className="outer-box">
                            <div className="menu-area clearfix">
                                <div className="line-1"></div>
                                <div className="line-2"></div>
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
                            </div>
                        </div>
                    </div>
                </div>

                {/* sticky header */}
                <div className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}>
                    <div className="auto-container">
                        <div className="outer-box">
                            <figure className="logo-box">
                                <Link href="/index-4">
                                <img src="assets/images/logo-6.png" alt="/" />
                                </Link>
                            </figure>
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
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <MobileMenu handleMobileMenu={handleMobileMenu} isSidebar={isSidebar} handleSidebar={handleSidebar} />
            

            
        </>
    )
}
