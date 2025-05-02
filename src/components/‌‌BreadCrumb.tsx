'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect } from "react"

function BreadCrumb() {
  const pathName = usePathname()
  useEffect(()=>{
    console.log(pathName)
  },[])
  const pathNameHandler = () =>{
    if (pathName == "/about-us"){
      return "درباره ما"
    }else if (pathName == "/contact-us"){
      return "تماس با ما"
    }
    
  }
  return (
    <div>
      <ul className=" flex items-center text-xl">
        <li className="text-white"><Link href={"/"}>خانه</Link> </li>
        <li>
          <div className="flex gap-2 items-center mx-3 text-primary">
            <div className="mt-2 text-3xl">*</div>
            <div><Link href={pathName}>{pathNameHandler()}</Link></div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default BreadCrumb