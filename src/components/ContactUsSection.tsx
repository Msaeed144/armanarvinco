import Image from "next/image";
import Link from "next/link";
function ContactUsSection() {
  return (
    <div className="lg:p-0 p-4 my-20">
      <div className=" lg:container mx-auto mt-8">
        <div className="lg:flex gap-16">
          <div className=" lg:mr-24 mr-0 lg:w-2/5">
            <div className="flex gap-1">
              <Image
                src="/images/icons/tick.svg"
                width={20}
                height={20}
                alt="تیک"
              />
              <p className=" text-black text-xl">ارتباط با ما</p>
            </div>
            <div className="mt-3 lg:mr-6">
              <h4 className=" text-xl my-4">با ما در ارتباط با شید...</h4>
              <p>
                با هر یک از راه های زیر می توانید با ما در ارتباط باشید.</p>
              <div>
              <div className="flex items-center my-6">
                  <div className="p-3 bg-primary rounded-2xl w-16">
                    <Image
                      src="/images/icons/call.svg"
                      width={50}
                      height={50}
                      alt="تماس تلفنی"
                    />
                  </div>
                  <div className="lg:mr-8 mr-2">
                    <p className="mb-2">تلفن تماس دفتر تهران</p>
                    <p className="text-gray-500">021-88873844</p>
                  </div>
                </div>
                <hr className=" opacity-30" />
                <div className="flex items-center my-6">
                  <div className="p-3 bg-primary rounded-2xl w-16">
                    <Image
                      src="/images/icons/call.svg"
                      width={50}
                      height={50}
                      alt="تماس تلفنی"
                    />
                  </div>
                  <div className="lg:mr-8 mr-2">
                    <p className="mb-2">فکس</p>
                    <p className="text-gray-500">021-88873863</p>
                  </div>
                </div>
                <hr className=" opacity-30" />
                <div className="flex items-center my-6">
                  <div className="p-3 bg-primary rounded-2xl w-16">
                    <Image
                      src="/images/icons/fax.svg"
                      width={50}
                      height={50}
                      alt="تماس تلفنی"
                    />
                  </div>
                  <div className="lg:mr-8 mr-2">
                    <p className="mb-2">تلفن تماس دفتر اصفهان</p>
                    <p className="text-gray-500">031-32736139</p>
                  </div>
                </div>
                <hr className=" opacity-30" />
                <div className="flex items-center my-6">
                  <div className="p-3 bg-primary rounded-2xl w-16">
                    <Image
                      src="/images/icons/email.svg"
                      width={50}
                      height={50}
                      alt="تماس تلفنی"
                    />
                  </div>
                  <div className="lg:mr-8 mr-2">
                    <p className="mb-2">ایمیل</p>
                    <p className="text-gray-500">info@armanarvinco.com</p>
                  </div>
                </div>
                <hr className=" opacity-30" />
                <div className="flex items-center my-6">
                  <div className="p-3 bg-primary rounded-2xl w-16">
                    <Image
                      src="/images/icons/linkedin.svg"
                      width={50}
                      height={50}
                      alt="تماس تلفنی"
                    />
                  </div>
                  <div className="lg:mr-8 mr-2">
                    <p className="mb-2">لینکدین</p>
                    <Link href="https://www.linkedin.com/company/arman-arvin-partak/"><p className="text-gray-500">arman-arvin-partak@</p></Link>
                    
                  </div>
                </div>
                <hr className=" opacity-30" />

                <div className="flex items-center my-6">
                  <div className="p-2 bg-primary rounded-2xl w-16">
                    <Image
                      src="/images/icons/instagram-white.svg"
                      width={50}
                      height={50}
                      alt="تماس تلفنی"
                    />
                  </div>
                  <div className="lg:mr-8 mr-2">
                    <p className="mb-2">اینستاگرام</p>
                    <Link               href="https://www.instagram.com/arman.arvin.co/"
                    ><p className="text-gray-500">arman.arvin.co@</p></Link>
                    
                  </div>
                </div>
                <hr className="lg:hidden text-gray-400 mb-8"/>
              </div>
            </div>
          </div>
          <div className=" lg:w-3/5">
          <div className="mb-5">
              <p>دفتر تهران:</p>
              <div className="flex items-center mb-4">
                <Image src="/images/icons/locationIcon.svg" width={20} height={20} alt="لوکیشن" />
                <p className="text-sm pt-2">آدرس دفتر تهران: خیابان ولیعصر، کوچه ساعی دوم، برج سیمای ساعی، پلاک 37، طبقه 2، واحد 5</p>
              </div>
              <Link href="https://balad.ir/location?latitude=35.739193&longitude=51.409498&zoom=16.500000" className="block lg:w-[26rem] w-72 lg:mr-4 bg-white mt-2">
                <Image className="opacity-100 z-40 rounded-xl" src="/images/pics/tehran-loc.png" width={3000} height={400} alt="لوکیشن شرکت" />
              </Link>
            </div>
            <div className="mb-5">
              <p>دفتر اصفهان:</p>
              <div className="flex items-center mb-4">
                <Image src="/images/icons/locationIcon.svg" width={20} height={20} alt="لوکیشن" />
                <p className="text-sm pt-2">اصفهان - خیابان هشت بهشت غربی - چهار راه ملک -پلاک ۱۱۶ - ساختمان روژین - طبقه ۵ واحد ۱۰</p>
              </div>
              <Link href="https://maps.google.com/maps?q=Isfahan%2BProvince%2C%2BIsfahan%2C%2BBozorgmehr%2BSt%2C%2BMM2P%2BVWW%2C%2BIran&sll=32.65223718458522,51.687305979430676" className="block lg:w-[26rem] w-72 lg:mr-4 bg-white mt-2">
                <Image className="opacity-100 z-40 rounded-xl" src="/images/pics/office.png" width={3000} height={400} alt="لوکیشن شرکت" />
              </Link>
            </div>
            <div>
            <p>کارخانه:</p>

              <div className="flex items-center mb-4">
                <Image src="/images/icons/locationIcon.svg" width={20} height={20} alt="لوکیشن" />
                <p className="text-sm pt-2 ">حمزه آباد - خیابان کشاورز - کوچه بنفشه - پلاک ۴</p>
              </div>
              <Link href="https://maps.app.goo.gl/jQtpgk8D9KzZCjFt5?g_st=aw" className=" z-50 block lg:w-[26rem] w-72  lg:mr-4 bg-white mt-2">
                <Image className="opacity-100 z-40 rounded-xl" src="/images/pics/factory.png" width={3000} height={400} alt="لوکیشن شرکت" />
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContactUsSection;
