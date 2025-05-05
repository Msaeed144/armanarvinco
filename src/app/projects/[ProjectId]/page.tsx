import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ProjectPageBanner from '@/components/ProjectPageBanner';
import BreadCrumb from '@/components/‌‌BreadCrumb';
import { projects } from '@/data';
import { notFound } from 'next/navigation';
import React from 'react'
interface Props {
    params: Promise<{ ProjectId: string }>;
  }
async function Project({params}:Props) {
    const { ProjectId } = await params; 
    const project = projects.find((item)=> item.id == Number(ProjectId))
    if (!project) {
        notFound();
        return null; 
      }
  return (
    <div>
       <div>
             <div className=" relative">
                <div className=" w-full bg-[url('/images/pics/aboutusPage.jpg')] bg-cover backdrop-blur-3xl h-96 relative">
                <div className=" bg-black  backdrop-blur-sm w-full h-full opacity-50">
                </div>
                <div className=" absolute top-0 w-full">
                    <Header />
                    <div className="mt-16 px-24 text-white">
                        <h3 className="font-bold text-4xl">پروژه</h3>
                    </div>
                    <div className="px-24 mt-6">
                        <BreadCrumb />
                    </div>
                </div>
                </div>
            </div>
            <div className=''>
              <ProjectPageBanner project={project}/>
              <Footer />
            </div>
        </div>
    </div>
  )
}

export default Project