function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="quick-links">
                        <a className="logo-link" href="#">
                            <img className="logo footer-logo" src="./img/logo.png" alt="Apartment Teraphy Logo" width="240"/>
                        </a>

                        <div>
                            <span>Got a tip, kitchen tour, or other story our readers should see?</span>
                            <a href="#">TELL US ABOUT IT!</a>
                        </div>
                        <span>
                        Apartment Therapy is © 1994-2021  Apartment Therapy, LLC
                        </span>
                    </div>
                    <div className="read-links">
                        <h3 className="footer-heading">READ</h3>
                        <ul className="read-list">
                            <li>
                                <a href="#">HOUSE TOURS</a>
                            </li>
                            <li>
                                <a href="#">STYLE</a>
                            </li>
                            <li>
                                <a href="#">HOW TO</a>
                            </li>
                            <li>
                                <a href="#">ORGANIZE & CLEAN</a>
                            </li>
                            <li>
                                <a href="#">LIVING</a>
                            </li>
                            <li>
                                <a href="#">SHOP</a>
                            </li>
                        </ul>
                    </div>
                    <div className="company-links">
                        <h3 className="footer-heading">COMPANY</h3>
                        <ul className="company-list">
                            <li>
                                <a href="#">PARTNER WITH US</a>
                            </li>
                            <li>
                                <a href="#">ABOUT</a>
                            </li>
                            <li>
                                <a href="#">CONTACT</a>
                            </li>
                            <li>
                                <a href="#">PRESS</a>
                            </li>
                            <li>
                                <a href="#">TERMS OF USE</a>
                            </li>
                            <li>
                                <a href="#">PRIVACY POLICY</a>
                            </li>
                            <li>
                                <a href="#">OUR TEAM</a>
                            </li>
                            <li>
                                <a href="#">SITE MAP</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer