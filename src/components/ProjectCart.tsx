import Image from "next/image"
import Link from "next/link"
interface ProjectCartType {
    title:string,
    banerImage:string,
    id:number
}
function ProjectCart({id , title , banerImage}:ProjectCartType) {
  return (
    <Link className="my-2 hover:font-bold h-64" href={`/projects/${id}`}>
        <div className="lg:w-96 h-96 w-72 p-2">
          <div>
          <Image className="hover:shadow-2xl rounded-2xl" src={banerImage} width={550} height={300} alt={title} />

          </div>
            <p>{title}</p>
        </div>
    </Link>
  )
}

export default ProjectCart