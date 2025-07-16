import VideoPopup from "@/components/elements/VideoPopup"

export default function Working() {
  return (
    <>
        <section className="working-section bg-color-2">
            <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-3.png)" }}></div>
            <div className="auto-container">
                <div className="sec-title centred light">
                    <h6>How It’s Work</h6>
                    <h2>Deep Dive into Evaluation</h2>
                </div>
                <div className="inner-container">
                    <div className="video-inner">
                        <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-2.png)" }}></div>
                        <span className="big-text">Process</span>
                        <h5>Evaluation</h5>
                        <div className="video-btn">
                            <VideoPopup />
                        </div>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 working-block">
                            <div className="working-block-one">
                                <div className="icon-box"><img src="assets/images/icons/icon-10.png" alt=""/></div>
                                <h6>Step #1</h6>
                                <div className="inner-box">
                                    <h3>Trading Challenge</h3>
                                    <p>Nor again is there anyone who loves or pursues or desires to obtain pain all itself because it is pain.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 working-block">
                            <div className="working-block-one">
                                <div className="icon-box"><img src="assets/images/icons/icon-10.png" alt=""/></div>
                                <h6>Step #2</h6>
                                <div className="inner-box">
                                    <h3>Verified & Trade</h3>
                                    <p>One rejects, dislikes avoids pleasure itself, because it is pleasure but those who do not know pain.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 working-block">
                            <div className="working-block-one">
                                <div className="icon-box"><img src="assets/images/icons/icon-10.png" alt=""/></div>
                                <h6>Step #3</h6>
                                <div className="inner-box">
                                    <h3>Get Paid</h3>
                                    <p>Ever undertakes laborious physical exercise except obtain all advantages from ight to find.</p>
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
