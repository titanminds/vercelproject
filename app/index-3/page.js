import Layout from "@/components/layout/Layout";
import "@/public/assets/css/color3.css"; // ✅ Correct way to import CSS

import Banner from "@/components/sections/home3/Banner";
import Funfact from "@/components/sections/home3/Funfact";
import About from "@/components/sections/home3/About";
import Pricing from "@/components/sections/home3/Pricing";
import Cta from "@/components/sections/home3/Cta";
import Platform from "@/components/sections/home3/Platform";
import News from "@/components/sections/home3/News";
import Chooseus from "@/components/sections/home3/Chooseus";
import Working from "@/components/sections/home3/Working";
import Testimonial from "@/components/sections/home3/Testimonial";
import Clients from "@/components/sections/home3/Clients";

export default function Home_3() {
    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={3} footerStyle={3}>
                <Banner />
                <Funfact />
                <About />
                <Pricing />
                <Cta />
                <Platform />
                <News />
                <Chooseus />
                <Working />
                <Testimonial />
                <Clients />
            </Layout>
        </div>
    );
}
