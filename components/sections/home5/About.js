import Link from "next/link"

export default function About() {
  return (
    <>
        <section className="about-style-four sec-pad centred">
            <div className="auto-container">
                <div className="sec-title">
                    <h6>About TM9FX</h6>
                    <h2>Pioneers in <br />proprietary forex trading</h2>
                </div>
                <div className="inner-box">
                    <div className="award-box">
                        <figure className="badge"><img src="assets/images/icons/badge-1.png" alt=""/></figure>
                        <span>Global Forex Awards <br />Mar, 2023</span>
                    </div>
                    <div className="text-box">
                        <p>Our forex company offers cutting-edge trading solutions, expert analysis, & exceptional customer support, empowering traders to thrive in the dynamic foreign exchange market.</p>
                        <figure className="signature"><img src="assets/images/icons/signature-1.png" alt=""/></figure>
                        <h5>Jack Santiago, <span>Ceo & Founder</span></h5>
                    </div>
                    <div className="award-box">
                        <figure className="badge"><img src="assets/images/icons/badge-2.png" alt=""/></figure>
                        <span>Best Customer Service <br />Jun, 2022</span>
                    </div>
                </div>
                <div className="links-box">
                    <ul className="links-list"> 
                        <li><Link href="/index-5"><span>+</span>Company Story</Link></li>
                        <li><Link href="/index-5"><span>+</span>Our Promise</Link></li>
                        <li><Link href="/index-5"><span>+</span>Our Core Values</Link></li>
                    </ul>
                </div>
            </div>
        </section>

    </>
  )
}
