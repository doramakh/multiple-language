import {createContext, useContext, useReducer} from 'react'

const LanguageContext = createContext()

const LanguageProvider = (props) => {

    const langs = ['en', 'ru', 'uz']

    const reducer = (state, name) => {
        if(langs.includes(name)) {
            window.localStorage.setItem('__lang', name)
            return name
        } 

        return state
    }

    const initial = () => window.localStorage.getItem('__lang') || 'en'

    const [lang, setLang] = useReducer(reducer, null, initial)

    return (
        <>
            <LanguageContext.Provider value={{lang, setLang}}>
                {props.children}
            </LanguageContext.Provider>
        </>
    )
}

const useLang = () => {
    const {lang, setLang} = useContext(LanguageContext)
    return [lang, setLang]
}


export {LanguageProvider, useLang }