function Header () {
    return (
        <>
            <header className="header">
                <div className="container header-container">
                    <a className="logo-link" href="#">
                        <img className="logo" src="./img/logo.png" alt="Apartment Teraphy Logo" width="240"/>
                    </a>

                    <div className="header-right">
                        <a className="header-news" href="#">NEWSLETTERS</a>
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
                                <a className="nav-link" href="#">HOUSE TOURS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">STYLE</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">HOW TO</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">ORGANIZE & CLEAN</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">LIVING</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">SHOP</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">MORE</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header