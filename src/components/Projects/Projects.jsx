import React from 'react'
import { Link } from 'react-router-dom'

const Projects = ({ title, description, image, projectLink }) => {
    return (
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold text-black mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
            {image && (
                <div className="w-full h-48 rounded-md overflow-hidden mask-contain">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-contain"
                    />
                </div>
            )}

            <div className="flex justify-center mt-4">
                <Link 
                    to={projectLink} 
                    className="py-2 px-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg shadow-md transition-colors duration-300 text-center"
                >
                    Ver Projeto
                </Link>
            </div>
        </div>
    )
}

export default Projects;