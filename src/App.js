import { LanguageProvider } from "./Context/LanguageContext";

import Header from './Components/Header'
import Hero from './Components/Hero'
import Articles from './Components/Articles'
import Footer from './Components/Footer'

import './App.css';

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <Header />
        <Hero />
        <Articles />
        <Footer />  
      </LanguageProvider>
    </div>
  );
}

export default App;
