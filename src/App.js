import './App.css';
import Dictionary from "./Dictionary.js"

export default function App() {
  return (
    <div className="App">
      <header className="text-center">       
       <h1>Dictionary</h1>
        <main>
          <Dictionary defaultKeyword = "sunset"/>
        </main>
      </header>
      <footer>
      This project was coded by{" "}
        <a
          href="https://linkedin.com/in/margarita-kozlova"
          target="_blank"
          rel="noreferrer"
        >
         Margarita Kozlova 
        </a>{" "}
        and is open-sourced on{" "}
        <a
          href="https://github.com/MargaritaKremen/dictionary-project"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://elegant-valkyrie-a26e75.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
        .
        
        </footer>
    </div>
  );
}

 
