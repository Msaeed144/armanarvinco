import Image from "next/image"
import Link from "next/link"
function Services() {
  return (
    <div className="w-full lg:mb12 mb-44">
        <div className=" w-full bg-[url('/images/pics/about-pic1.jpg')] bg-cover backdrop-blur-3xl h-96 relative">
        <div className=" bg-black  backdrop-blur-sm w-full h-full opacity-40">
        
        </div>
        <div className="flex md:flex-row flex-col w-full md:gap-0 gap-3 absolute top-0 md:px-16 px-2 pt-16">
            <div className="md:w-1/2 w-full">
                <div className="flex gap-1">
                    <Image src="/images/icons/tick.svg" width={20} height={20} alt="تیک" />
                    <p className=" font-bold text-white text-xl">خدمات</p>
                </div>
                <div className="md:block flex items-center ">
                    <h4 className=" md:my-2 md:ml-0 ml-4 text-lg md:text-4xl text-white"> طراحی، ساخت و اجرا در حوزه</h4>
                    <h5 className=" md:mt-6 text-xl md:text-4xl text-white font-bold">آب، پساب و فاضلاب</h5>
                </div>
            </div>
            <div className="md:w-1/2 w-full">
                <p className="md:leading-9 leading-6 text-white text-justify mt-6 md:text-base text-sm font-bold">ساختار اصلی شرکت متشکل از واحدهای فنی و مهندسی، بازرگانی و تامین، ساخت و تولید و همچنین فروش و توسعه بازار می‌باشد که با به کارگیری کارشناسان با تجربه و توانمند در تمامی بخش‌ها موجب ارائه خدمات با کیفیت و امکان ارائه قیمت‌های رقابتی به کارفرمایان گردیده است.</p>
            </div>
        </div>
        <div className="w-full flex justify-center md:relative md:overflow-x-visible overflow-x-scroll">
            <div className=" md:container md:max-auto md:w-4/5 w-full bg-white -bottom-24 md:absolute p-4 rounded-2xl lg:shadow-2xl  flex md:flex-row items-center justify-around">
                <Link href="/services/designing" >
                <div className="w-24 h-20 flex justify-center md:mt-0 mt-4">
                <Image src="/images/icons/design.svg" width={60} height={60} alt="تیک" />
                    </div>
                    <p className="md:text-base text-xs text-center mt-4">طراحی</p>
                </Link>
                <div className="w-[1px] h-28 bg-gray-300 md:block hidden"></div>
                <Link href="/services/equipment-supply">
                <div className="w-24  h-20 flex justify-center">
                <Image className="mt-4" src="/images/icons/supply.svg" width={80} height={80} alt="تیک" />
                    </div>
                    <p className="md:text-base text-xs text-center mt-4">تامین تجهیزات</p>
                </Link>
                <div className="w-[1px] h-28 bg-gray-300 md:block hidden"></div>
                <Link href="/services/Installation-setup">
                <div className="w-24  h-20 flex justify-center">
                <Image className="lg:mr-12" src="/images/icons/launch.svg" width={60} height={60} alt="تیک" />
                    </div>
                    <p className="md:text-base text-[10px] text-center mt-4">ساخت، نصب و راه اندازی</p>
                </Link>
                <div className="w-[1px] h-28 bg-gray-300 md:block hidden"></div>
                <Link href="/services/operation">
                <div className="w-24 h-20 flex justify-center">
                <Image src="/images/icons/usage.svg" width={60} height={60} alt="تیک" />
                    </div>
                    <p className="md:text-base text-xs text-center mt-4">بهره برداری</p>
                </Link>
                <div className="w-[1px] h-28 bg-gray-300 md:block hidden"></div>
                <Link href="/services/consulting-troubleshooting">
                <div className="w-24 h-20 flex justify-center">
                        <Image src="/images/icons/consult.svg" width={60} height={60} alt="تیک" />
                    </div>
                    <p className="md:text-base text-xs text-center mt-4">مشاوره و عیب یابی</p>
                </Link>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Services