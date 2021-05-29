import { useLang } from './../Context/LanguageContext'
import translates from "./../translates"

function Articles() {

    const [lang] = useLang()

    return (
        <>
            <section className="articles">
                <div className="container">
                    <h2 className="articles-heading">More Latest</h2>
                    <ul className="articles-list">
                        <li className="articles-item">
                            <a className="articles-link" href="#">
                                <div className="articles-text-wrapper">
                                    <h3 className="articles-title">{translates[lang].articleOneTitle}</h3>
                                    <p className="articles-desc">{translates[lang].articleOneDesc}</p>
                                    <div className="hero-details">
                                        <span className="hero-author">{translates[lang].articleOneAuthor}</span>
                                        <span className="hero-time">{translates[lang].articleOneDate}</span>
                                    </div>
                                </div>
                                <img className="articles-img" src="./img/art-1.jpeg" alt="Harry Potter Book" width="500" />
                            </a>
                        </li>
                        <li className="articles-item">
                            <a className="articles-link" href="#">
                                <div className="articles-text-wrapper">
                                    <h3 className="articles-title">{translates[lang].articleTwoTitle}</h3>
                                    <p className="articles-desc">{translates[lang].articleTwoDesc}</p>
                                    <div className="hero-details">
                                        <span className="hero-author">{translates[lang].articleTwoAuthor}</span>
                                        <span className="hero-time">{translates[lang].articleTwoDate}</span>
                                    </div>
                                </div>
                                <img className="articles-img" src="./img/art-2.jpeg" alt="People in front of laptop" width="500" />
                            </a>
                        </li>
                        <li className="articles-item">
                            <a className="articles-link" href="#">
                                <div className="articles-text-wrapper">
                                    <h3 className="articles-title">{translates[lang].articleThreeTitle}</h3>
                                    <p className="articles-desc">{translates[lang].articleThreeDesc}</p>
                                    <div className="hero-details">
                                        <span className="hero-author">{translates[lang].articleThreeAuthor}</span>
                                        <span className="hero-time">{translates[lang].articleThreeDate}</span>
                                    </div>
                                </div>
                                <img className="articles-img" src="./img/art-3.jpeg" alt="Chess in the backyard" width="500" />
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Articles