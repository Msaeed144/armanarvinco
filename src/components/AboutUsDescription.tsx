import Image from "next/image"
function AboutUsDescription() {
  return (
    <div className="container mx-auto mt-6">
        <div className="flex lg:flex-row flex-col-reverse">
            <div className="lg:w-1/3 w-full">
            <div className="flex flex-col items-center">
            <div><Image className="rounded-lg my-2" src="/images/pics/aboutUsPage/about-us-pic1.jpg" width={330} height={330} alt="درباره ما" /></div>
                <div><Image className="rounded-lg my-2" src="/images/pics/aboutUsPage/about-us-pic2.jpg" width={330} height={330} alt="درباره ما" /></div>
                <div><Image className="rounded-lg my-2" src="/images/pics/aboutUsPage/about-us-pic3.jpg" width={330} height={330} alt="درباره ما" /></div>
            </div>

            </div>
            <div className="lg:w-2/3 w-full lg:p-0 p-4">
                <h3 className="text-3xl font-bold mb-4">درباره ما</h3>
                <p className="text-lg leading-8 mb-4 text-justify">شرکت آرمان آروین پارتاک توسط جمعی از متخصصین صنعت آب و فاضلاب کشور تاسیس گردید و با تکیه بر تجارب و دانش فنی خود با هدف ارائه خدمات نوین در زمینه تصفیه آب، پساب و فاضلاب، شیرین سازی آب‌های لب شور و آب دریا و بازچرخانی پساب صنایع مختلف نفتی (پالایشگاهی و پتروشیمی)، فولادی، نیروگاهی، شهرک‌های صنعتی، صنایع تخصصی مانند داروسازی و نساجی، اقدام به ارائه خدمات مهندسی، بازرگانی، ساخت، اجرا و بهره برداری در حوزه‌های تکنولوژی اسمز معکوس (RO)، اولترافیلتراسیون (UF)، الکترودیونیزاسیون (EDI)، سیستم های رزینی (IX)، انواع فیلترهای کارتریج، فیلترهای شنی، کربن فعال و خودشوینده (Self-Cleaning Filter)، سیستم‌های تصفیه فاضلاب صنعتی و بهداشتی، پکیج‌های MBR، MBBR و DAF، سیستم های ضدعفونی آب و پساب شامل ازن زنی و اکسیداسیون پیشرفته (AOP) و همچنین پکیج تزریق مواد شیمیایی مانند PAC، پلی‌الکترولیت‌ها، کلروفریک و غیره نموده است. </p>
                <p className="text-lg leading-8 mb-4 text-justify">     ساختار اصلی شرکت متشکل از واحدهای فنی و مهندسی، بازرگانی و تامین، ساخت و تولید و همچنین فروش و توسعه بازار می‌باشد که با به کارگیری کارشناسان با تجربه و توانمند در تمامی بخش‌ها موجب ارائه خدمات با کیفیت و امکان ارائه قیمت‌های رقابتی به کارفرمایان گردیده است.</p>
                <p className="text-lg leading-8 mb-4 text-justify">     همچنین کارخانه ساخت شرکت، امکان ساخت انواع پکیج و مونتاژ تجهیزات مطابق آخرین استانداردهای صنعت آب و فاضلاب توسط تکنسین‌های مجرب با رعایت کامل موارد ایمنی را فراهم ساخته است.</p>
                <p className="text-lg leading-8 mb-4 text-justify">     این شرکت بر اساس تجارب سالیان قبل مدیران آن بر روی موضوعات زیرسرمایه گذاری نموده است :</p>
                <ul className=" list-disc mr-8">
                    <li className="my-2">طراحی، ساخت و اجرای تصفیه خانه های آب، پساب و فاضلاب</li>
                    <li className="my-2">طراحی و ساخت دستگاه‌های شیرین‌سازی آب لب شور و آب دریا</li>
                    <li className="my-2">تامین قطعات و تجهیزات مورد نیاز سیستم‌های تصفیه آب و فاضلاب</li>
                    <li className="my-2">طراحی و اجرای طرح توسعه سیستم‌های بازچرخانی آب و پساب</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default AboutUsDescription