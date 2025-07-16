import Link from "next/link"

export default function Platform() {
  return (
    <>
      <section className="platform-section sec-pad bg-color-4">
            <div className="bg-color"></div>
            <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-10.png)" }}></div>
            <div className="auto-container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                        <div className="image-box">
                            <figure className="image"><img src="assets/images/resource/mockup-1.png" alt=""/></figure>
                            <div className="text-1"><h6>Multiple Charting</h6></div>
                            <div className="text-2"><h6>News Feed</h6></div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content-box">
                            <div className="sec-title">
                                <h6>Platform</h6>
                                <h2>Use MT4? Get exclusive tools with ZyntraFX</h2>
                            </div>
                            <div className="text-box">
                                <p>Denouncing pleasure and praising pain was born and  will give you a complete account of the system, and expound the actual teachings .</p>
                                <ul className="list-style-three clearfix">
                                    <li>Ultra fast trade execution <span>01</span></li>
                                    <li>Trading from a smartphone or tablet <span>02</span></li>
                                    <li>No dealing desk, no requotes <span>03</span></li>
                                </ul>
                                <Link href="/index-2" className="theme-btn btn-two"><span>Start Trading</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
