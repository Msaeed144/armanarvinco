import Link from "next/link"
import Header from "./Header"
import Image from "next/image"
function TopLanding() {
  return (
    <div className="w-full  px-0">
<div className="  bg-[url('/images/pics/land.jpg')] h-screen bg-cover pb-48">
<div className=" bg-black block   backdrop-blur-sm w-full h-full opacity-20 lg:opacity-45 absolute z-0 p-22">
        
        </div>
      <Header />
      <div className="lg:container  mx-auto flex justify-end mt-12 lg:mt-28">
        <div className=" text-white z-10  ml-12">
          <h1 className="lg:mr-0  mr-4 lg:text-5xl text-[18px] font-extrabold">شرکت مهندسی آرمان آروین پارتاک</h1>
          <p className="lg:text-xl text-sm mt-4 lg:mr-0  mr-4">طراحی، ساخت و اجرای سیستم های تصفیه آب و پساب</p>
          <div className="flex justify-end mt-4 ml-12">
            <Link href="/projects" className="flex bg-primary w-fit p-0.5 rounded-md cursor-pointer">
              <Image src="/images/icons/up-right-arrow.svg" width={30} height={30} alt="فلش" />
              <span className="py-1 px-2 rounded-md bg-white text-black text-lg font-light">پروژه های ما</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="z-30 lg:flex justify-around container mx-auto lg:mt-48 mt-12 pr-3 text-white">
        <div className=" z-10 flex items-center gap-2">
         <Image src="/images/icons/tick.svg" width={20} height={20} alt="تیک" />
          <p className="lg:bg-transparent bg-primary lg:p-0 p-0.5 rounded-3xl lg:my-0 my-0.5">طراحی و مهندسی، مشاوره و عیب یابی</p>
        </div>
        <div className="z-10 flex items-center gap-2">
        <Image src="/images/icons/tick.svg" width={20} height={20} alt="تیک" />
        <p className="lg:bg-transparent bg-primary lg:p-0 p-0.5 rounded-3xl lg:my-0 my-0.5">تامین و ساخت پکیج های تصفیه آب و پساب</p>
        </div>
        <div className=" z-10 flex items-center gap-2">
        <Image src="/images/icons/tick.svg" width={20} height={20} alt="تیک" />
        
        <p className="text-[11px] lg:text-base lg:bg-transparent lg:my-0 my-0.5 bg-primary lg:p-0 p-0.5 rounded-3xl">اجرای پروژه‌های تصفیه آب، پساب و فاصلاب های صنعتی و بهداشتی</p>
        </div>
        
      </div>
      
    </div>

    </div>
    
  )
}

export default TopLanding