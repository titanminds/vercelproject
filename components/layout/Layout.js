'use client'

import { useEffect, useState } from "react"
import BackToTop from '../elements/BackToTop'
import DataBg from "../elements/DataBg"
import Breadcrumb from './Breadcrumb'
import SearchPopup from "./SearchPopup"
import Sidebar from "./Sidebar"

import Header1 from "./header/Header1"
import Header2 from './header/Header2'
import Header3 from "./header/Header3"
import Header4 from "./header/Header4"
import Header5 from "./header/Header5"

import Footer1 from './footer/Footer1'
import Footer2 from './footer/Footer2'
import Footer3 from './footer/Footer3'
import Footer4 from './footer/Footer4'
import Footer5 from './footer/Footer5'

export default function Layout({ headerStyle, footerStyle, breadcrumbTitle, children, wrapperCls }) {
    const [scroll, setScroll] = useState(false)
    const [isMobileMenu, setMobileMenu] = useState(false)
    const [isPopup, setPopup] = useState(false)
    const [isSidebar, setSidebar] = useState(false)

    const handleMobileMenu = () => {
        setMobileMenu(!isMobileMenu)
        document.body.classList.toggle("mobile-menu-visible", !isMobileMenu)
    }

    const handlePopup = () => setPopup(!isPopup)
    const handleSidebar = () => setSidebar(!isSidebar)

    useEffect(() => {
        if (typeof window !== "undefined") {
          import('wowjs').then(({ WOW }) => {
            const wowInstance = new WOW({ live: false });
            wowInstance.init();
          });
        }
      
        const handleScroll = () => {
          const scrollCheck = window.scrollY > 100;
          setScroll(scrollCheck);
        };
      
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
      

    const headerProps = {
        scroll,
        isMobileMenu,
        handleMobileMenu,
        handlePopup,
        isSidebar,
        handleSidebar
    }

    const renderHeader = () => {
        switch (headerStyle) {
            case 1: return <Header1 {...headerProps} />
            case 2: return <Header2 {...headerProps} />
            case 3: return <Header3 {...headerProps} />
            case 4: return <Header4 {...headerProps} />
            case 5: return <Header5 {...headerProps} />
            default: return <Header1 {...headerProps} />
        }
    }

    const renderFooter = () => {
        switch (footerStyle) {
            case 1: return <Footer1 />
            case 2: return <Footer2 />
            case 3: return <Footer3 />
            case 4: return <Footer4 />
            case 5: return <Footer5 />
            default: return <Footer1 />
        }
    }

    return (
        <>
            <DataBg />
            <div className={`page-wrapper ${wrapperCls || ""}`} id="top">
                {renderHeader()}
                <Sidebar isSidebar={isSidebar} handleSidebar={handleSidebar} />
                <SearchPopup isPopup={isPopup} handlePopup={handlePopup} />
                {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}
                {children}
                {renderFooter()}
            </div>
            <BackToTop scroll={scroll} />
        </>
    )
}
