import Link from "next/link"

export default function Video() {
  return (
    <>
      <section className="video-section bg-color-7">
            <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-26.png)" }}></div>
            <div className="auto-container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12 video-column">
                        <div className="video-content">
                            <div className="video-inner">
                                <div className="bg-layer" style={{ backgroundImage: "url(assets/images/background/video-bg.jpg)" }}></div>
                                <div className="video-btn">
                                    <Link href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s" className="lightbox-image" data-caption=""><img src="assets/images/icons/icon-56.png" alt=""/></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content-box">
                            <div className="sec-title">
                                <h6>Video Tutorial</h6>
                                <h2>Curated forex training video series</h2>
                            </div>
                            <div className="text-box">
                                <h3>Introduction to forex trading</h3>
                                <h6>Duration: 6.05 Mins</h6>
                                <p>Watch our forex trading videos to get the most from the markets & become a profitable forex trader.</p>
                                <Link href="/index-4" className="theme-btn btn-two"><span>More Videos</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
