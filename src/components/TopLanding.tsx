import Header from "./Header"
import Image from "next/image"
function TopLanding() {
  return (
    <div className=" w-full h-screen bg-[url('/images/pics/landingPic.jpg')] bg-cover">
      <Header />
      <div className="container mx-auto flex justify-end mt-28">
        <div className="text-5xl text-white font-bold">
          <h1>شرکت مهندسی آرمان آروین پارتاک</h1>
          <p className="text-xl mt-4">باید یک متن دلخواه برای اینجا داشته باشیم که این فضا پر بشه</p>
          <p className="text-lg mt-4 font-light">برای اینجا هم همینطور باید پر بشه</p>
          <div className="flex justify-end mt-4 ml-12">
            <div className="flex bg-primary w-fit p-0.5 rounded-md cursor-pointer">
              <Image src="/images/icons/up-right-arrow.svg" width={30} height={30} alt="فلش" />
              <span className="py-1 px-2 rounded-md bg-white text-black text-lg font-light">پروژه های ما</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-around container mx-auto mt-48 text-white">
        <div className="flex items-center gap-2">
         <Image src="/images/icons/tick.svg" width={20} height={20} alt="تیک" />
          <p>طراحی و مهندسی، مشاوره و عیب یابی</p>
        </div>
        <div className="flex items-center gap-2">
        <Image src="/images/icons/tick.svg" width={20} height={20} alt="تیک" />
        <p>تامین و ساخت تجهیزات آب و فاضلاب</p>
        </div>
        <div className="flex items-center gap-2">
        <Image src="/images/icons/tick.svg" width={20} height={20} alt="تیک" />
        <p>اجرای پروژه‌های تصفیه آب، پساب و فاصلاب های صنعتی و بهداشتی</p>
        </div>
      </div>
    </div>
  )
}

export default TopLanding