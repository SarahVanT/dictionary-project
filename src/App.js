import logo from './Booklover.svg';
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className='container'>
        <header className="App-header">
          <img src={logo} className="img-fluid App-logo" alt="logo" />
        </header>
        <Dictionary defaultKeyword="Coding" />
        <footer className='App-footer'>
          <small>
            This project was coded by Sarah VanTilburg and is open-sourced on{" "}
            <a 
              href='https://github.com/SarahVanT/dictionary-project'
              target='_blank'
              rel="noreferrer"
            >
              Github
            </a>{" "}
            and hosted on{" "}
            <a
              href='https://gregarious-biscochitos-b9c1ed.netlify.app/'
              target='_blank'
              rel="noreferrer"
            >
              Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
