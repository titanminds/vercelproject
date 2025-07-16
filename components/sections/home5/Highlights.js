import Link from "next/link"

export default function Highlights() {
  return (
    <>
        <section className="highlights-style-two">
            <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-31.png)" }}></div>
            <div className="auto-container">
                <div className="sec-title centred light">
                    <h6>Key Highlights</h6>
                    <h2>Choose us for <br />unmatched reliability</h2>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 highlights-block">
                        <div className="highlights-block-two wow fadeInLeft animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <h2>01</h2>
                                <h3><Link href="/index-5">90% Virtual Profit Split</Link></h3>
                                <p>Beatae vitae dicta sun explicabo enim it readable psam voluptatem volupta.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 highlights-block">
                        <div className="highlights-block-two wow fadeInRight animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <h2>02</h2>
                                <h3><Link href="/index-5">Leverage 1:100</Link></h3>
                                <p>The wise man therefore always holds these matters to this principle of selection.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 highlights-block">
                        <div className="highlights-block-two wow fadeInLeft animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <h2>03</h2>
                                <h3><Link href="/index-5">Bi-Monthly Payouts</Link></h3>
                                <p>The wise man therefore always holds these matters to this principle of selection.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 highlights-block">
                        <div className="highlights-block-two wow fadeInRight animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <h2>04</h2>
                                <h3><Link href="/index-5">1-step Evaluation</Link></h3>
                                <p>Beatae vitae dicta sun explicabo enim it readable psam voluptatem volupta.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
