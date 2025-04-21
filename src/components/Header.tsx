import Image from "next/image"
function Header() {
  return (
    <div className=" w-full  py-5">
        <div className="flex container mx-auto justify-between">
            <ul className="header flex items-center gap-12 text-xl ">
                <li>خانه</li>
                <li>پروژه ها</li>
                <li>درباره ما</li>
                <li>تماس با ما</li>
            </ul>
            <div>
                <Image src="/images/pics/header-logo.png" width={120} height={60} alt="logo" />
            </div>
        </div>
    </div>
  )
}

export default Header