import { ProjectType } from "./ProjectPageBanner"
import Image from "next/image"
function ProjectGallery({ project }: { project: ProjectType }) {
  return (
    <div className="flex lg:flex-row flex-col items-center container mx-auto justify-center">
        {project.images.map(image=>
            <div key={image} className="w-80">
                <Image src={image} alt="" width={320} height={320}/>
            </div>
        )}
    </div>
  )
}

export default ProjectGallery