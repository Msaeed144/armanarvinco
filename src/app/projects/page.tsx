import Footer from "@/components/Footer"
import Header from "@/components/Header"
import ProjectsList from "@/components/ProjectsList"
import BreadCrumb from "@/components/‌‌BreadCrumb"

function Projects () {
    return (
        <div>
             <div className=" relative">
                <div className=" w-full bg-[url('/images/pics/aboutusPage.jpg')] bg-cover backdrop-blur-3xl h-96 relative">
                <div className=" bg-black  backdrop-blur-sm w-full h-full opacity-50">
                </div>
                <div className=" absolute top-0 w-full">
                    <Header />
                    <div className="mt-16 px-24 text-white">
                        <h3 className="font-bold text-4xl">پروژه های ما</h3>
                    </div>
                    <div className="px-24 mt-6">
                        <BreadCrumb />
                    </div>
                </div>
                </div>
            </div>
            <div>
                <ProjectsList />
                <Footer />
            </div>
        </div>
    )
}
export default Projects