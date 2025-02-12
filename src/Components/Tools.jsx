import React from 'react'
import { motion } from "framer-motion"
import { ArrowBigUpDashIcon } from 'lucide-react'

const Tools = () => {
    return (
        <>
            <div className="mb-12">
                <h1 className="text-7xl font-bold mb-4">TECHNICAL</h1>
                <h2 className="text-7xl font-bold text-gray-700 mb-8">TOOLS</h2>
                <p className="text-gray-400 text-xl max-w-2xl">
                    Passionate about creating intuitive and engaging user experiences.
                    Specialize in transforming ideas into beautifully crafted products.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
                    <div className="flex items-center gap-4 group cursor-pointer">
                        <div className="bg-white rounded-lg p-3 w-16 h-16 flex items-center justify-center">
                            <img src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' alt="" className="w-10 h-10" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-white group-hover:text-gray-300 transition-colors">
                                React
                            </h3>
                            <p className="text-zinc-500">React frontemd</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 group cursor-pointer">
                        <div className="bg-white rounded-lg p-3 w-16 h-16 flex items-center justify-center">
                            <img src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' alt="" className="w-10 h-10" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-white group-hover:text-gray-300 transition-colors">
                                React
                            </h3>
                            <p className="text-zinc-500">React frontemd</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 group cursor-pointer">
                        <div className="bg-white rounded-lg p-3 w-16 h-16 flex items-center justify-center">
                            <img src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' alt="" className="w-10 h-10" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-white group-hover:text-gray-300 transition-colors">
                                React
                            </h3>
                            <p className="text-zinc-500">React frontemd</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 group cursor-pointer">
                        <div className="bg-white rounded-lg p-3 w-16 h-16 flex items-center justify-center">
                            <img src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' alt="" className="w-10 h-10" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-white group-hover:text-gray-300 transition-colors">
                                React
                            </h3>
                            <p className="text-zinc-500">React frontemd</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 group cursor-pointer">
                        <div className="bg-white rounded-lg p-3 w-16 h-16 flex items-center justify-center">
                            <img src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' alt="" className="w-10 h-10" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-white group-hover:text-gray-300 transition-colors">
                                React
                            </h3>
                            <p className="text-zinc-500">React frontemd</p>
                        </div>
                    </div>
               
            </div>
        </>
    )
}

export default Tools