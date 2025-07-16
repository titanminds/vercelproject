import Link from "next/link"

export default function Breadcrumb({ breadcrumbTitle }) {
    return (
        <>

        <section className="page-title">
            <div className="bg-layer" style={{ backgroundImage: 'url(assets/images/background/page-title.jpg)' }}></div>
            <div className="auto-container">
                <div className="content-box">
                    <h1>{breadcrumbTitle}</h1>
                    <ul className="bread-crumb clearfix">
                        <li><Link href="/">Home</Link></li>
                        <li><span>{breadcrumbTitle}</span></li>
                    </ul>
                </div>
            </div>
        </section>

        </>
    )
}
