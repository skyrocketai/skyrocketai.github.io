import React from 'react'
import Bg_front from "../assets/aibg.jpg"
import logo from "../assets/skyrocket.png"

function Splash() {
    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center" style={{
            backgroundImage: `url(${Bg_front})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            backgroundRepeat: 'no-repeat'
        }}>
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
            <div className="relative z-10 flex flex-col items-center animate-fade-in">
                <div className="w-92 h-92 md:w-106 md:h-106 mb-8 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-indigo-500/10 rounded-full animate-pulse"></div>
                    <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-20 blur-xl animate-spin-slow"></div>
                    <img
                        src={logo}
                        alt="logo"
                        className="relative w-full h-full rounded-2xl p-2 hover:scale-105 transition-transform duration-300 animate-float"
                    />
                </div>

            </div>
        </div>
    )
}

export default Splash