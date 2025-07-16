import Link from "next/link"

export default function Highlights() {
  return (
    <>
      <section className="highlights-section centred">
            <div className="auto-container">
                <div className="sec-title light">
                    <h6>Key Highlights</h6>
                    <h2>Reasons for choosing us</h2>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 highlights-block">
                        <div className="highlights-block-one">
                            <div className="inner-box">
                                <div className="icon-box"><img src="assets/images/icons/icon-57.png" alt=""/></div>
                                <h3><Link href="/index-4">Friendly & Expert</Link></h3>
                                <p>Beatae vitae dicta sun explicabo enim it psam voluptatem volupta.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 highlights-block">
                        <div className="highlights-block-one">
                            <div className="inner-box">
                                <div className="icon-box"><img src="assets/images/icons/icon-58.png" alt=""/></div>
                                <h3><Link href="/index-4">24/7 Support</Link></h3>
                                <p>Dolore magnam aliquam quaer autem enim ad minima veniam.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 highlights-block">
                        <div className="highlights-block-one">
                            <div className="inner-box">
                                <div className="icon-box"><img src="assets/images/icons/icon-59.png" alt=""/></div>
                                <h3><Link href="/index-4">Demo Account</Link></h3>
                                <p>Omnis iste natus error sit volup minima that accusantium doloremque.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 highlights-block">
                        <div className="highlights-block-one">
                            <div className="inner-box">
                                <div className="icon-box"><img src="assets/images/icons/icon-60.png" alt=""/></div>
                                <h3><Link href="/index-4">Award Winner</Link></h3>
                                <p>Omnis iste natus error sit volup minima that accusantium doloremque.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 highlights-block">
                        <div className="highlights-block-one">
                            <div className="inner-box">
                                <div className="icon-box"><img src="assets/images/icons/icon-61.png" alt=""/></div>
                                <h3><Link href="/index-4">Best Profit Split</Link></h3>
                                <p>Beatae vitae dicta sun explicabo enim it psam voluptatem volupta.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 highlights-block">
                        <div className="highlights-block-one">
                            <div className="inner-box">
                                <div className="icon-box"><img src="assets/images/icons/icon-62.png" alt=""/></div>
                                <h3><Link href="/index-4">No Hidden Rules</Link></h3>
                                <p>Dolore magnam aliquam quaer autem enim ad minima veniam.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
