import Link from "next/link"

export default function Clients() {
  return (
    <>
        <section className="clients-section sec-pad bg-color-5 centred">
            <div className="auto-container">
                <div className="sec-title">
                    <h6>We are Featured in</h6>
                    <h2>On Featured Platforms</h2>
                </div>
                <ul className="clients-list clearfix">
                    <li><Link href="/index-3"><img src="assets/images/clients/clients-7.png" alt=""/></Link></li>
                    <li><Link href="/index-3"><img src="assets/images/clients/clients-8.png" alt=""/></Link></li>
                    <li><Link href="/index-3"><img src="assets/images/clients/clients-9.png" alt=""/></Link></li>
                    <li><Link href="/index-3"><img src="assets/images/clients/clients-10.png" alt=""/></Link></li>
                    <li><Link href="/index-3"><img src="assets/images/clients/clients-11.png" alt=""/></Link></li>
                    <li><Link href="/index-3"><img src="assets/images/clients/clients-12.png" alt=""/></Link></li>
                    <li><Link href="/index-3"><img src="assets/images/clients/clients-13.png" alt=""/></Link></li>
                    <li><Link href="/index-3"><img src="assets/images/clients/clients-14.png" alt=""/></Link></li>
                </ul>
            </div>
        </section>
    </>
  )
}
