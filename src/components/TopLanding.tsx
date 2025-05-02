import Header from "./Header"
import Image from "next/image"
function TopLanding() {
  return (
    <div className="w-full  px-0">
<div className="  bg-[url('/images/pics/landingPic.jpg')] bg-cover pb-48">
<div className=" bg-black lg:block hidden  backdrop-blur-sm w-full h-full opacity-30 absolute z-0 p-22">
        
        </div>
      <Header />
      <div className="lg:container  mx-auto flex justify-end mt-28">
        <div className=" text-white z-10  ">
          <h1 className="lg:ml-0 ml-4 lg:text-5xl text-[22px] font-extrabold">شرکت مهندسی آرمان آروین پارتاک</h1>
          <p className="lg:text-xl text-sm mt-4 ">باید یک متن دلخواه برای اینجا داشته باشیم که این فضا پر بشه</p>
          <p className="text-lg mt-4 font-light">برای اینجا هم همینطور باید پر بشه</p>
          <div className="flex justify-end mt-4 ml-12">
            <div className="flex bg-primary w-fit p-0.5 rounded-md cursor-pointer">
              <Image src="/images/icons/up-right-arrow.svg" width={30} height={30} alt="فلش" />
              <span className="py-1 px-2 rounded-md bg-white text-black text-lg font-light">پروژه های ما</span>
            </div>
          </div>
        </div>
      </div>
      <div className="z-10 lg:flex justify-around container mx-auto lg:mt-48 mt-12 text-white">
        <div className=" z-10 flex items-center gap-2">
         <Image src="/images/icons/tick.svg" width={20} height={20} alt="تیک" />
          <p>طراحی و مهندسی، مشاوره و عیب یابی</p>
        </div>
        <div className="z-10 flex items-center gap-2">
        <Image src="/images/icons/tick.svg" width={20} height={20} alt="تیک" />
        <p>تامین و ساخت تجهیزات آب و فاضلاب</p>
        </div>
        <div className=" z-10 flex items-center gap-2">
        <Image src="/images/icons/tick.svg" width={20} height={20} alt="تیک" />
        <p className="text-[11px] lg:text-base">اجرای پروژه‌های تصفیه آب، پساب و فاصلاب های صنعتی و بهداشتی</p>
        </div>
        
      </div>
      
    </div>

    </div>
    
  )
}

export default TopLanding