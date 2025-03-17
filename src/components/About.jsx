import React from "react";
import professor from "../assets/professor.jpg"
import media from "../assets/media.png"
import { useLanguage } from '../context/LanguageContext';
function About() {
    const { language } = useLanguage();
    if (language === 'en') {
        return (
            <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 flex-grow">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-white">About us</h2>
                <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 mb-6 sm:mb-8">
                    <div className="w-full lg:w-1/2">
                        <img
                            src={professor}
                            alt="Patrick Glauner"
                            className="w-full h-[300px] sm:h-[400px] md:h-[580px] object-cover rounded-2xl shadow-2xl border-4 border-blue-500/30 hover:border-blue-600/50 transition-all duration-500"
                        />
                    </div>

                    <div className="w-full lg:w-1/2">
                        <a href="https://www.faz.net/pro/digitalwirtschaft/kuenstliche-intelligenz/wie-ki-das-geschaeftsmodell-der-berater-veraendert-110259837.html"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={media}
                                alt="Patrick Glauner"
                                className="w-full h-[300px] sm:h-[400px] md:h-[580px] object-cover rounded-2xl shadow-2xl border-4 border-blue-500/30 hover:border-blue-600/50 transition-all duration-500"
                            />
                        </a>
                    </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl border border-blue-500/30 hover:border-blue-600/50 transition-all duration-500">
                    <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-4 sm:mb-6 text-white">
                        Dr. <a href="https://www.glauner.info/" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-blue-300">Patrick Glauner</a>  is the Founder & CEO of skyrocket.ai GmbH. He has been ranked by <a href="https://www.cdomagazine.tech/others/article_b520c160-8f30-11ec-a27d-47bbae3602a9.html" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-blue-300">CDO Magazine</a>
                        among the worldwide academic data leaders. In parallel, he is a Full Professor of Artificial Intelligence at Deggendorf Institute of Technology (Germany) since age 30.
                    </p>
                    <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-4 sm:mb-6 text-white">
                        As an expert witness, he advised the parliaments of France, Germany, and Luxembourg. Previously, he was a Fellow at the European Organization for Nuclear Research (CERN), Head of Data Academy at Alexander Thamm GmbH, and headed the corporate AI competence center at Krones Group.
                    </p>
                    <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white">
                        He studied at Imperial College London and is an alumnus of the German National Academic Foundation (Studienstiftung des deutschen Volkes). National and international media regularly feature his work.
                    </p>
                </div>
                <div className="mt-12 sm:mt-16 md:mt-20">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-white">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                        <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl border border-blue-500/30 hover:border-blue-600/50 transition-all duration-500">
                            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">Executive Advisory</h3>
                            <p className="text-base sm:text-lg leading-relaxed text-white">
                                We start by analyzing and discussing optimization potential in your company along your value chain and your product portfolio. Building on this, we work out a suitable AI and digitalization strategy for your company. Together we plan a realistic implementation roadmap and how we can implement it together.
                            </p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl border border-blue-500/30 hover:border-blue-600/50 transition-all duration-500">
                            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">Workshops und Coaching</h3>
                            <p className="text-base sm:text-lg leading-relaxed text-white">
                                Every decision-maker must develop an understanding of AI and digitalization. We offer you a sustainable workshop and coaching concept for your executives and professionals. Our approach's basic principle is that over time we become sparring partners who meet professionally at eye level.
                            </p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl border border-blue-500/30 hover:border-blue-600/50 transition-all duration-500">
                            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">Advisory for Consulting Firms</h3>
                            <p className="text-base sm:text-lg leading-relaxed text-white">
                                We also advise other consulting firms on special topics in the fields of AI and digitalization. We offer assistance in the form of analysis of individual problems, preparation of expert opinions, and optimization of your own consulting services and workshops on AI and digitalization.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }



    return (
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 flex-grow">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-white">Über uns</h2>
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 mb-6 sm:mb-8">
                <div className="w-full lg:w-1/2">
                    <img
                        src={professor}
                        alt="Patrick Glauner"
                        className="w-full h-[300px] sm:h-[400px] md:h-[580px] object-cover rounded-2xl shadow-2xl border-4 border-blue-500/30 hover:border-blue-600/50 transition-all duration-500"
                    />
                </div>

                <div className="w-full lg:w-1/2">
                    <a href="https://www.faz.net/pro/digitalwirtschaft/kuenstliche-intelligenz/wie-ki-das-geschaeftsmodell-der-berater-veraendert-110259837.html"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={media}
                            alt="Patrick Glauner"
                            className="w-full h-[300px] sm:h-[400px] md:h-[580px] object-cover rounded-2xl shadow-2xl border-4 border-blue-500/30 hover:border-blue-600/50 transition-all duration-500"
                        />
                    </a>
                </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl border border-blue-500/30 hover:border-blue-600/50 transition-all duration-500">
                <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-4 sm:mb-6 text-white">
                    Prof. Dr. <a href="https://www.glauner.info/" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-blue-300">Patrick Glauner</a> ist Geschäftsführender Gesellschafter der skyrocket.ai GmbH. Er wird vom <a href="https://www.cdomagazine.tech/others/article_b520c160-8f30-11ec-a27d-47bbae3602a9.html" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-blue-300">CDO Magazine</a> in der Liste der weltweit führenden Professoren im Datenbereich geführt. Parallel dazu ist er seit seinem 30. Lebensjahr Professor für Künstliche Intelligenz an der TH Deggendorf.
                </p>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-4 sm:mb-6 text-white">
                    Als Sachverständiger hat er die Parlamente von Deutschland, Frankreich und Luxemburg beraten. Zuvor war er Fellow bei der Europäischen Organisation für Kernforschung (CERN), Leiter des Bereichs „Data Academy" bei der Alexander Thamm GmbH und führte das konzernweite KI-Competence Center der Krones AG.
                </p>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white">
                    Er studierte am Imperial College London und ist Alumnus der Studienstiftung des deutschen Volkes. Nationale und internationale Medien berichten regelmäßig zu seiner Arbeit.
                </p>
            </div>
            <div className="mt-12 sm:mt-16 md:mt-20">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-white">Unsere Leistungen</h2>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                    <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl border border-blue-500/30 hover:border-blue-600/50 transition-all duration-500">
                        <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">Executive Advisory</h3>
                        <p className="text-base sm:text-lg leading-relaxed text-white">
                            Zuerst analysieren und besprechen wir Optimierungspotenziale in Ihrem Unternehmen entlang Ihrer Wertschöpfungskette und Ihres Produktportfolios. Darauf aufbauend erarbeiten wir gemeinsam eine passende KI- und Digitalisierung-Strategie für Ihr Unternehmen. Zusammen überlegen wir uns einen realistischen Umsetzungsplan und wie wir diesen gemeinsam realisieren.
                        </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl border border-blue-500/30 hover:border-blue-600/50 transition-all duration-500">
                        <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">Workshops und Coaching</h3>
                        <p className="text-base sm:text-lg leading-relaxed text-white">
                            Jeder Entscheidungsträger muss ein Verständnis von KI und Digitalisierung entwickeln. Wir bieten Ihnen ein nachhaltiges Workshop- und Coachingkonzept für Ihre Führungs- und Fachkräfte an. Der Grundgedanke unseres Ansatzes dabei ist, dass wir dadurch im Laufe der Zeit zu Sparringspartnern werden, die sich fachlich auf Augenhöhe begegnen.
                        </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl border border-blue-500/30 hover:border-blue-600/50 transition-all duration-500">
                        <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">Beratung für Beratungsunternehmen</h3>
                        <p className="text-base sm:text-lg leading-relaxed text-white">
                            Für Fragen und Problemstellungen im Bereich von KI und Digitalisierung sind wir auch als Berater bei Spezialthemen für andere Berufskollegen tätig. Hierbei helfen wir mit Stellungnahmen zu Einzelproblemen, über die Erstellung von Gutachten bis hin zur Verbesserung von Ihren Beratungs- und Schulungsangeboten zu KI und Digitalisierung.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;