import React from 'react';
import { Link } from 'react-router-dom';

const Project = () => {
  return (
    <section className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-black mb-12 text-center">
          My Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-black mb-4">Project Title</h3>
              <p className="text-gray-700 mb-4">
                A brief description of your project. Highlight the main features and technologies used.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">MongoDB</span>
              </div>
              <div className="flex space-x-4">
                <Link to="/" className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
                  Live Demo
                </Link>
                <Link to="/" className="px-4 py-2 border border-black text-black rounded-md hover:bg-gray-100 transition-colors">
                  Source Code
                </Link>
              </div>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-black mb-4">Project Title</h3>
              <p className="text-gray-700 mb-4">
                A brief description of your project. Highlight the main features and technologies used.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">MongoDB</span>
              </div>
              <div className="flex space-x-4">
                <Link to="/" className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
                  Live Demo
                </Link>
                <Link to="/" className="px-4 py-2 border border-black text-black rounded-md hover:bg-gray-100 transition-colors">
                  Source Code
                </Link>
              </div>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-black mb-4">Project Title</h3>
              <p className="text-gray-700 mb-4">
                A brief description of your project. Highlight the main features and technologies used.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">MongoDB</span>
              </div>
              <div className="flex space-x-4">
                <Link to="/" className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
                  Live Demo
                </Link>
                <Link to="/" className="px-4 py-2 border border-black text-black rounded-md hover:bg-gray-100 transition-colors">
                  Source Code
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project; 