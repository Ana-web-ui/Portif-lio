import React from 'react'

const Projects = ({ title, description, image }) => {
    return (
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white hover:scale-105 transition-transform duration-300">
                 <h3 className="text-xl font-semibold text-black mb-2">{title}</h3>
                 <p className="text-gray-600">{description}</p>
                 {image &&(
                    <div className="w-full h-48 rounded-md overflow-hidden mask-contain">
                        <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-contain" />
                        </div>
                 )}
        </div>
    )
}

export default Projects;