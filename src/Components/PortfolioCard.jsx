import React from 'react'
import { Home, Folder, Briefcase, Key, Edit, Flame, HomeIcon, FolderCheckIcon, BriefcaseIcon, KeyIcon, Edit2, FolderArchive, PenTool, Settings, KeyRoundIcon, Wrench, Bolt } from 'lucide-react';
import Card from './Card';
const PortfolioCard = () => {
  return (
    <div>
      <div className=" bg-[#1A1A1A] text-white p-4">
        {/* Top Navigation */}

        <div className="flex justify-center sticky top-2.5 mb-12">
          <nav className="flex  bg-gray-300/20 backdrop-blur-md w-80 justify-center rounded-full gap-6 p-4">
            <div className="relative group">
              <Home className="w-6 h-6" />
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-90 transition-opacity duration-200">
                <div className="bg-gray-800 backdrop-blur-md text-white text-sm py-1 px-4 rounded-full whitespace-nowrap">
                  Home
                </div>
              </div>
            </div>
            <div className="relative group">
              <Folder className="w-6 h-6" />
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="bg-gray-800 text-white text-sm py-1 px-2 rounded-full whitespace-nowrap">
                  Projects
                </div>
              </div>
            </div>
            <div className="relative group">
              <Briefcase className="w-6 h-6" />
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="bg-gray-800 text-white text-xs py-1 px-2 rounded-full whitespace-nowrap">
                  Experince
                </div>
              </div>
            </div>
            <div className="relative group">
              <Wrench className="w-6 h-6" />
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="bg-gray-800 text-white text-sm py-1 px-2 rounded-full whitespace-nowrap">
                  Tools
                </div>
              </div>
            </div>
            <div className="relative group">
              <Bolt className="w-6 h-6" />
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="bg-gray-800 text-white text-sm py-1 px-2 rounded-full whitespace-nowrap">
                  Thoughts
                </div>
              </div>
            </div>
          </nav>
        </div>

        {/* Main Content */}

        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-[400px]">
              <div className="sticky top-24">
                <div className="bg-white rounded-3xl p-6 w-full max-w-md">
                  <div className="aspect-square rounded-2xl overflow-hidden mb-6 bg-[#FF4500]">
                    <img
                      src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=800&auto=format&fit=crop&q=80"
                      alt="Profile"
                      className="w-full h-full object-cover mix-blend-multiply"
                    />
                  </div>
                  <h2 className="text-black text-3xl font-bold mb-2">Altaaf Ali Idrishi</h2>
                  <div className="flex items-center gap-2 mb-4">
                    <Flame className="w-5 h-5 text-[#FF4500]" />
                  </div>
                  <p className="text-gray-600 text-sm">
                    A Software Engineer who has developed countless innovative solutions.
                  </p>
                </div>
              </div>

              
            </div>
            <div className="flex-1">
            <div className="mb-12">
              <h1 className="text-7xl font-bold mb-4">SOFTWARE</h1>
              <h2 className="text-7xl font-bold text-gray-700 mb-8">ENGINEER</h2>
              <p className="text-gray-400 text-xl max-w-2xl">
                Passionate about creating intuitive and engaging user experiences.
                Specialize in transforming ideas into beautifully crafted products.
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-12 mb-12">
              <div>
                <h3 className="text-5xl font-bold mb-2">+12</h3>
                <p className="text-gray-500">YEARS OF<br />EXPERIENCE</p>
              </div>
              <div>
                <h3 className="text-5xl font-bold mb-2">+46</h3>
                <p className="text-gray-500">PROJECTS<br />COMPLETED</p>
              </div>
              <div>
                <h3 className="text-5xl font-bold mb-2">+20</h3>
                <p className="text-gray-500">WORLDWIDE<br />CLIENTS</p>
              </div>
            </div>

            <Card />


            <div className="mb-12">
              <h1 className="text-7xl font-bold mb-4">RECENT</h1>
              <h2 className="text-7xl font-bold text-gray-700 mb-8">PROJECTS</h2>
              <p className="text-gray-400 text-xl max-w-2xl">
                Passionate about creating intuitive and engaging user experiences.
                Specialize in transforming ideas into beautifully crafted products.
              </p>
            </div>

          </div>
          </div>
        </div>


        {/* Made with Framer Badge */}
        <div className="fixed bottom-6 right-6">
          <div className="bg-white text-black px-4 py-2 rounded-full text-sm">
            Made in Framer
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioCard