import Layout from "@/components/layout/Layout"
import Funfact from "@/components/sections/home1/Funfact"
import Banner from "@/components/sections/home1/Banner"
import Service from "@/components/sections/home1/Service"
import About from "@/components/sections/home1/About"
import Working from "@/components/sections/home1/Working"
import Funding from "@/components/sections/home1/Funding"
import Pairs from "@/components/sections/home1/Pairs"
import Chooseus from "@/components/sections/home1/Chooseus"
import Testimonial from "@/components/sections/home1/Testimonial"
import Featured from "@/components/sections/home1/Featured"
import News from "@/components/sections/home1/News"

export default function Home() {
    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1}>
                <Banner />
                <Service />
                <Funfact />
                <About />
                <Working />
                <Funding />
                <Pairs />
                <Chooseus />
                <Testimonial />
                <Featured />
                <News />
            </Layout>
        </div>
    )
}
