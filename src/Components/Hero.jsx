import { useLang } from './../Context/LanguageContext'
import translates from "./../translates"

function Hero () {
    const [lang] = useLang() 
    
    return (
        <>
            <section className="hero">
                <div className="container">
                    <a className="article-link" href="#">
                        <img className="hero-img" src="./img/hero-img.jpeg" alt="Article img"/>
                        <span className="hero-category">{translates[lang].heroArticleType}</span>
                        <h2 className="hero-title">{translates[lang].heroArticleTitle}</h2>
                        <div className="hero-details">
                            <span className="hero-author">{translates[lang].heroArticleAuthor}</span>
                            <span className="hero-time">{translates[lang].heroArticleDate}</span>
                        </div>
                    </a>
                </div>
            </section>
        </>
    )
}

export default Hero