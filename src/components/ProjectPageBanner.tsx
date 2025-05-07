import Image from "next/image"
export interface ProjectType {
    id:number
    title:string
    description:string
    banerImage:string
    images:string[]
}
function ProjectPageBanner({ project }: { project: ProjectType }) {
  return (
    <div className=' container mx-auto mt-8 mb-12'>
        <div>
            <div className="mx-auto text-center lg:p-0 px-4">
            <h3 className="lg:text-2xl text-lg mb-4 font-bold">{project.title}</h3>
            <p className="my-4">{project.description}</p>
            </div>
            <div className="flex justify-center lg:p-0 px-2">
                <Image src={project.banerImage} width={500} height={500} alt={project.title} />
            </div>
        </div>
    </div>
  )
}

export default ProjectPageBanner