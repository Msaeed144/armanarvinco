import Image from "next/image"
function Services() {
  return (
    <div className="w-full mb-12">
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
                    <h4 className=" md:my-2 md:ml-0 ml-4 text-lg md:text-4xl text-white">خدمات مهندسی در حوزه</h4>
                    <h5 className=" md:mt-6 text-xl md:text-4xl text-white font-bold">آب و فاضلاب</h5>
                </div>
            </div>
            <div className="md:w-1/2 w-full">
                <p className="md:leading-9 leading-6 text-white text-justify mt-6 md:text-base text-sm font-bold">ساختار اصلی شرکت متشکل از واحدهای فنی و مهندسی، بازرگانی و تامین، ساخت و تولید و همچنین فروش و توسعه بازار می‌باشد که با به کارگیری کارشناسان با تجربه و توانمند در تمامی بخش‌ها موجب ارائه خدمات با کیفیت و امکان ارائه قیمت‌های رقابتی به کارفرمایان گردیده است.</p>
            </div>
        </div>
        <div className="w-full flex justify-center md:relative overflow-x-auto">
            <div className=" md:container md:max-auto md:w-4/5 w-full bg-white -bottom-24 md:absolute p-4 rounded-2xl shadow-2xl  flex md:flex-row items-center justify-around">
                <div>
                <div className="md:w-24 w-20 mdh-24 h-20 flex justify-center md:mt-0 mt-4">
                <Image src="/images/icons/design.svg" width={60} height={60} alt="تیک" />
                    </div>
                    <p className="md:text-base text-xs text-center mt-4">طراحی</p>
                </div>
                <div className="w-[1px] h-28 bg-gray-300 md:block hidden"></div>
                <div>
                <div className="md:w-24 w-20 mdh-24 h-20 flex justify-center">
                <Image className="mt-4" src="/images/icons/supply.svg" width={80} height={80} alt="تیک" />
                    </div>
                    <p className="md:text-base text-xs text-center mt-4">تامین تجهیزات</p>
                </div>
                <div className="w-[1px] h-28 bg-gray-300 md:block hidden"></div>
                <div>
                <div className="md:w-24 w-20 mdh-24 h-20 flex justify-center">
                <Image src="/images/icons/launch.svg" width={60} height={60} alt="تیک" />
                    </div>
                    <p className="md:text-base text-xs text-center mt-4">نصب و راه اندازی</p>
                </div>
                <div className="w-[1px] h-28 bg-gray-300 md:block hidden"></div>
                <div>
                <div className="md:w-24 w-20 mdh-24 h-20 flex justify-center">
                <Image src="/images/icons/usage.svg" width={60} height={60} alt="تیک" />
                    </div>
                    <p className="md:text-base text-xs text-center mt-4">بهره برداری</p>
                </div>
                <div className="w-[1px] h-28 bg-gray-300 md:block hidden"></div>
                <div>
                <div className="md:w-24 w-20 mdh-24 h-20 flex justify-center">
                        <Image src="/images/icons/consult.svg" width={60} height={60} alt="تیک" />
                    </div>
                    <p className="md:text-base text-xs text-center mt-4">مشاوره و عیب یابی</p>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Services