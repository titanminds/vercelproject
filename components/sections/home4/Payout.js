import Link from "next/link"

export default function Payout() {
  return (
    <>
        <section className="payout-system">
            <div className="auto-container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content-box">
                            <div className="sec-title">
                                <h6>Payout System</h6>
                                <h2>Maximize gains expect rapid payouts</h2>
                            </div>
                            <div className="inner-box">
                                <ul className="list-item clearfix">
                                    <li>
                                        <div className="icon-box"><i className="flaticon-check-1"></i></div>
                                        <h5>Bank Transfer</h5>
                                        <p>2-5 bank working days</p>
                                    </li>
                                    <li>
                                        <div className="icon-box"><i className="flaticon-check-1"></i></div>
                                        <h5>Payout Ratio</h5>
                                        <p>85:15</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="text-box">
                                <p>Step into the realm of financial wizardry with Fxvibe Funding an exclusive trading oasis that nurtures the brilliance of skilled traders yearning to amplify their fortunes despite the constraints of capital.</p>
                                <Link href="/index-4" className="theme-btn btn-two"><span>Start Now</span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                        <div className="image-box">
                            <figure className="image"><img src="assets/images/resource/men-1.png" alt=""/></figure>
                            <figure className="card-image"><img src="assets/images/resource/card-5.png" alt=""/></figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
