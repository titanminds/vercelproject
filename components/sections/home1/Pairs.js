import Link from "next/link"

export default function Pairs() {
  return (
    <>
        <section className="pairs-section sec-pad">
            <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-6.png)" }}></div>
            <div className="image-layer">
                <figure className="image-1"><img src="assets/images/resource/vector-3.png" alt=""/></figure>
                <figure className="image-2"><img src="assets/images/resource/vector-4.png" alt=""/></figure>
            </div>
            <div className="auto-container">
                <div className="sec-title centred">
                    <h6>Popular Pairs</h6>
                    <h2>Top Pairs & Pricing in Market</h2>
                </div>
                <div className="inner-container">
                    <div className="pairs-block-one red-block">
                        <div className="inner-box">
                            <div className="left-column">
                                <div className="icon-box"><i className="flaticon-right-down"></i></div>
                                <ul className="list-item clearfix">
                                    <li>eur</li>
                                    <li><i className="flaticon-exchange"></i></li>
                                    <li>usd</li>
                                </ul>
                                <span className="currency">$1.06199 Usd</span>
                            </div>
                            <div className="right-column">
                                <div className="text">
                                    <span className="currency-rate">+0.04%</span>
                                    <span className="sell">Sell at 1.06199</span>
                                </div>
                                <div className="btn-box"><Link href="/" className="theme-btn"><span>Trade</span></Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="pairs-block-one">
                        <div className="inner-box">
                            <div className="left-column">
                                <div className="icon-box"><i className="flaticon-right-up"></i></div>
                                <ul className="list-item clearfix">
                                    <li>usd</li>
                                    <li><i className="flaticon-exchange"></i></li>
                                    <li>jpy</li>
                                </ul>
                                <span className="currency">$1.22195 Usd</span>
                            </div>
                            <div className="right-column">
                                <div className="text">
                                    <span className="currency-rate">+0.04%</span>
                                    <span className="sell">Sell at 1.06199</span>
                                </div>
                                <div className="btn-box"><Link href="/" className="theme-btn"><span>Trade</span></Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="pairs-block-one">
                        <div className="inner-box">
                            <div className="left-column">
                                <div className="icon-box"><i className="flaticon-right-up"></i></div>
                                <ul className="list-item clearfix">
                                    <li>Gbp</li>
                                    <li><i className="flaticon-exchange"></i></li>
                                    <li>usd</li>
                                </ul>
                                <span className="currency">$1.24100 Usd</span>
                            </div>
                            <div className="right-column">
                                <div className="text">
                                    <span className="currency-rate">+0.05%</span>
                                    <span className="sell">Sell at 1.24350</span>
                                </div>
                                <div className="btn-box"><Link href="/" className="theme-btn"><span>Trade</span></Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="pairs-block-one red-block">
                        <div className="inner-box">
                            <div className="left-column">
                                <div className="icon-box"><i className="flaticon-right-down"></i></div>
                                <ul className="list-item clearfix">
                                    <li>eur</li>
                                    <li><i className="flaticon-exchange"></i></li>
                                    <li>Gbp</li>
                                </ul>
                                <span className="currency">$0.08388 Usd</span>
                            </div>
                            <div className="right-column">
                                <div className="text">
                                    <span className="currency-rate">-0.12%</span>
                                    <span className="sell">Sell at 0.06185</span>
                                </div>
                                <div className="btn-box"><Link href="/" className="theme-btn"><span>Trade</span></Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="more-btn centred">
                        <Link href="/" className="theme-btn btn-two"><span>See More Pairs</span></Link>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
