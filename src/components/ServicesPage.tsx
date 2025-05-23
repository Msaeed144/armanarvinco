'use client'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
function ServicesPage() {
    const [ design , setDesign ] = useState(false)
    const [ equipment , setEquipment] = useState(false)
    const [ installation , setInstallation ] = useState(false)
    const [ operation , setOperation ] = useState(false)
    const [ consulting , setConsulting] = useState(false)
  return (
    <div className="flex justify-center mb-40 mt-12">
        <div className="lg:flex gap-16">
                <div className="my-4 lg:mb-0 mb-20">
                    <Image className="mb-4" src="/images/icons/design.svg" width={160} height={160} alt="طراحی" />
                    <Link onMouseEnter={()=>setDesign(true)} onMouseLeave={()=>setDesign(false)} href="/services/designing" className=" block  border border-primary w-44 text-center text-black hover:bg-primary hover:text-white transition-all ease-in 200 duration-200 py-1 rounded-xl">{design ?"بیشتر" :"طراحی"}</Link>
                </div>
                <div className="my-4 lg:mb-0 mb-20">
                    <Image className="mb-4" src="/images/icons/supply.svg" width={160} height={160} alt="طراحی" />
                    <Link onMouseEnter={()=>setEquipment(true)} onMouseLeave={()=>setEquipment(false)} href="/services/equipment-supply" className=" block  border border-primary w-44 text-center text-black hover:bg-primary hover:text-white transition-all ease-in 200 duration-200 py-1 rounded-xl">{equipment?"بیشتر":"تامین تجهیزات"}</Link>
                </div>
                <div className="my-4 lg:mb-0 mb-20">
                    <Image className="mb-4" src="/images/icons/launch.svg" width={160} height={160} alt="طراحی" />
                    <Link onMouseEnter={()=>setInstallation(true)} onMouseLeave={()=>setInstallation(false)} href="/services/Installation-setup" className=" block  border border-primary w-44 text-center text-black hover:bg-primary hover:text-white transition-all ease-in 200 duration-200 py-1 rounded-xl">{installation?"بیشتر":"ساخت٬نصب و راه اندازی"}</Link>
                </div>
                <div className="my-4 lg:mb-0 mb-20">
                    <Image className="mb-4" src="/images/icons/usage.svg" width={160} height={160} alt="طراحی" />
                    <Link onMouseEnter={()=>setOperation(true)} onMouseLeave={()=>setOperation(false)} href="/services/operation" className="block  border border-primary w-44 text-center text-black hover:bg-primary hover:text-white transition-all ease-in 200 duration-200 py-1 rounded-xl">{operation?"بیشتر":"بهره برداری"}</Link>
                </div>
                <div className="my-4">
                    <Image className="mb-4" src="/images/icons/consult.svg" width={160} height={160} alt="طراحی" />
                    <Link onMouseEnter={()=>setConsulting(true)} onMouseLeave={()=>setConsulting(false)} href="/services/consulting-troubleshooting" className=" block  border border-primary w-44 text-center text-black hover:bg-primary hover:text-white transition-all ease-in 200 duration-200 py-1 rounded-xl">{consulting?"بیشتر":"مشاوره و عیب یابی"}</Link>
                </div>
            </div>
    </div>
    
  )
}

export default ServicesPage