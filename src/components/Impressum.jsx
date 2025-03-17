import React, { useEffect } from "react";
import { animateScroll } from 'react-scroll';
import { Helmet } from "react-helmet-async";

function Impressum() {
    useEffect(() => { animateScroll.scrollToTop({ duration: 0 }) }, [])

    return (
        <div className="min-h-screen bg-gray-50">
            <Helmet>
                <title>Impressum</title>
            </Helmet>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center sm:text-left">
                    Impressum
                </h2>

                <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 space-y-8">
                    <section>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                            Informationspflicht laut § 5 TMG.
                        </h3>
                        <div className="text-gray-600 space-y-1">
                            <p>skyrocket.ai GmbH</p>
                            <p>Römerstr. 16</p>
                            <p>93138 Lappersdorf</p>
                            <p>Deutschland</p>
                        </div>
                        <div className="text-gray-600 space-y-1">
                            <p>Register: Handelsregister B</p>
                            <p>Registergericht: Amtsgericht Regensburg</p>
                            <p>Registernummer: 17634</p>
                        </div>

                    </section>

                    <section>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                            Kontakt
                        </h3>
                        <div className="text-gray-600 space-y-1">

                            <p>Geschäftsführender Gesellschafter: Prof. Dr. Patrick Glauner</p>
                            <p>Tel.: +49 157 52657540</p>
                            <p>E-Mail: info@skyrocket.ai</p>
                            <p>Quelle: Erstellt mit dem Impressum Generator von AdSimple in Kooperation mit
                                <a href="https://justmed.de" target="_blank" rel="noopener noreferrer" className="underline">justmed.de</a></p>
                        </div>
                    </section>

                    <section>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                            USt-ID gem. § 27a UStG: DE327933709
                        </h3>

                    </section>

                    <section>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                            EU-Streitschlichtung
                        </h3>
                        <div className="text-gray-600 space-y-4">
                            <p>
                                Gemäß Verordnung über Online-Streitbeilegung in Verbraucherangelegenheiten (ODR-Verordnung) möchten wir Sie über die Online-Streitbeilegungsplattform (OS-Plattform) informieren.
                            </p>
                            <p className="mt-4">
                                Verbraucher haben die Möglichkeit, Beschwerden an die Online Streitbeilegungsplattform der Europäischen Kommission unter
                                <a
                                    href="http://ec.europa.eu/odr?tid=321129776"
                                    className="text-blue-600 hover:text-blue-800 ml-1 break-words"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    http://ec.europa.eu/odr?tid=321129776
                                </a>
                                zu richten. Die dafür notwendigen Kontaktdaten finden Sie oberhalb in unserem Impressum.
                            </p>
                            <p className="mt-4">
                                Wir möchten Sie jedoch darauf hinweisen, dass wir nicht bereit oder verpflichtet sind, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                            </p>

                        </div>
                    </section>

                    <section>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                            Haftung für Inhalte dieser Website
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Wir entwickeln die Inhalte dieser Webseite ständig weiter und bemühen uns korrekte und aktuelle Informationen bereitzustellen. Laut Telemediengesetz (TMG) §7 (1) sind wir als Diensteanbieter für eigene Informationen, die wir zur Nutzung bereitstellen, nach den allgemeinen Gesetzen verantwortlich. Leider können wir keine Haftung für die Korrektheit aller Inhalte auf dieser Webseite übernehmen, speziell für jene die seitens Dritter bereitgestellt wurden. Als Diensteanbieter im Sinne der §§ 8 bis 10 sind wir nicht verpflichtet, die von ihnen übermittelten oder gespeicherten Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.

                            Unsere Verpflichtungen zur Entfernung von Informationen oder zur Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen aufgrund von gerichtlichen oder behördlichen Anordnungen bleiben auch im Falle unserer Nichtverantwortlichkeit nach den §§ 8 bis 10 unberührt.

                            Sollten Ihnen problematische oder rechtswidrige Inhalte auffallen, bitte wir Sie uns umgehend zu kontaktieren, damit wir die rechtswidrigen Inhalte entfernen können. Sie finden die Kontaktdaten im Impressum.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                            Haftung für Links auf dieser Website
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Unsere Webseite enthält Links zu anderen Webseiten für deren Inhalt wir nicht verantwortlich sind. Haftung für verlinkte Websites besteht für uns nicht, da wir keine Kenntnis rechtswidriger Tätigkeiten hatten und haben, uns solche Rechtswidrigkeiten auch bisher nicht aufgefallen sind und wir Links sofort entfernen würden, wenn uns Rechtswidrigkeiten bekannt werden.

                            Wenn Ihnen rechtswidrige Links auf unserer Website auffallen, bitte wir Sie uns zu kontaktieren. Sie finden die Kontaktdaten im Impressum.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                            Urheberrechtshinweis
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Alle Inhalte dieser Webseite (Bilder, Fotos, Texte, Videos) unterliegen dem Urheberrecht der Bundesrepublik Deutschland. Bitte fragen Sie uns bevor Sie die Inhalte dieser Website verbreiten, vervielfältigen oder verwerten wie zum Beispiel auf anderen Websites erneut veröffentlichen. Falls notwendig, werden wir die unerlaubte Nutzung von Teilen der Inhalte unserer Seite rechtlich verfolgen.

                            Sollten Sie auf dieser Webseite Inhalte finden, die das Urheberrecht verletzen, bitten wir Sie uns zu kontaktieren.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                            Bildernachweis
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Die Bilder, Fotos und Grafiken auf dieser Webseite sind urheberrechtlich geschützt.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Impressum;