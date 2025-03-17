import React from 'react'
import foto1 from "../assets/ai.jpg"
import { Helmet } from "react-helmet-async";
import { useLanguage } from '../context/LanguageContext';


function Content() {
  const { language } = useLanguage();

  if (language === 'en') {
    return (
      <main className="container mx-auto px-4 sm:px-6 py-8 flex-grow">

        <Helmet>
          <title>skyrocket.ai GmbH</title>
          <meta name="description" content="Stellen Sie Ihr Unternehmen zukunftsfest durch KI auf.
         Wir möchten auch Ihnen dabei helfen, KI schnell und wertschöpfend in Ihrem Haus einzusetzen." />
        </Helmet>

        <section className='mb-8 pt-10'>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="order-first w-full lg:w-2/5 transform hover:scale-105 transition-transform duration-500">
              <img
                src={foto1}
                alt='AI Innovation'
                className="w-full h-auto rounded-2xl shadow-2xl border-4 border-blue-500/30 hover:border-blue-600/50 transition-all duration-500"
              />
            </div>
            <div className="w-full lg:w-3/5 flex flex-col justify-center mt-8 lg:mt-0">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-gradient leading-tight">
                Make Your Business Future-Proof with AI
              </h2>
            </div>
          </div>
        </section>
        <section className="mb-4 mt-10">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-blue-500/30 hover:border-blue-600/50 transition-all duration-500">
            <p className="text-lg md:text-xl leading-relaxed mb-6 text-white">
              skyrocket.ai® empowers companies, board members, and executives to become the winners of the digital transformation.
            </p>
            <p className="text-lg md:text-xl leading-relaxed mb-6 text-white">
              With the right use of Artificial Intelligence (AI), German and European companies will remain world market leaders.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-white">
              We would also like to help you use AI in your company to add real business value quickly.
            </p>
          </div>
        </section>
      </main>
    )

  }
  return (
    <main className="container mx-auto px-4 sm:px-6 py-8 flex-grow">

      <Helmet>
        <title>skyrocket.ai GmbH</title>
        <meta name="description" content="Stellen Sie Ihr Unternehmen zukunftsfest durch KI auf.
         Wir möchten auch Ihnen dabei helfen, KI schnell und wertschöpfend in Ihrem Haus einzusetzen." />
      </Helmet>

      <section className='mb-8 pt-10'>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="order-first w-full lg:w-2/5 transform hover:scale-105 transition-transform duration-500">
            <img
              src={foto1}
              alt='AI Innovation'
              className="w-full h-auto rounded-2xl shadow-2xl border-4 border-blue-500/30 hover:border-blue-600/50 transition-all duration-500"
            />
          </div>
          <div className="w-full lg:w-3/5 flex flex-col justify-center mt-8 lg:mt-0">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-gradient leading-tight">
              Stellen Sie Ihr Unternehmen zukunftsfest durch KI auf
            </h2>
          </div>
        </div>
      </section>
      <section className="mb-4 mt-10">
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-blue-500/30 hover:border-blue-600/50 transition-all duration-500">
          <p className="text-lg md:text-xl leading-relaxed mb-6 text-white">
            skyrocket.ai® begleitet Unternehmen, Geschäftsführer und Führungskräfte dabei, zu den Gewinnern der digitalen Transformation zu gehören.
          </p>
          <p className="text-lg md:text-xl leading-relaxed mb-6 text-white">
            Durch den richtigen Einsatz von Künstlicher Intelligenz (KI) werden deutsche und europäische Unternehmen Weltmarktführer bleiben.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-white">
            Wir möchten auch Ihnen dabei helfen, KI schnell und wertschöpfend in Ihrem Haus einzusetzen.
          </p>
        </div>
      </section>
    </main>
  )
}

export default Content