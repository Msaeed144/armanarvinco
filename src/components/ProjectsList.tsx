import { projects } from '@/data'
import React from 'react'
import ProjectCart from './ProjectCart'

function ProjectsList() {
  return (
    <div className=' container mx-auto mt-12 flex justify-center' >
        <div className=' grid md:grid-cols-2 grid-cols-1 lg:gap-24'>
                {projects.map(project => (
                    <div key={project.id} className=''>
                        <ProjectCart id={project.id} title={project.title} banerImage={project.banerImage} />
                    </div>
                ))}
        </div>
    </div>
  )
}

export default ProjectsList