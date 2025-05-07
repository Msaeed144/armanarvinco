import AboutUsDescription from "@/components/AboutUsDescription"
import AboutUsLanding from "@/components/AboutUsLanding"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import BreadCrumb from "@/components/‌‌BreadCrumb"

function AboutUsPage() {
  return (
    <div>
        <div className=" relative">
            <div className=" w-full bg-[url('/images/pics/aboutusPage.jpg')] bg-cover backdrop-blur-3xl h-96 relative">
            <div className=" bg-black  backdrop-blur-sm w-full h-full opacity-50">
            </div>
            <div className=" absolute top-0 w-full">
                <Header />
                <div className="mt-16 px-4 lg:px-24 text-white">
                    <h3 className="font-bold text-2xl lg:text-4xl">درباره ما</h3>
                </div>
                <div className="lg:px-24 px-4 mt-6">
                    <BreadCrumb />
                </div>
            </div>
            </div>
        </div>
        <AboutUsLanding />
        <AboutUsDescription />
        <Footer />
    </div>
  )
}

export default AboutUsPage