import React from "react";
import contactImage from "../assets/contact.jpg";
import { useLanguage } from '../context/LanguageContext';

function Contact() {
    const { language } = useLanguage();

    if (language === 'en') {
        return (
            <div className="max-w-6xl mx-auto p-6 pb-20 flex flex-col sm:pt-24">
                <h2 className="text-4xl text-white font-bold mb-8 pb-10 text-center bg-gradient-to-r from-blue-600 to-teal-400 text-transparent bg-clip-text">
                    Contact
                </h2>
                <div className="relative">
                    {/* Image */}
                    <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px]">
                        <img
                            src={contactImage}
                            alt="Contact"
                            className="w-full h-full object-cover rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-500"
                        />
                    </div>

                    {/* Contact Info - Positioned on top */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md px-4">
                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl px-6 py-8 border border-white/30 hover:border-blue-400/50 transition-all duration-500">
                            <div className="flex flex-col justify-center space-y-6">
                                <div className="flex flex-col space-y-6">
                                    <a
                                        href="mailto:info@skyrocket.ai"
                                        className="text-white hover:text-blue-400 transition-all duration-300 flex items-center justify-center text-lg sm:text-xl lg:text-2xl group"
                                    >
                                        <svg className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                        info@skyrocket.ai
                                    </a>
                                    <a
                                        href="tel:+4915752657540"
                                        className="text-white hover:text-blue-400 transition-all duration-300 flex items-center justify-center text-lg sm:text-xl lg:text-2xl group"
                                    >
                                        <svg className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                        </svg>
                                        +49 157 52657540
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto p-6 pb-20 flex flex-col sm:pt-24">
            <h2 className="text-4xl text-white font-bold mb-8 pb-10 text-center bg-gradient-to-r from-blue-600 to-teal-400 text-transparent bg-clip-text">
                Kontakt
            </h2>
            <div className="relative">
                {/* Image */}
                <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px]">
                    <img
                        src={contactImage}
                        alt="Contact"
                        className="w-full h-full object-cover rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-500"
                    />
                </div>

                {/* Contact Info - Positioned on top */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md px-4">
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl px-6 py-8 border border-white/30 hover:border-blue-400/50 transition-all duration-500">
                        <div className="flex flex-col justify-center space-y-6">
                            <div className="flex flex-col space-y-6">
                                <a
                                    href="mailto:info@skyrocket.ai"
                                    className="text-white hover:text-blue-400 transition-all duration-300 flex items-center justify-center text-lg sm:text-xl lg:text-2xl group"
                                >
                                    <svg className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                    info@skyrocket.ai
                                </a>
                                <a
                                    href="tel:+4915752657540"
                                    className="text-white hover:text-blue-400 transition-all duration-300 flex items-center justify-center text-lg sm:text-xl lg:text-2xl group"
                                >
                                    <svg className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                    +49 157 52657540
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
