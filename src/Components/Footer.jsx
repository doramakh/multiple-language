import { useLang } from './../Context/LanguageContext'
import translates from "./../translates"

function Footer() {

    const [lang] = useLang()

    return (
        <>
            <footer className="footer">
                <div className="container footer-container">
                    <div className="quick-links">
                        <a className="logo-link" href="/">
                            <img className="logo footer-logo" src="./img/logo.png" alt="Apartment Teraphy Logo" width="240"/>
                        </a>

                        <div>
                            <span className="footer-tip">{translates[lang].footerQues}</span>
                            <a className="footer-tip-link" href="/">{translates[lang].footerTip}</a>
                        </div>
                        <span className="copyright">{translates[lang].footerCopyright}</span>
                    </div>
                    <div className="read-links">
                        <h3 className="footer-heading">{translates[lang].footerRead}</h3>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <a className="footer-link" href="/">{translates[lang].navLiHouse}</a>
                            </li>
                            <li className="footer-item">
                                <a className="footer-link" href="/">{translates[lang].navLiStyle}</a>
                            </li>
                            <li className="footer-item">
                                <a className="footer-link" href="/">{translates[lang].navLiHow}</a>
                            </li>
                            <li className="footer-item">
                                <a className="footer-link" href="/">{translates[lang].navLiOrganize}</a>
                            </li>
                            <li className="footer-item">
                                <a className="footer-link" href="/">{translates[lang].navLiLiving}</a>
                            </li>
                            <li className="footer-item">
                                <a className="footer-link" href="/">{translates[lang].navLiShop}</a>
                            </li>
                        </ul>
                    </div>
                    <div className="company-links">
                        <h3 className="footer-heading">{translates[lang].footerCompany}</h3>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <a className="footer-link" href="/">{translates[lang].footerLiPartner}</a>
                            </li>
                            <li className="footer-item">
                                <a className="footer-link" href="/">{translates[lang].footerLiAbout}</a>
                            </li>
                            <li className="footer-item">
                                <a className="footer-link" href="/">{translates[lang].footerLiContact}</a>
                            </li>
                            <li className="footer-item">
                                <a className="footer-link" href="/">{translates[lang].footerLiPress}</a>
                            </li>
                            <li className="footer-item">
                                <a className="footer-link" href="/">{translates[lang].footerLiTerms}</a>
                            </li>
                            <li className="footer-item">
                                <a className="footer-link" href="/">{translates[lang].footerLiPrivacy}</a>
                            </li>
                            <li className="footer-item">
                                <a className="footer-link" href="/">{translates[lang].footerLiTeam}</a>
                            </li>
                            <li className="footer-item">
                                <a className="footer-link" href="/">{translates[lang].footerLiSitemap}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer