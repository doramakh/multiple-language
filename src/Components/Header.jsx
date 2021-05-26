function Header () {
    return (
        <>
            <header className="header">
                <div className="container header-container">
                    <a className="logo-link" href="#">
                        <img src="./img/logo.png" alt="Apartment Teraphy Logo" width="240"/>
                    </a>

                    <div className="header-right">
                        <a href="#">NEWSLETTERS</a>
                        <a href="#"></a>
                        <a className="profile-link" href="#">
                            <img src="./img/profile.webp" alt="Profile img" width="64"/>
                        </a>
                        <label htmlFor="search">
                        <input type="text" name="search" id="search"/>
                        <img src="./img/search.png" alt="Search icon" width="32"/>
                        </label>
                        
                    </div>
                </div>
                <nav className="nav">
                    <div className="container"></div>
                </nav>
            </header>
        </>
    );
}

export default Header