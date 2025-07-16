'use client'
import { useState } from "react"
import Link from "next/link"

export default function Offer() {

    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
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
        <section className="offer-style-three">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                        <div className="image-box">
                            <figure className="image"><img src="assets/images/resource/offer-1.jpg" alt=""/></figure>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content-box">
                            <div className="sec-title">
                                <h6>What we Offer</h6>
                                <h2>Support for <br />trading excellence</h2>
                            </div>
                            <ul className="accordion-box">
                                <li className={isActive.key == 1 ? "accordion block current" : "accordion"}>
                                    <div className="icon-box"><i className="flaticon-right-arrow-1"></i></div>
                                    <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>
                                        <h5>01</h5>
                                        <h3>Proprietary Trading Accounts</h3>,
                                    </div>
                                    <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                        <div className="text">
                                            <p>Step into the realm of financial wizardry with TM9FX Funding an trading oasis that nurtures the brilliance of skilled.</p>
                                            <ul className="links-list clearfix">
                                                <li><Link href="/index-5">Mini Account</Link></li>
                                                <li><Link href="/index-5">Demo Account</Link></li>
                                                <li><Link href="/index-5">Micro Account</Link></li>
                                                <li><Link href="/index-5">Standard Account</Link></li>
                                                <li><Link href="/index-5">STP Account</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className={isActive.key == 2 ? "accordion block current" : "accordion"}>
                                    <div className="icon-box"><i className="flaticon-right-arrow-1"></i></div>
                                    <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}>
                                        <h5>02</h5>
                                        <h3>Trading Platforms and Tools</h3>
                                    </div>
                                    <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                        <div className="text">
                                            <p>Step into the realm of financial wizardry with TM9FX Funding an trading oasis that nurtures the brilliance of skilled.</p>
                                            <ul className="links-list clearfix">
                                                <li><Link href="/index-5">Mini Account</Link></li>
                                                <li><Link href="/index-5">Demo Account</Link></li>
                                                <li><Link href="/index-5">Micro Account</Link></li>
                                                <li><Link href="/index-5">Standard Account</Link></li>
                                                <li><Link href="/index-5">STP Account</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className={isActive.key == 3 ? "accordion block current" : "accordion"}>
                                    <div className="icon-box"><i className="flaticon-right-arrow-1"></i></div>
                                    <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}>
                                        <h5>03</h5>
                                        <h3>Trade Monitoring and Support</h3>
                                    </div>
                                    <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                        <div className="text">
                                            <p>Step into the realm of financial wizardry with TM9FX Funding an trading oasis that nurtures the brilliance of skilled.</p>
                                            <ul className="links-list clearfix">
                                                <li><Link href="/index-5">Mini Account</Link></li>
                                                <li><Link href="/index-5">Demo Account</Link></li>
                                                <li><Link href="/index-5">Micro Account</Link></li>
                                                <li><Link href="/index-5">Standard Account</Link></li>
                                                <li><Link href="/index-5">STP Account</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
  )
}
