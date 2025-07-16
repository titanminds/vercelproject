import Layout from "@/components/layout/Layout";
import "@/public/assets/css/color4.css"; // ✅ Correct CSS import path

import Banner from "@/components/sections/home4/Banner";
import Clients from "@/components/sections/home4/Clients";
import Offers from "@/components/sections/home4/Offers";
import Pairs from "@/components/sections/home1/Pairs";
import Pricing from "@/components/sections/home4/Pricing";
import About from "@/components/sections/home4/About";
import Payout from "@/components/sections/home4/Payout";
import Video from "@/components/sections/home4/Video";
import Highlights from "@/components/sections/home4/Highlights";
import Faq from "@/components/sections/home2/Faq";

export default function Home_4() {
    return (
        <div className="boxed_wrapper home_4">
            <Layout headerStyle={4} footerStyle={4}>
                <Banner />
                <Clients />
                <Offers />
                <Pairs />
                <Pricing />
                <About />
                <Payout />
                <Video />
                <Highlights />
                <Faq />
            </Layout>
        </div>
    );
}
