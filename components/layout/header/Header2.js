import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
import CustomSelect from '../../elements/CustomSelect'

const options = [
    { value: "1", label: "En" },
    { value: "2", label: "Ch" },
    { value: "3", label: "Hi" },
    { value: "4", label: "Sp" },
    { value: "5", label: "Tu" },
  ];

export default function Header2({ scroll, handleMobileMenu, isSidebar, handleSidebar }) {

    const handleSelectChange = (selectedOption) => {
        console.log("Se:", selectedOption);
      };

    return (
        <>
            {/* <header className="main-header header-style-two"> */}
            <header className={`main-header header-style-two ${scroll ? "fixed-header" : ""}`}>
                
                {/* header lower */}
                <div className="header-lower">
                    <div className="auto-container">
                        <div className="outer-box">
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
                            <div className="menu-right-content">
                                <div className="language-box">
                                    <div className="icon-box"><i className="flaticon-earth"></i></div>
                                    <div className="custom-select">
                                        <CustomSelect options={options} onChange={handleSelectChange} />
                                    </div>
                                </div>
                                <div className="login-box"> 
                                    <div className="icon-box"><i className="flaticon-user"></i></div>
                                    <h6><Link href="/index-2">Get Started</Link></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* sticky header */}
                <div className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}>
                    <div className="auto-container">
                        <div className="outer-box">
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
                            <div className="menu-right-content">
                                <div className="language-box">
                                    <div className="icon-box"><i className="flaticon-earth"></i></div>
                                    <div className="custom-select">
                                        <CustomSelect options={options} onChange={handleSelectChange} />
                                    </div>
                                </div>
                                <div className="login-box"> 
                                    <div className="icon-box"><i className="flaticon-user"></i></div>
                                    <h6><Link href="/index-2">Users Login</Link></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <MobileMenu handleMobileMenu={handleMobileMenu} handleSidebar={handleSidebar} isSidebar={isSidebar} />


        </>
    )
}
