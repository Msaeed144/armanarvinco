import Image from "next/image";
function ContactUsSection() {
  return (
    <div className=" relative">
      <div className=" absolute bottom-0 left-0">
        <Image
          src="/images/pics/aboutus-landing-paint.png"
          width={700}
          height={700}
          alt="نیروگاه"
        />
      </div>
      <div className=" container mx-auto mt-8">
        <div className="flex gap-8">
          <div className=" mr-24 w-2/5">
            <div className="flex gap-1">
              <Image
                src="/images/icons/tick.svg"
                width={20}
                height={20}
                alt="تیک"
              />
              <p className=" text-black text-xl">ارتباط با ما</p>
            </div>
            <div className="mt-3 mr-6">
              <h4 className=" text-xl my-4">با ما در ارتباط با شید...</h4>
              <p>
                با هر یک از راه های زیر می توانید با ما در ارتباط باشید و از
                خدمات شرکت ما بهره ببیرید.
              </p>
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
                  <div className="mr-8">
                    <p className="mb-2">تلفن تماس</p>
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
                  <div className="mr-8">
                    <p className="mb-2">ایمیل</p>
                    <p className="text-gray-500">info@domainname.com</p>
                  </div>
                </div>
                <hr className=" opacity-30" />
                <div className="flex items-center my-6">
                  <div className="p-3 bg-primary rounded-2xl w-16">
                    <Image
                      src="/images/icons/location.svg"
                      width={50}
                      height={50}
                      alt="تماس تلفنی"
                    />
                  </div>
                  <div className="mr-8">
                    <p className="mb-2">ایمیل</p>
                    <p className="text-gray-500">info@domainname.com</p>
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
export default ContactUsSection;
