import EquipmentSupplySection from "@/components/EquipmentSupplySection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BreadCrumb from "@/components/‌‌BreadCrumb";
import React from "react";
import { Metadata } from "next"
export const metadata :Metadata = {
    title:"تامین تجهیزات"
}
function EquipmentSupply() {
  return (
    <div>
      <div className=" relative">
        <div className=" w-full bg-[url('/images/pics/aboutusPage.jpg')] bg-cover backdrop-blur-3xl h-96 relative">
          <div className=" bg-black  backdrop-blur-sm w-full h-full opacity-50"></div>
          <div className=" absolute top-0 w-full">
            <Header />
            <div className="mt-16 lg:px-24 px-3 text-white">
              <h3 className="font-bold text-2xl lg:text-4xl">تامین تجهیزات</h3>
            </div>
            <div className="lg:px-24 px-3 mt-6">
              <BreadCrumb />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mb-6">
          <EquipmentSupplySection />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default EquipmentSupply;
