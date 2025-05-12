import Image from "next/image";
import Link from "next/link";
function Footer() {
  return (
    <div className=" md:p-24 p-4 relative bg-[#222222]">
      <div className=" absolute bottom-0 left-0">
        <Image
          src="/images/pics/footer-back.png"
          width={900}
          height={900}
          alt="فوتر"
        />
      </div>
      <div className="text-white">
        <h4 className=" text-3xl">آماده همکاری با ما هستید؟</h4>
        <p className="my-8 leading-6">
          به ما بپیوندید تا راهکارهای صنعتی پیشرفته‌ای را تجربه کنید که نوآوری و
          موفقیت پایدار را به ارمغان می‌آورند.
        </p>
        <hr className=" opacity-30 my-8" />
      </div>
      <div className=" md:flex justify-between text-white">
        <div className="flex md:gap-20 gap-4">
          <div>
            <p className="font-bold text-sm md:text-xl">دسترسی سریع</p>
            <Link className=" block my-3" href="/">
              خانه
            </Link>
            <Link className=" block my-3" href="/projects">
              پروژه های ما
            </Link>
            <Link className=" block my-3" href="/contact-us">
              ارتباط با ما
            </Link>
            <Link className=" block my-3" href="/about-us">
              درباره ما
            </Link>
          </div>
          <div>
            <p className=" font-bold text-sm md:text-xl">پیوند های مرتبط</p>
            <Link className="md:text-base text-sm block my-3" href="https://www.tpww.ir/">
              شرکت آب و فاضلاب تهران
            </Link>
            <Link className=" block my-3" href="https://www.moe.gov.ir/">
              وزارت نیرو
            </Link>
          </div>
        </div>
        <div className="md:w-1/3 w-full md:block flex items-center gap-2">
          <div className="flex items-center gap-8">
            <Image
              src="/images/pics/header-logo.png"
              width={120}
              height={60}
              alt="logo"
            />
            <p className="font-bold text-lg md:block hidden text-justify">شرکت مهندسی آرمان آروین پارتاک</p>
          </div>
          <div>
          <p className="md:mt-4 md:text-base text-sm mt-10">
            ما متعهد به ارائه راهکارهای صنعتی شخصی‌سازی‌شده در حوزه آب و فاضلاب
            هستیم هستیم.
          </p>
          <div className=" flex gap-4 justify-end px-8 py-2 ">
            <Link
              href="https://www.instagram.com/arman.arvin.co/"
              className="z-10 p-2 border rounded-full border-zinc-700"
            >
              <Image
                src="/images/icons/insta.svg"
                width={20}
                height={20}
                alt="logo"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/company/arman-arvin-partak//"
              className="z-10 p-2 border rounded-full border-zinc-700"
            >
              <Image
                src="/images/icons/linkedin-orange.svg"
                width={20}
                height={20}
                alt="logo"
              />
            </Link>
          </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
