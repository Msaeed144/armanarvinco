import { ProjectType } from "./ProjectPageBanner"

function ProjectGallery({ project }: { project: ProjectType }) {
  return (
    <div className="flex lg:flex-row flex-col items-center container mx-auto justify-center">
        {project.images.map(image=>
            <div className="w-80">
                <img src={image} alt="" />
            </div>
        )}
    </div>
  )
}

export default ProjectGallery