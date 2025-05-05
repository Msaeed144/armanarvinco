import Image from "next/image";
import Link from "next/link";

function AboutUsLanding() {
  return (
    <div className="pb-32 relative">
      <div className=" absolute bottom-0 left-0">
        <Image
          src="/images/pics/aboutus-landing-paint.png"
          width={900}
          height={900}
          alt="نیروگاه"
        />
      </div>
      <div className="w-full pt-28 pb-20 lg:pb-0 lg:px-0 px-4">
        <div className=" lg:container lg:mx-auto lg:flex flex-row-reverse justify-center">
          <div className="lg:w-1/2 text-right">
            <div className="flex gap-1">
              <Image
                src="/images/icons/tick.svg"
                width={17}
                height={17}
                alt="تیک"
              />
              <p className=" text-xl">درباره ما</p>
            </div>
            <h3 className=" text-2xl md:text-4xl my-8">شرکت مهندسی آرمان آروین پارتاک</h3>
            <p className=" text-xl md:text-2xl font-bold my-8">طراحی و مهندسی، مشاوره و عیب یابی </p>
            <p className=" font-light my-8">ساختار اصلی شرکت متشکل از واحدهای فنی و مهندسی، بازرگانی و تامین، ساخت و تولید و همچنین فروش و توسعه بازار می‌باشد</p>
            <div className="flex mt-10">
                <div>
                <ul className="mt-5">
                    <li className="flex gap-2 my-3">
                        <Image src="/images/icons/tick.svg" width={17} height={17} alt="تیک"/>
                        <p className="font-extralight text-sm">مشاوره و عیب یابی</p>
                    </li>
                    <li className="flex gap-2 my-3">
                        <Image src="/images/icons/tick.svg" width={17} height={17} alt="تیک"/>
                        <p className="font-extralight text-sm">تامین تجهیزات آب و فاضلاب</p>
                    </li>
                    <li className="flex gap-2 my-3">
                        <Image src="/images/icons/tick.svg" width={17} height={17} alt="تیک"/>
                        <p className="font-extralight text-sm">ساخت تجهیزات آب و فاضلاب</p>
                    </li>
                    <li className="flex gap-2 my-3">
                        <Image src="/images/icons/tick.svg" width={17} height={17} alt="تیک"/>
                        <p className="font-extralight text-sm">اجرای پروژه‌های تصفیه آب، پساب و فاضلاب های صنعتی و بهداشتی</p>
                    </li>
                </ul>
                <Link href="/projects" className="flex bg-primary w-fit p-0.5 rounded-md cursor-pointer mt-5">
                              <Image src="/images/icons/up-right-arrow.svg" width={30} height={30} alt="فلش" />
                              <span className="py-1 px-2 rounded-md bg-white text-black z-10 text-lg font-light">پروژه های ما</span>
                            </Link>
                </div>

                <div className="w-44 h-44 z-10 bg-[#F5F5F5] rounded-lg p-4 mr-5 mt-3 ">
                    <p className="text-center text-5xl mt-3 mb-6 text-primary">71+</p>
                    <p className=" text-center font-bold text-base md:text-lg ">پروژه انجام شده</p>
                </div>
            </div>
          </div>
          <div className="lg:w-1/2 ml-8 lg:mb-0 mb-20 gl:mt-0 mt-7  lg:block hidden ">
            <div className=" relative mr-32 lg:mr-0 lg:ml-12 ">
                <div className="flex gap-3  lg:gap-7 items-center p-8 tajrobeh ">
                    <p className="lg:text-5xl text-3xl mt-1 text-primary font-bold">10+</p>
                    <div className="lg:block flex lg:text-2xl text-xl">
                    <p className="lg:mb-2 mb-0">سال</p>
                    <p className="lg:mt-2 mt-0">تجربه</p>
                  </div>
                </div>
                <div className="lg:absolute lg:top-0 lg:left-0">
                <div className=" lg:relative lg:w-full">
                        <Image className=" rounded-3xl" src="/images/pics/about-pic1.jpg" width={380} height={380} alt="سایت" />
                        <div className=" absolute top-2/3 left-1/2 w-full border-8 rounded-3xl border-white"> 
                        <Image className=" rounded-3xl" src="/images/pics/about-pic2.jpg" width={450} height={450} alt="سایت" />
                        </div>

                </div>
                </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsLanding;
