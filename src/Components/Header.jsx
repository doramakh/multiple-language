import { useLang } from './../Context/LanguageContext'
import translates from "./../translates"

function Header () {

    const [lang, setLang] = useLang()

    return (
        <>
            <header className="header">
                <div className="container header-container">
                    <a className="logo-link" href="#">
                        <img className="logo" src="./img/logo.png" alt="Apartment Teraphy Logo" width="240"/>
                    </a>

                    <div className="header-right">
                        <select className="lang-select" name="lang" id="lang" onChange={(e) => setLang(e.target.value)}>
                            <option className="lang-option" value="en">{translates[lang].en}</option>
                            <option className="lang-option" value="ru">{translates[lang].ru}</option>
                            <option className="lang-option" value="uz">{translates[lang].uz}</option>
                        </select>
                        <a className="header-news" href="#">{translates[lang].headerNews}</a>
                        <a className="room" href="#"></a>
                        <a className="profile-link" href="#">
                            <img src="./img/profile.webp" alt="Profile img" width="64"/>
                        </a>
                        <label className="search-label" htmlFor="search">
                        <input className="search-input" type="text" name="search" id="search"/>
                        <img src="./img/search.png" alt="Search icon" width="20"/>
                        </label>
                        
                    </div>
                </div>
                <nav className="nav">
                    <div className="container">
                        <ul className="nav-list">
                            <li className="nav-item">
                                <a className="nav-link" href="#">{translates[lang].navLiHouse}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">{translates[lang].navLiStyle}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">{translates[lang].navLiHow}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">{translates[lang].navLiOrganize}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">{translates[lang].navLiLiving}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">{translates[lang].navLiShop}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">{translates[lang].navLiMore}</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header