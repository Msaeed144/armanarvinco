import Image from "next/image"
interface ProjectType {
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
            <div className="mx-auto text-center">
            <h3 className="text-2xl mb-4 font-bold">{project.title}</h3>
            <p className="my-4">{project.description}</p>
            </div>
            <div className="flex justify-center">
                <Image src={project.banerImage} width={500} height={500} alt={project.title} />
            </div>
        </div>
    </div>
  )
}

export default ProjectPageBanner