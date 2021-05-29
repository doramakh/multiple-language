function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container footer-container">
                    <div className="quick-links">
                        <a className="logo-link" href="#">
                            <img className="logo footer-logo" src="./img/logo.png" alt="Apartment Teraphy Logo" width="240"/>
                        </a>

                        <div>
                            <span className="footer-tip">Got a tip, kitchen tour, or other story our readers should see?</span>
                            <a className="footer-tip-link" href="#">TELL US ABOUT IT!</a>
                        </div>
                        <span className="copyright">
                        Apartment Therapy is © 1994-2021  Apartment Therapy, LLC
                        </span>
                    </div>
                    <div className="read-links">
                        <h3 className="footer-heading">READ</h3>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <a className="footer-link" href="#">HOUSE TOURS</a>
                            </li>
                            <li className="footer-item">
                                <a className="footer-link" href="#">STYLE</a>
                            </li>
                            <li className="footer-item">
                                <a className="footer-link" href="#">HOW TO</a>
                            </li>
                            <li className="footer-item">
                                <a className="footer-link" href="#">ORGANIZE & CLEAN</a>
                            </li>
                            <li className="footer-item">
                                <a className="footer-link" href="#">LIVING</a>
                            </li>
                            <li className="footer-item">
                                <a className="footer-link" href="#">SHOP</a>
                            </li>
                        </ul>
                    </div>
                    <div className="company-links">
                        <h3 className="footer-heading">COMPANY</h3>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <a className="footer-link" href="#">PARTNER WITH US</a>
                            </li>
                            <li className="footer-item">
                                <a className="footer-link" href="#">ABOUT</a>
                            </li>
                            <li className="footer-item">
                                <a className="footer-link" href="#">CONTACT</a>
                            </li>
                            <li className="footer-item">
                                <a className="footer-link" href="#">PRESS</a>
                            </li>
                            <li className="footer-item">
                                <a className="footer-link" href="#">TERMS OF USE</a>
                            </li>
                            <li className="footer-item">
                                <a className="footer-link" href="#">PRIVACY POLICY</a>
                            </li>
                            <li className="footer-item">
                                <a className="footer-link" href="#">OUR TEAM</a>
                            </li>
                            <li className="footer-item">
                                <a className="footer-link" href="#">SITE MAP</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer