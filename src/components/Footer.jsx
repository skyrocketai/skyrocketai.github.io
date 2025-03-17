import React from 'react'
import { Link } from "react-router-dom"
import { useLanguage } from '../context/LanguageContext';

function Footer() {
  const { language } = useLanguage();
  if (language === 'en') {
    return (
      <footer className="bg-custom-teal text-white py-10 mt-auto">
        <div className="container mx-auto text-center">
          <div className="flex flex-col items-center space-y-4">


            {/* Legal Links */}
            <div className="space-x-2">
              <Link to="/Impressum" className="hover:text-blue-300 transition-colors duration-300">
                Legal Notice
              </Link>
              <span>|</span>
              <Link to="/Datenschutz" className="hover:text-blue-300 transition-colors duration-300">
                Privacy
              </Link>
            </div>

            {/* Copyright */}
            <div className="space-y-2">
              <p className="text-sm">
                © {new Date().getFullYear()} skyrocket.ai GmbH. All rights reserved.
              </p>
              <p className="text-sm">
                Designed by{' '}
                <a
                  href="https://wokandweb.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400 transition-colors duration-300"
                >
                  WokAndWeb
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    )
  }

  return (
    <footer className="bg-custom-teal text-white py-10 mt-auto">
      <div className="container mx-auto text-center">
        <div className="flex flex-col items-center space-y-4">


          {/* Legal Links */}
          <div className="space-x-2">
            <Link to="/Impressum" className="hover:text-blue-300 transition-colors duration-300">
              Impressum
            </Link>
            <span>|</span>
            <Link to="/Datenschutz" className="hover:text-blue-300 transition-colors duration-300">
              Datenschutz
            </Link>
          </div>

          {/* Copyright */}
          <div className="space-y-2">
            <p className="text-sm">
              © {new Date().getFullYear()} skyrocket.ai GmbH. Alle Rechte vorbehalten.
            </p>
            <p className="text-sm">
              Designed by{' '}
              <a
                href="https://wokandweb.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors duration-300"
              >
                WokAndWeb
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer