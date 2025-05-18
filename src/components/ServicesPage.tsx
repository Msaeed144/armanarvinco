import Image from "next/image"
import Link from "next/link"
function ServicesPage() {
  return (
    <div className="flex justify-center">
        <div className="lg:flex gap-16">
                <div className="my-4">
                    <Image className="mb-4" src="/images/icons/design.svg" width={160} height={160} alt="طراحی" />
                    <Link href="/designing" className=" block w-fit border border-primary px-12 text-primary hover:bg-primary hover:text-white transition-all ease-in 200 duration-200 py-1 rounded-xl">مشاهده</Link>
                </div>
                <div className="my-4">
                    <Image className="mb-4" src="/images/icons/supply.svg" width={160} height={160} alt="طراحی" />
                    <Link href="/equipment-supply" className=" block w-fit border border-primary px-12 text-primary hover:bg-primary hover:text-white transition-all ease-in 200 duration-200 py-1 rounded-xl">مشاهده</Link>
                </div>
                <div className="my-4">
                    <Image className="mb-4" src="/images/icons/launch.svg" width={160} height={160} alt="طراحی" />
                    <Link href="/Installation-setup" className=" block w-fit border border-primary px-12 text-primary hover:bg-primary hover:text-white transition-all ease-in 200 duration-200 py-1 rounded-xl">مشاهده</Link>
                </div>
                <div className="my-4">
                    <Image className="mb-4" src="/images/icons/usage.svg" width={160} height={160} alt="طراحی" />
                    <Link href="/operation" className=" block w-fit border border-primary px-12 text-primary hover:bg-primary hover:text-white transition-all ease-in 200 duration-200 py-1 rounded-xl">مشاهده</Link>
                </div>
                <div className="my-4">
                    <Image className="mb-4" src="/images/icons/consult.svg" width={160} height={160} alt="طراحی" />
                    <Link href="/consulting-troubleshooting" className=" block w-fit border border-primary px-12 text-primary hover:bg-primary hover:text-white transition-all ease-in 200 duration-200 py-1 rounded-xl">مشاهده</Link>
                </div>
            </div>
    </div>
    
  )
}

export default ServicesPage