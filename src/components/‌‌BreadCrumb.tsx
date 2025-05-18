"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

function BreadCrumb() {
  const pathName = usePathname();
  const splitPathName = pathName.split("/");
  useEffect(() => {
    console.log(splitPathName);
  }, []);
  const pathNameHandler = () => {
    if (pathName == "/about-us") {
      return "درباره ما";
    } else if (pathName == "/contact-us") {
      return "تماس با ما";
    } else if (pathName == "/projects") {
      return "پروژه ها";
    }else if (pathName == "/equipment-supply"){
      return "تامین تجهیزات"
    } else if (pathName =="/designing"){
      return "طراحی"
    } else if (pathName == "/Installation-setup"){
      return "نصب و راه اندازی"
    }else if (pathName == "/operation"){
      return "بهره برداری"
    }else if (pathName == "/consulting-troubleshooting"){
      return "مشاوره و عیب یابی"
    }else if (pathName == "/services"){
      return "خدمات و محصولات"
    } else if (splitPathName.length > 2 && splitPathName[1]=="projects" ) {
      const x = `پروژه شماره `;
      const y = splitPathName[2];
      return x + y;
    } else if (splitPathName.length >2 && splitPathName [1]=="services") {
      if(splitPathName[2]=="equipment-supply"){
        return "تامین تجهیزات"
      }else if (splitPathName[2]=="designing"){
        return "طراحی"
      }else if(splitPathName[2]=="Installation-setup"){
        return "نصب و راه اندازی"
      }else if (splitPathName[2]=="operation"){
        return "بهره برداری"
      }else if (splitPathName[2]=="consulting-troubleshooting"){
        return  "مشاوره و عیب یابی"
      }
    }
  };
  return (
    <div>
      <ul className=" flex items-center text-xl">
        <li className="text-white">
          <Link href={"/"}>خانه</Link>{" "}
        </li>
        <li>
          <div className="flex gap-2 items-center mx-3 text-primary">
            {splitPathName.length == 2 && (
              <>
                <div>
                  <Image
                    src="/images/icons/left-white-arrow.svg"
                    width={15}
                    height={15}
                    alt="left"
                  />
                </div>
                <div>
                  <Link className="lg:text-xl text-lg" href={pathName}>
                    {pathNameHandler()}
                  </Link>
                </div>
              </>
            )}
            {splitPathName.length == 3 &&splitPathName[1]=="projects" && (
              <>
                <div>
                  <Image
                    src="/images/icons/left-white-arrow.svg"
                    width={15}
                    height={15}
                    alt="left"
                  />
                </div>
                <div className="text-white">
                  <Link className=" text-lg lg:text-xl" href="/projects">
                    پروژه ها
                  </Link>
                </div>
                <div>
                  <Image
                    src="/images/icons/left-white-arrow.svg"
                    width={15}
                    height={15}
                    alt="left"
                  />
                </div>
                <div>
                  <Link className=" text-lg lg:text-xl" href={pathName}>
                    {pathNameHandler()}
                  </Link>
                </div>
              </>
            )}
             {splitPathName.length == 3 &&splitPathName[1]=="services" && (
               <>
               <div>
                 <Image
                   src="/images/icons/left-white-arrow.svg"
                   width={15}
                   height={15}
                   alt="left"
                 />
               </div>
               <div className="text-white">
                 <Link className=" text-lg lg:text-xl" href="/services">
                   خدمات و محصولات
                 </Link>
               </div>
               <div>
                 <Image
                   src="/images/icons/left-white-arrow.svg"
                   width={15}
                   height={15}
                   alt="left"
                 />
               </div>
               <div>
                 <Link className=" text-lg lg:text-xl" href={pathName}>
                   {pathNameHandler()}
                 </Link>
               </div>
             </>
             )}

          </div>
        </li>
      </ul>
    </div>
  );
}

export default BreadCrumb;
