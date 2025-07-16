import Link from "next/link";
import Image from "next/image";

export default function Menu() {
  return (
    <>
      <div
        className="menu-wrapper"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {/* ✅ Logo */}
        <div className="logo" style={{ marginRight: "40px" }}>
          <Link href="/index-2">  {/* 👈 Changed to index-2 */}
            <Image
              src="/assets/images/logo9.png"
              alt="Logo"
              width={160}
              height={200}
              priority
              style={{ height: "50px", width: "auto", objectFit: "contain" }}
            />
          </Link>
        </div>

        {/* ✅ Navigation */}
        <ul className="navigation clearfix">
          <li>
            <Link href="/index-2">Home</Link>  {/* 👈 Direct link to index-2 (no dropdown) */}
          </li>

          <li className="dropdown">
            <Link href="#">About</Link>
            <ul>
              <li><Link href="/about">About Company</Link></li>
            </ul>
          </li>

          <li className="dropdown">
            <Link href="#">Trading platforms</Link>
            <ul>
              <li>
                <a href="https://trademaster9.com/secure/client/#" target="_blank" rel="noopener noreferrer">
                  Window Trader
                </a>
              </li>
              <li>
                <a href="https://apps.apple.com/in/app/metatm9/id6479883955" target="_blank" rel="noopener noreferrer">
                  iOS App
                </a>
              </li>
              <li>
                <a href="https://play.google.com/store/apps/details?id=com.tm9.playapp&pli=1" target="_blank" rel="noopener noreferrer">
                  Android App
                </a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <Link href="#">Faq</Link>
            <ul>
              <li><Link href="/faq">Faq’s</Link></li>
            </ul>
          </li>

          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
    </>
  );
}