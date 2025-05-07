'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import path from "path"
import { useEffect } from "react"

function BreadCrumb() {
  const pathName = usePathname()
  const splitPathName = pathName.split("/")
  useEffect(()=>{
    console.log(splitPathName)
  },[])
  const pathNameHandler = () =>{
    if (pathName == "/about-us"){
      return "درباره ما"
    }else if (pathName == "/contact-us"){
      return "تماس با ما"
    }else if(pathName == "/projects"){
      return "پروژه ها"
    }else if(splitPathName.length>2){
      const x = `پروژه شماره `
      const y = splitPathName[2]
      return x + y
    }
    
  }
  return (
    <div>
      <ul className=" flex items-center text-xl">
        <li className="text-white"><Link href={"/"}>خانه</Link> </li>
        <li>
          <div className="flex gap-2 items-center mx-3 text-primary">
            {
              splitPathName.length==2 &&
                <>
                       <div className="mt-2 text-xl lg:text-3xl">*</div>
                       <div><Link className="lg:text-xl text-lg" href={pathName}>{pathNameHandler()}</Link></div>
                </>
            }
            {
              splitPathName.length ==3 &&
              <>
                  <div className="mt-2 text-xl lg:text-3xl text-white">*</div>
                  <div className="text-white">
                    <Link className=" text-lg lg:text-xl" href="/projects">پروژه ها </Link>
                  </div>
                  <div className="mt-2 text-xl lg:text-3xl">*</div>
                  <div><Link className=" text-lg lg:text-xl" href={pathName}>{pathNameHandler()}</Link></div>
              </>
            }

          </div>
        </li>
      </ul>
    </div>
  )
}

export default BreadCrumb