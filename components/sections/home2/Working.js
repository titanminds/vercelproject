import VideoPopup from "@/components/elements/VideoPopup"

export default function Working() {
  return (
    <>
        <section className="working-style-two bg-color-4">
            <div className="auto-container">
                <div className="sec-title">
                    <h6>How It’s Work</h6>
                    <h2>Deep dive into evaluation</h2>
                    <div className="video-inner">
                        <VideoPopup />
                        <h5>Play this video for <br />forex success</h5>
                    </div>
                </div>
                <div className="inner-container">
                    <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-9.png)" }}></div>
                    <div className="row clearfix">
                        <div className="col-lg-3 col-md-6 col-sm-12 working-block">
                            <div className="working-block-two">
                                <div className="inner-box">
                                    <div className="text-box">
                                        <h3>Sign Up</h3>
                                        <p>Start your trading journey with ZYNTRAFX. Create your free account to access secure crypto, forex, and stock trading tools. Fast signup. No hidden fees.</p>
                                    </div>
                                    <div className="decore"></div>
                                    <div className="step"><h6>Step 01</h6></div>
                                    <div className="icon-box"><img src="assets/images/icons/icon-20.png" alt=""/></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 working-block">
                            <div className="working-block-two">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-21.png" alt=""/></div>
                                    <div className="step"><h6>Step 02</h6></div>
                                    <div className="decore"></div>
                                    <div className="text-box">
                                        <h3>Sign In</h3>
                                        <p>Securely log in to your ZYNTRAFX account to manage your crypto, forex, FBS, and stock trades. Fast, reliable, and safe user access.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 working-block">
                            <div className="working-block-two">
                                <div className="inner-box">
                                    <div className="text-box">
                                        <h3>Deposit</h3>
                                        <p>Easily fund your ZYNTRAFX account via manual deposit or instant card payment. Start trading crypto, forex, FBS & stocks with flexible funding options.</p>
                                    </div>
                                    <div className="decore"></div>
                                    <div className="step"><h6>Step 03</h6></div>
                                    <div className="icon-box"><img src="assets/images/icons/icon-22.png" alt=""/></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 working-block">
                            <div className="working-block-two">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-23.png" alt=""/></div>
                                    <div className="step"><h6>Step 04</h6></div>
                                    <div className="decore"></div>
                                    <div className="text-box">
                                        <h3>Withdraw</h3>
                                        <p>Withdraw your profits from ZYNTRAFX easily. Submit a withdrawal request and receive funds securely within 6 to 24 hours.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
