import Link from "next/link"

export default function About() {
  return (
    <>
      <section className="about-section bg-color-1">
            <div className="auto-container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                        <div className="image-box">
                            <figure className="image image-1"><img src="assets/images/resource/about-1.jpg" alt=""/></figure>
                            <figure className="image image-2"><Link href="assets/images/resource/dashboard-1.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/resource/dashboard-1.jpg" alt=""/></Link></figure>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content-box">
                            <div className="sec-title">
                                <h6>About TM9FX</h6>
                                <h2>Pioneers in proprietary forex trading</h2>
                            </div>
                            <div className="text-box">
                                <p>Step into the realm of financial wizardry with Fxvibe Funding an exclusive trading oasis that nurtures the brilliance of skilled trad- ers yearning to amplify their fortunes despite the constraints of capital.</p>
                            </div>
                            <div className="inner-box">
                                <h3>Specialization</h3>
                                <p>Indignations and dislikes mens who are beguiled</p>
                                <ul className="list-style-one clearfix">
                                    <li>Automated Trading</li>
                                    <li>High-Frequency Trading</li>
                                    <li>Technical Analysis</li>
                                </ul>
                            </div>
                            <div className="btn-box">
                                <Link href="/about" className="theme-btn"><span>More About Us</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
