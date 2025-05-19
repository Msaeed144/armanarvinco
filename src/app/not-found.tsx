import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Link from "next/link"

function NotFound() {
  return (
    <div>
    <div className=" relative">
        <div className=" w-full bg-[url('/images/pics/aboutusPage.jpg')] bg-cover backdrop-blur-3xl h-96 relative">
        <div className=" bg-black  backdrop-blur-sm w-full h-full opacity-50">
        </div>
        <div className=" absolute top-0 w-full">
            <Header />
            <div className="mt-16 lg:px-24 px-3 text-white">
                <h3 className="font-bold text-2xl lg:text-4xl">صفحه ی مورد نظر شما یافت نشد</h3>
            </div>

        </div>
        </div>
    </div>
    <div>
        <div className="mb-6">
            <div className=" container mx-auto">
                <p className=" text-2xl mt-16 mb-32">
                ما صفحه ای با این آدرس نداریم. میتونید با رفتن به 
                <Link className="text-primary" href="/"> صفحه ی اصلی </Link>
                 از سایتمون دیدن کنید
                </p>

            </div>
        </div>
        <Footer />
    </div>
</div>  )
}

export default NotFound