import React, { useEffect, useState } from 'react'
import Content from './components/Content'
import CookieConsent from "react-cookie-consent";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom"
import Datenschutz from "./components/Datenschutz"
import Impressum from "./components/Impressum"
import Contact from './components/Contact'
import About from './components/About'
import Layout from './components/Layout';
import { HelmetProvider } from 'react-helmet-async';
import Bg from './assets/aibg.jpg'
import Splash from './components/Splash'
import { LanguageProvider } from './context/LanguageContext';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}  >
    <Route index element={
      <div className="px-4 sm:px-6 lg:px-8">
        <div id="top" className="w-full">
          <Content />
          <div id="about" className="mt-12">
            <About />
          </div>
          <div id="kontakt" className="mt-12">
            <Contact />
          </div>
        </div>
      </div>
    } />
    <Route path="datenschutz" element={<Datenschutz />} />
    <Route path="impressum" element={<Impressum />} />
  </Route>
))

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000) // 3 seconds

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Update theme color when dark mode changes
    const updateThemeColor = () => {
      const isDark = document.documentElement.classList.contains('dark');
      const themeColor = isDark ? '#1f1f1f' : '#474747';
      document.querySelector('meta[name="theme-color"]').setAttribute('content', themeColor);
    };

    // Initial update
    updateThemeColor();

    // Listen for dark mode changes
    const observer = new MutationObserver(updateThemeColor);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  if (loading) {
    return <Splash />
  }


  return (
    <LanguageProvider>
      <HelmetProvider>
        <div className="flex flex-col min-h-screen bg-white dark:bg-custom-dark text-gray-900 dark:text-white transition-colors duration-300">
          {/* Background Image with Overlay */}
          <div
            className="fixed inset-0 z-0"
            style={{
              backgroundImage: `url(${Bg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
          </div>
          {/* Content */}
          <div className="relative z-10 min-h-screen">
            <CookieConsent
              location="bottom"
              buttonText="Akzeptieren"
              cookieName="agreeCookieConsent"
              style={{ background: "#16404D", color: "#FFF" }}
              buttonStyle={{
                backgroundColor: "#FFF",
                color: "#16404D",
                fontSize: "14px",
                padding: "8px 16px",
                borderRadius: "4px",
                fontWeight: "500"
              }}
              expires={7}
              containerClasses="alert alert-warning col-lg-12"
              overlay
              overlayStyle={{ background: "rgba(0,0,0,0.8)" }}
            >
              <div className="font-emblema text-lg mb-2">Datenschutzhinweis</div>
              <p className="text-sm">
                Um Ihnen die bestmögliche Nutzererfahrung bieten zu können, verwendet diese Website ausschließlich technisch notwendige Cookies. Diese gewährleisten die grundlegenden Funktionen und die Sicherheit der Website.
              </p>
            </CookieConsent>
            <RouterProvider router={router} />
          </div>
        </div>
      </HelmetProvider>
    </LanguageProvider>
  )
}

export default App