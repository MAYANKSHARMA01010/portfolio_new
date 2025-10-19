import React from 'react'

export default function Navbar() {
    return (
        <div className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white shadow-md">
            <div>
                <h1 className="text-3xl font-bold text-cyan-400">Mayank</h1>
            </div>
            <div>
                <ul className="flex flex-wrap gap-6 text-lg font-medium">
                    <li><a href="#home" className="hover:text-cyan-400 transition">About</a></li>
                    <li><a href="#about" className="hover:text-cyan-400 transition">Projects</a></li>
                    <li><a href="#education" className="hover:text-cyan-400 transition">Contact</a></li>
                    <li><a href="#skills" className="hover:text-cyan-400 transition">About</a></li>
                    <li><a href="#projects" className="hover:text-cyan-400 transition">Projects</a></li>
                    <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}
