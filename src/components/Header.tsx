"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function Header() {
  const [hamber, setHamber] = useState(false);
  useEffect(() => {
    console.log(hamber);
  }, [hamber]);

  return (
    <header className="relative w-full py-5 bg-cover bg-center" style={{ backgroundImage: "url('/images/your-background.jpg')" }}>
      {/* لایه گرادینت */}
      <div className="absolute lg:block hidden inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent"></div>

      {/* محتوای هدر */}
      <div className="relative z-10 container mx-auto flex justify-between items-center">
        <ul className="header md:flex items-center gap-7 text-xl hidden">
          <li><Link href="/">خانه</Link></li>
          <li><Link href="/projects">پروژه ها</Link></li>
          <li><Link href="/services">خدمات و محصولات</Link></li>
          <li><Link href="/about-us">درباره ما</Link></li>
          <li><Link href="/contact-us">تماس با ما</Link></li>
        </ul>

        <div className={`z-20 w-72 h-screen ${hamber ? "block" : "hidden"} z-50 transition-all bg-white absolute -right-4 -top-5`}>
          <ul className="items-center gap-12 text-xl mt-[6.5rem] mr-8 text-primary">
            <li className="mb-4 mt-8"><Link href="/">خانه</Link></li>
            <li className="my-4"><Link href="/projects">پروژه ها</Link></li>
            <li><Link href="/services">خدمات و محصولات</Link></li>
            <li className="my-4"><Link href="/about-us">درباره ما</Link></li>
            <li className="my-4"><Link href="/contact-us">تماس با ما</Link></li>
          </ul>
        </div>

        <div
          className="md:hidden z-50 block cursor-pointer mt-8 mr-4"
          onClick={() => setHamber(!hamber)}
        >
          <div className={`w-7 my-1 h-1 rounded-md transition-all duration-300 ${hamber ? "rotate-45 translate-y-2 bg-primary" : "bg-white"}`}></div>
          <div className={`w-7 my-1 h-1 rounded-md transition-all duration-300 ${hamber ? "opacity-0 bg-primary" : "opacity-100 bg-white"}`}></div>
          <div className={`w-7 my-1 h-1 rounded-md transition-all duration-300 ${hamber ? "-rotate-45 -translate-y-2 bg-primary" : "bg-white"}`}></div>
        </div>

        <Link href="/">
          <Image
            className="ml-4"
            src="/images/pics/header-logo.png"
            width={120}
            height={60}
            alt="logo"
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
