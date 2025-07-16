import Layout from "@/components/layout/Layout";
import "@/public/assets/css/color5.css"; // ✅ correct path to CSS

import Banner from "@/components/sections/home5/Banner";
import About from "@/components/sections/home5/About";
import Highlights from "@/components/sections/home5/Highlights";
import Funding from "@/components/sections/home5/Funding";
import Offer from "@/components/sections/home5/Offer";
import Pricing from "@/components/sections/home2/Pricing";
import Working from "@/components/sections/home5/Working";
import Profit from "@/components/sections/home5/Profit";
import Subscribe from "@/components/sections/home5/Subscribe";
import News from "@/components/sections/home5/News";

export default function Home_5() {
  return (
    <div className="boxed_wrapper home_5">
      <Layout headerStyle={5} footerStyle={5}>
        <Banner />
        <About />
        <Highlights />
        <Funding />
        <Offer />
        <Pricing />
        <Working />
        <Profit />
        <Subscribe />
        <News />
      </Layout>
    </div>
  );
}
