'use client'
import { useState } from "react"
import CircleText from "../../../components/elements/CircleText"
export default function Faq() {

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
      <section className="faq-section sec-pad">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                        <div className="image-box">
                            <figure className="image"><img src="assets/images/resource/faq-1.png" alt=""/></figure>
                            <div className="text"><h6>24/7 Support</h6></div>
                            <div className="icon-box"><img src="assets/images/icons/icon-29.png" alt=""/></div>
                            <div className="curve-text">
                                <div className="link"><a href="index-2.html"><i className="flaticon-right-arrow-1"></i></a></div>
                                <div className='circle-text'><CircleText text="ask your questions to experts&nbsp;.&nbsp;" radius={70} /></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content-box">
                            <div className="sec-title">
                                <h6>Faq’s</h6>
                                <h2>Common queries & solutions</h2>
                            </div>
                            <ul className="accordion-box">
                                <li className={isActive.key == 1 ? "accordion block current" : "accordion"}>
                                    <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>
                                        <h5>Does ZyntraFX have a good reputation?</h5>
                                    </div>
                                    <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                        <div className="text">
                                            <p>Trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className={isActive.key == 2 ? "accordion block current" : "accordion"}>
                                    <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}>
                                        <h5>How can i start my journey as an ZyntraFx trader?</h5>
                                    </div>
                                    <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                        <div className="text">
                                            <p>Trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className={isActive.key == 3 ? "accordion block current" : "accordion"}>
                                    <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}>
                                        <h5>Who is eligible to join?</h5>
                                    </div>
                                    <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                        <div className="text">
                                            <p>Trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className={isActive.key == 4 ? "accordion block current" : "accordion"}>
                                    <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(4)}>
                                        <h5>Is my income subject to taxation?</h5>
                                    </div>
                                    <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                                        <div className="text">
                                            <p>Trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness.</p>
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
