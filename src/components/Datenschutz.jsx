import React, { useEffect } from "react";
import { animateScroll } from 'react-scroll';
import { Helmet } from "react-helmet-async";

function Datenschutz() {
    useEffect(() => { animateScroll.scrollToTop({ duration: 0 }) }, [])

    return (
        <div className="min-h-screen bg-gray-50">
            <Helmet>
                <title>Datenschutz</title>
            </Helmet>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center sm:text-left">
                    Datenschutzerklärung
                </h2>

                <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8">
                    <section>
                        <p className="text-gray-600 leading-relaxed">
                            Verantwortliche Stelle im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist:

                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Prof. Dr. Patrick Glauner
                        </p>


                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                            1. Datenschutz
                        </h3>
                        <div className="text-base sm:text-lg text-gray-600 space-y-4">
                            <p className="leading-relaxed">
                                Wir haben diese Datenschutzerklärung (Fassung 20.11.2019-321129776) verfasst, um Ihnen gemäß der Vorgaben der <a href="https://eur-lex.europa.eu/legal-content/DE/ALL/?tid=1234&uri=celex%3A32016R0679&tid=321129776" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Datenschutz-Grundverordnung (EU) 2016/679</a> zu erklären, welche Informationen wir sammeln, wie wir Daten verwenden und welche Entscheidungsmöglichkeiten Sie als Besucher dieser Webseite haben.

                                Leider liegt es in der Natur der Sache, dass diese Erklärungen sehr technisch klingen, wir haben uns bei der Erstellung jedoch bemüht die wichtigsten Dinge so einfach und klar wie möglich zu beschreiben.
                            </p>

                        </div>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                            Automatische Datenspeicherung
                        </h3>
                        <div className="text-base sm:text-lg text-gray-600 space-y-2">
                            <p>Wenn Sie heutzutage Webseiten besuchen, werden gewisse Informationen automatisch erstellt und gespeichert, so auch auf dieser Webseite.</p>
                            <p className="mt-4">Wenn Sie unsere Webseite so wie jetzt gerade besuchen, speichert unser Webserver (Computer auf dem diese Webseite gespeichert ist) automatisch Daten wie</p>
                            <div className="mt-2 space-y-1 pl-4">
                                <p>die Adresse (URL) der aufgerufenen Webseite</p>
                                <p>Browser und Browserversion</p>
                                <p>das verwendete Betriebssystem</p>
                                <p>die Adresse (URL) der zuvor besuchten Seite (Referrer URL)</p>
                                <p>den Hostname und die IP-Adresse des Geräts von welchem aus zugegriffen wird</p>
                                <p>Datum und Uhrzeit</p>
                            </div>
                            <p className="mt-4">in Dateien (Webserver-Logfiles).</p>
                            <p className="mt-4">In der Regel werden Webserver-Logfiles zwei Wochen gespeichert und danach automatisch gelöscht. Wir geben diese Daten nicht weiter, können jedoch nicht ausschließen, dass diese Daten beim Vorliegen von rechtswidrigem Verhalten eingesehen werden.</p>
                            <p className="mt-4">Die Rechtsgrundlage besteht nach <a href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&from=DE&tid=321129776" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Artikel 6 Absatz 1 f DSGVO</a> (Rechtmäßigkeit der Verarbeitung) darin, dass berechtigtes Interesse daran besteht, den fehlerfreien Betrieb dieser Webseite durch das Erfassen von Webserver-Logfiles zu ermöglichen.</p>

                        </div>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                            Cookies
                        </h3>
                        <div className="text-base sm:text-lg text-gray-600 space-y-6">
                            <p className="leading-relaxed">
                                Unsere Website verwendet HTTP-Cookies um nutzerspezifische Daten zu speichern.
                            </p>

                            <p className="leading-relaxed mt-4">
                                Im Folgenden erklären wir, was Cookies sind und warum Sie genutzt werden, damit Sie die folgende Datenschutzerklärung besser verstehen.
                            </p>

                            <h4 className="font-medium text-gray-800 mt-6 mb-2">Was genau sind Cookies?</h4>

                            <p className="leading-relaxed">
                                Immer wenn Sie durch das Internet surfen, verwenden Sie einen Browser. Bekannte Browser sind beispielsweise Chrome, Safari, Firefox, Internet Explorer und Microsoft Edge. Die meisten Webseiten speichern kleine Text-Dateien in Ihrem Browser. Diese Dateien nennt man Cookies.
                            </p>

                            <p className="leading-relaxed mt-4">
                                Eines ist nicht von der Hand zu weisen: Cookies sind echt nützliche Helferlein. Fast alle Webseiten verwenden Cookies. Genauer gesprochen sind es HTTP-Cookies, da es auch noch andere Cookies für andere Anwendungsbereiche gibt. HTTP-Cookies sind kleine Dateien, die von unserer Website auf Ihrem Computer gespeichert werden. Diese Cookie-Dateien werden automatisch im Cookie-Ordner, quasi dem "Hirn" Ihres Browsers, untergebracht. Ein Cookie besteht aus einem Namen und einem Wert. Bei der Definition eines Cookies müssen zusätzlich ein oder mehrere Attribute angegeben werden.
                            </p>

                            <p className="leading-relaxed mt-4">
                                Cookies speichern gewisse Nutzerdaten von Ihnen, wie beispielsweise Sprache oder persönliche Seiteneinstellungen. Wenn Sie unsere Seite wieder aufrufen, übermittelt Ihr Browser die „userbezogenen" Informationen an unsere Seite zurück. Dank der Cookies weiß unsere Website, wer Sie sind und bietet Ihnen Ihre gewohnte Standardeinstellung. In einigen Browsern hat jedes Cookie eine eigene Datei, in anderen wie beispielsweise Firefox sind alle Cookies in einer einzigen Datei gespeichert.
                            </p>

                            <p className="leading-relaxed mt-4">
                                Es gibt sowohl Erstanbieter Cookies als auch Drittanbieter-Cookies. Erstanbieter-Cookies werden direkt von unserer Seite erstellt, Drittanbieter-Cookies werden von Partner-Webseiten (z.B. Google Analytics) erstellt. Jedes Cookie ist individuell zu bewerten, da jedes Cookie andere Daten speichert. Auch die Ablaufzeit eines Cookies variiert von ein paar Minuten bis hin zu ein paar Jahren. Cookies sind keine Software-Programme und enthalten keine Viren, Trojaner oder andere „Schädlinge". Cookies können auch nicht auf Informationen Ihres PCs zugreifen.
                            </p>

                            <p className="leading-relaxed mt-4">So können zum Beispiel Cookie-Daten aussehen:</p>

                            <ul className="list-none pl-5 mt-2 space-y-1">
                                <li>Name: _ga</li>
                                <li>Ablaufzeit: 2 Jahre</li>
                                <li>Verwendung: Unterscheidung der Webseitenbesucher</li>
                                <li>Beispielhafter Wert: GA1.2.1326744211.152321129776</li>
                            </ul>

                            <p className="leading-relaxed mt-4">Ein Browser sollte folgende Mindestgrößen unterstützen:</p>

                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li>Ein Cookie soll mindestens 4096 Bytes enthalten können</li>
                                <li>Pro Domain sollen mindestens 50 Cookies gespeichert werden können</li>
                                <li>Insgesamt sollen mindestens 3000 Cookies gespeichert werden können</li>
                            </ul>
                            <h4 className="font-medium text-gray-800 mt-6 mb-2">Welche Arten von Cookies gibt es?</h4>

                            <p className="leading-relaxed">
                                Die Frage welche Cookies wir im Speziellen verwenden, hängt von den verwendeten Diensten ab und wird in der folgenden Abschnitten der Datenschutzerklärung geklärt. An dieser Stelle möchten wir kurz auf die verschiedenen Arten von HTTP-Cookies eingehen.
                            </p>

                            <p className="leading-relaxed mt-4">
                                Man kann 4 Arten von Cookies unterscheiden:
                            </p>

                            <h5 className="font-medium text-gray-800 mt-4 mb-2">Unbedingt notwendige Cookies</h5>
                            <p className="leading-relaxed">
                                Diese Cookies sind nötig, um grundlegende Funktionen der Website sicherzustellen. Zum Beispiel braucht es diese Cookies, wenn ein User ein Produkt in den Warenkorb legt, dann auf anderen Seiten weitersurft und später erst zur Kasse geht. Durch diese Cookies wird der Warenkorb nicht gelöscht, selbst wenn der User sein Browserfenster schließt.
                            </p>

                            <h5 className="font-medium text-gray-800 mt-4 mb-2">Funktionelle Cookies</h5>
                            <p className="leading-relaxed">
                                Diese Cookies sammeln Infos über das Userverhalten und ob der User etwaige Fehlermeldungen bekommt. Zudem werden mithilfe dieser Cookies auch die Ladezeit und das Verhalten der Website bei verschiedenen Browsern gemessen.
                            </p>

                            <h5 className="font-medium text-gray-800 mt-4 mb-2">Zielorientierte Cookies</h5>
                            <p className="leading-relaxed">
                                Diese Cookies sorgen für eine bessere Nutzerfreundlichkeit. Beispielsweise werden eingegebene Standorte, Schriftgrößen oder Formulardaten gespeichert.
                            </p>

                            <h5 className="font-medium text-gray-800 mt-4 mb-2">Werbe-Cookies</h5>
                            <p className="leading-relaxed">
                                Diese Cookies werden auch Targeting-Cookies genannt. Sie dienen dazu dem User individuell angepasste Werbung zu liefern. Das kann sehr praktisch, aber auch sehr nervig sein.
                            </p>

                            <p className="leading-relaxed mt-4">
                                Üblicherweise werden Sie beim erstmaligen Besuch einer Webseite gefragt, welche dieser Cookiearten Sie zulassen möchten. Und natürlich wird diese Entscheidung auch in einem Cookie gespeichert.
                            </p>

                            <h4 className="font-medium text-gray-800 mt-6 mb-2">Wie kann ich Cookies löschen?</h4>

                            <p className="leading-relaxed">
                                Wie und ob Sie Cookies verwenden wollen, entscheiden Sie selbst. Unabhängig von welchem Service oder welcher Website die Cookies stammen, haben Sie immer die Möglichkeit Cookies zu löschen, nur teilweise zuzulassen oder zu deaktivieren. Zum Beispiel können Sie Cookies von Drittanbietern blockieren, aber alle anderen Cookies zulassen.
                            </p>

                            <p className="leading-relaxed mt-4">
                                Wenn Sie feststellen möchten, welche Cookies in Ihrem Browser gespeichert wurden,
                                wenn Sie Cookie-Einstellungen ändern oder löschen wollen, können Sie dies in Ihren Browser-Einstellungen finden:
                            </p>

                            <a href="https://support.google.com/chrome/answer/95647?tid=321129776" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Chrome: Cookies in Chrome löschen, aktivieren und verwalten</a>
                            <a href="https://support.apple.com/de-at/guide/safari/sfri11471/mac?tid=321129776" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Safari: Verwalten von Cookies und Websitedaten mit Safari</a>
                            <a href="https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen?tid=321129776" className="text-blue-600 hover:text-blue-800">Firefox: Cookies löschen, um Daten zu entfernen, die Websites auf Ihrem Computer abgelegt haben</a>
                            <a href="https://support.microsoft.com/de-de/windows/verwalten-von-cookies-in-microsoft-edge-anzeigen-zulassen-blockieren-l%C3%B6schen-und-verwenden-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Internet Explorer: Löschen und Verwalten von Cookies</a>
                            <a href="https://support.microsoft.com/de-de/windows/verwalten-von-cookies-in-microsoft-edge-anzeigen-zulassen-blockieren-l%C3%B6schen-und-verwenden-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Microsoft Edge: Löschen und Verwalten von Cookies</a>

                            <p className="leading-relaxed mt-4">
                                Falls Sie grundsätzlich keine Cookies haben wollen, können Sie Ihren Browser so einrichten, dass er Sie immer informiert, wenn ein Cookie gesetzt werden soll. So können Sie bei jedem einzelnen Cookie entscheiden, ob Sie das Cookie erlauben oder nicht. Die Vorgangsweise ist je nach Browser verschieden. Am besten ist es Sie suchen die Anleitung in Google mit dem Suchbegriff “Cookies löschen Chrome” oder “Cookies deaktivieren Chrome” im Falle eines Chrome Browsers oder tauschen das Wort “Chrome” gegen den Namen Ihres Browsers, z.B. Edge, Firefox, Safari aus.

                            </p>
                            <h5 className="font-medium text-gray-800 mt-4 mb-2">Wie sieht es mit meinem Datenschutz aus?</h5>
                            <p className="leading-relaxed">Seit 2009 gibt es die sogenannten „Cookie-Richtlinien“. Darin ist festgehalten, dass das Speichern von Cookies eine Einwilligung des Website-Besuchers (also von Ihnen) verlangt. Innerhalb der EU-Länder gibt es allerdings noch sehr unterschiedliche Reaktionen auf diese Richtlinien. In Deutschland wurden die Cookie-Richtlinien nicht als nationales Recht umgesetzt. Stattdessen erfolgte die Umsetzung dieser Richtlinie weitgehend in § 15 Abs.3 des Telemediengesetzes (TMG).

                                Wenn Sie mehr über Cookies wissen möchten und vor technischen Dokumentationen nicht zurückscheuen, empfehlen wir https://tools.ietf.org/html/rfc6265, dem Request for Comments der Internet Engineering Task Force (IETF) namens “HTTP State Management Mechanism”.</p>
                        </div>
                    </section>
                    <section>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                            Speicherung persönlicher Daten
                        </h3>
                        <div className="text-base sm:text-lg text-gray-600 space-y-4">
                            <p className="leading-relaxed">
                                Persönliche Daten, die Sie uns auf dieser Website elektronisch übermitteln, wie zum Beispiel Name, E-Mail-Adresse, Adresse oder andere persönlichen Angaben im Rahmen der Übermittlung eines Formulars oder Kommentaren im Blog, werden von uns gemeinsam mit dem Zeitpunkt und der IP-Adresse nur zum jeweils angegebenen Zweck verwendet, sicher verwahrt und nicht an Dritte weitergegeben.
                            </p>

                            <p className="leading-relaxed">
                                Wir nutzen Ihre persönlichen Daten somit nur für die Kommunikation mit jenen Besuchern, die Kontakt ausdrücklich wünschen und für die Abwicklung der auf dieser Webseite angebotenen Dienstleistungen und Produkte. Wir geben Ihre persönlichen Daten ohne Zustimmung nicht weiter, können jedoch nicht ausschließen, dass diese Daten beim Vorliegen von rechtswidrigem Verhalten eingesehen werden.
                            </p>

                            <p className="leading-relaxed">
                                Wenn Sie uns persönliche Daten per E-Mail schicken – somit abseits dieser Webseite – können wir keine sichere Übertragung und den Schutz Ihrer Daten garantieren. Wir empfehlen Ihnen, vertrauliche Daten niemals unverschlüsselt per E-Mail zu übermitteln.
                            </p>

                            <p className="leading-relaxed">
                                Die Rechtsgrundlage besteht nach <a href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&from=DE&tid=321129776" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Artikel 6 Absatz 1 a DSGVO</a> (Rechtmäßigkeit der Verarbeitung) darin, dass Sie uns die Einwilligung zur Verarbeitung der von Ihnen eingegebenen Daten geben. Sie können diesen Einwilligung jederzeit widerrufen – eine formlose E-Mail reicht aus, Sie finden unsere Kontaktdaten im Impressum.
                            </p>

                            <h4 className="text-lg font-semibold text-gray-900 mb-3">Rechte laut Datenschutzgrundverordnung</h4>
                            <p className="leading-relaxed">
                                Ihnen stehen laut den Bestimmungen der DSGVO grundsätzlich die folgende Rechte zu:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Recht auf Berichtigung (Artikel 16 DSGVO)</li>
                                <li>Recht auf Löschung („Recht auf Vergessenwerden") (Artikel 17 DSGVO)</li>
                                <li>Recht auf Einschränkung der Verarbeitung (Artikel 18 DSGVO)</li>
                                <li>Recht auf Benachrichtigung – Mitteilungspflicht im Zusammenhang mit der Berichtigung oder Löschung personenbezogener Daten oder der Einschränkung der Verarbeitung (Artikel 19 DSGVO)</li>
                                <li>Recht auf Datenübertragbarkeit (Artikel 20 DSGVO)</li>
                                <li>Widerspruchsrecht (Artikel 21 DSGVO)</li>
                                <li>Recht, nicht einer ausschließlich auf einer automatisierten Verarbeitung — einschließlich Profiling — beruhenden Entscheidung unterworfen zu werden (Artikel 22 DSGVO)</li>
                            </ul>

                            <p className="leading-relaxed">
                                Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, können Sie sich an die <a href="https://www.bfdi.bund.de/DE/Datenschutz/Ueberblick/MeineRechte/Artikel/BeschwerdeBeiDatenschutzbehoereden.html?tid=321129776" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Bundesbeauftragte für den Datenschutz und die Informationsfreiheit (BfDI)</a> wenden.
                            </p>

                            <h4 className="text-lg font-semibold text-gray-900 mb-3">Auswertung des Besucherverhaltens</h4>
                            <p className="leading-relaxed">
                                In der folgenden Datenschutzerklärung informieren wir Sie darüber, ob und wie wir Daten Ihres Besuchs dieser Website auswerten. Die Auswertung der gesammelten Daten erfolgt in der Regel anonym und wir können von Ihrem Verhalten auf dieser Website nicht auf Ihre Person schließen.
                            </p>
                            <p className="leading-relaxed">
                                Mehr über Möglichkeiten dieser Auswertung der Besuchsdaten zu widersprechen erfahren Sie in der folgenden Datenschutzerklärung.
                            </p>

                            <h4 className="text-lg font-semibold text-gray-900 mb-3">TLS-Verschlüsselung mit https</h4>
                            <p className="leading-relaxed">
                                Wir verwenden https um Daten abhörsicher im Internet zu übertragen (Datenschutz durch Technikgestaltung <a href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&from=DE&tid=321129776" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Artikel 25 Absatz 1 DSGVO</a>). Durch den Einsatz von TLS (Transport Layer Security), einem Verschlüsselungsprotokoll zur sicheren Datenübertragung im Internet können wir den Schutz vertraulicher Daten sicherstellen. Sie erkennen die Benutzung dieser Absicherung der Datenübertragung am kleinen Schloßsymbol links oben im Browser und der Verwendung des Schemas https (anstatt http) als Teil unserer Internetadresse.
                            </p>

                            <h4 className="text-lg font-semibold text-gray-900 mb-3">Google Fonts Datenschutzerklärung</h4>
                            <p className="leading-relaxed">
                                Wir verwenden Google Fonts der Firma Google Inc. (1600 Amphitheatre Parkway Mountain View, CA 94043, USA) auf unserer Webseite.
                            </p>
                            <p className="leading-relaxed">
                                Für die Verwendung von Google-Schriftarten müssen Sie sich nicht anmelden bzw. ein Passwort hinterlegen. Weiters werden auch keine Cookies in Ihrem Browser gespeichert. Die Dateien (CSS, Schriftarten/Fonts) werden über die Google-Domains fonts.googleapis.com und fonts.gstatic.com angefordert. Laut Google sind die Anfragen nach CSS und Schriften vollkommen getrennt von allen anderen Google-Diensten. Wenn Sie ein Google-Konto haben, brauchen Sie keine Sorge haben, dass Ihre Google-Kontodaten, während der Verwendung von Google Fonts, an Google übermittelt werden. Google erfasst die Nutzung von CSS (Cascading Style Sheets) und der verwendeten Schriftarten und speichert diese Daten sicher. Wie die Datenspeicherung genau aussieht, werden wir uns noch im Detail ansehen.
                            </p>

                            <h5 className="font-medium text-gray-800 mt-4 mb-2">Was sind Google Fonts?</h5>
                            <p className="leading-relaxed">
                                Google Fonts (früher Google Web Fonts) ist ein interaktives Verzeichnis mit mehr als 800 Schriftarten, die die <a href="https://de.wikipedia.org/wiki/Google_LLC?tid=321129776" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Google LLC</a> zur freien Verwendung bereitstellt.
                            </p>
                            <p className="leading-relaxed">
                                Viele dieser Schriftarten sind unter der SIL Open Font License veröffentlicht, während andere unter der Apache-Lizenz veröffentlicht wurden. Beides sind freie Software-Lizenzen. Somit können wir sie frei verwenden, ohne dafür Lizenzgebühren zu zahlen.
                            </p>

                            <h5 className="font-medium text-gray-800 mt-4 mb-2">Warum verwenden wir Google Fonts auf unserer Webseite?</h5>
                            <p className="leading-relaxed">
                                Mit Google Fonts können wir auf der eigenen Webseite Schriften nutzen, und müssen sie nicht auf unserem eigenen Server hochladen. Google Fonts ist ein wichtiger Baustein, um die Qualität unserer Webseite hoch zu halten. Alle Google-Schriften sind automatisch für das Web optimiert und dies spart Datenvolumen und ist speziell für die Verwendung bei mobilen Endgeräten ein großer Vorteil. Wenn Sie unsere Seite besuchen, sorgt die niedrige Dateigröße für eine schnelle Ladezeit. Des Weiteren sind Google Fonts sogenannte sichere Web Fonts. Unterschiedliche Bildsynthese-Systeme (Rendering) in verschiedenen Browsern, Betriebssystemen und mobilen Endgeräten können zu Fehlern führen. Solche Fehler können teilweise Texte bzw. ganze Webseiten optisch verzerren. Dank des schnellen Content Delivery Network (CDN) gibt es mit Google Fonts keine plattformübergreifenden Probleme. Google Fonts unterstützt alle gängigen Browser (Google Chrome, Mozilla Firefox, Apple Safari, Opera) und funktioniert zuverlässig auf den meisten modernen mobilen Betriebssystemen, einschließlich Android 2.2+ und iOS 4.2+ (iPhone, iPad, iPod).
                            </p>
                            <p className="leading-relaxed">
                                Wir verwenden die Google Fonts also, damit wir unser gesamtes Online-Service so schön und einheitlich wie möglich darstellen können. Nach dem Art. 6 Abs. 1 f lit. F DSGVO stellt das bereits ein „berechtigtes Interesse" an der Verarbeitung von personenbezogenen Daten dar. Unter „berechtigtem Interesse" versteht man in diesem Fall sowohl rechtliche als auch wirtschaftliche oder ideelle Interessen, die vom Rechtssystem anerkannt werden.
                            </p>

                            <h5 className="font-medium text-gray-800 mt-4 mb-2">Welche Daten werden von Google gespeichert?</h5>
                            <p className="leading-relaxed">
                                Wenn Sie unsere Webseite besuchen, werden die Schriften über einen Google-Server nachgeladen. Durch diesen externen Aufruf werden Daten an die Google-Server übermittelt. So erkennt Google auch, dass Sie bzw. Ihre IP-Adresse unsere Webseite besucht. Die Google Fonts API wurde entwickelt, um die Erfassung, Speicherung und Verwendung von Endnutzerdaten auf das zu reduzieren, was für eine effiziente Bereitstellung von Schriften nötig ist. API steht übrigens für „Application Programming Interface" und dient unter anderem als Datenübermittler im Softwarebereich.
                            </p>
                            <p className="leading-relaxed">
                                Google Fonts speichert CSS- und Font-Anfragen sicher bei Google und ist somit geschützt. Durch die gesammelten Nutzungszahlen kann Google die Beliebtheit der Schriften feststellen. Die Ergebnisse veröffentlicht Google auf internen Analyseseiten, wie beispielsweise Google Analytics. Zudem verwendet Google auch Daten des eigenen Web-Crawlers, um festzustellen, welche Webseiten Google-Schriften verwenden. Diese Daten werden in der BigQuery-Datenbank von Google Fonts veröffentlicht. BigQuery ist ein Webservice von Google für Unternehmen, die große Datenmengen bewegen und analysieren wollen.
                            </p>
                            <p className="leading-relaxed">
                                Zu bedenken gilt allerdings noch, dass durch jede Google Font Anfrage auch Informationen wie IP-Adresse, Spracheinstellungen, Bildschirmauflösung des Browsers, Version des Browsers und Name des Browsers automatisch an die Google-Server übertragen werden. Ob diese Daten auch gespeichert werden, ist nicht klar feststellbar bzw. wird von Google nicht eindeutig kommuniziert.
                            </p>

                            <h5 className="font-medium text-gray-800 mt-4 mb-2">Wie lange und wo werden die Daten gespeichert?</h5>
                            <p className="leading-relaxed">
                                Anfragen für CSS-Assets speichert Google einen Tag lang auf Ihren Servern, die hauptsächlich außerhalb der EU angesiedelt sind. Das ermöglicht uns, mithilfe eines Google-Stylesheets die Schriftarten zu nutzen. Ein Stylesheet ist eine Formatvorlage, über die man einfach und schnell z.B. das Design bzw. die Schriftart einer Webseite ändern kann.
                            </p>
                            <p className="leading-relaxed">
                                Die Font-Dateien werden bei Google ein Jahr gespeichert. Google verfolgt damit das Ziel, die Ladezeit von Webseiten grundsätzlich zu verbessern. Wenn Millionen von Webseiten auf die gleichen Schriften verweisen, werden sie nach dem ersten Besuch zwischengespeichert und erscheinen sofort auf allen anderen später besuchten Webseiten wieder. Manchmal aktualisiert Google Schriftdateien, um die Dateigröße zu reduzieren, die Abdeckung von Sprache zu erhöhen und das Design zu verbessern.
                            </p>

                            <h5 className="font-medium text-gray-800 mt-4 mb-2">Wie kann ich meine Daten löschen bzw. die Datenspeicherung verhindern?</h5>
                            <p className="leading-relaxed">
                                Jene Daten, die Google für einen Tag bzw. ein Jahr speichert können nicht einfach gelöscht werden. Die Daten werden beim Seitenaufruf automatisch an Google übermittelt. Um diese Daten vorzeitig löschen zu können, müssen Sie den Google-Support auf <a href="https://support.google.com/?hl=de&tid=321129776" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">https://support.google.com/?hl=de&tid=321129776</a> kontaktieren. Datenspeicherung verhindern Sie in diesem Fall nur, wenn Sie unsere Seite nicht besuchen.
                            </p>
                            <p className="leading-relaxed">
                                Anders als andere Web-Schriften erlaubt uns Google uneingeschränkten Zugriff auf alle Schriftarten. Wir können also unlimitiert auf ein Meer an Schriftarten zugreifen und so das Optimum für unsere Webseite rausholen. Mehr zu Google Fonts und weiteren Fragen finden Sie auf <a href="https://developers.google.com/fonts/faq?tid=321129776" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">https://developers.google.com/fonts/faq?tid=321129776</a>. Dort geht zwar Google auf datenschutzrelevante Angelegenheiten ein, doch wirklich detaillierte Informationen über Datenspeicherung sind nicht enthalten. Es ist relativ schwierig (beinahe unmöglich), von Google wirklich präzise Informationen über gespeicherten Daten zu bekommen.
                            </p>
                            <p className="leading-relaxed">
                                Welche Daten grundsätzlich von Google erfasst werden und wofür diese Daten verwendet werden, können Sie auch auf <a href="https://www.google.com/intl/de/policies/privacy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">https://www.google.com/intl/de/policies/privacy/</a> nachlesen.
                            </p>

                            <p className="text-sm text-gray-500 mt-8">
                                Quelle: Erstellt mit dem <a href="https://www.adsimple.de/datenschutz-generator/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Datenschutz Generator </a> von AdSimple in Kooperation mit <a href="https://www.123familie.de/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">123familie.de</a>
                            </p>
                        </div>
                    </section>





                </div>

            </div>
        </div>
    );
}

export default Datenschutz;