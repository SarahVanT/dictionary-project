import logo from './redo 1.png';
import './App.css';
import Dictionary from "./Dictionary";

// Defining the 'App' component
export default function App() {
  return (
    <div className="App">
      <div className='container'>
        <header className="App-header">
          <img src={logo} className="img-fluid App-logo" alt="Dictionary App Logo" />
        </header>
        <Dictionary defaultKeyword="Coding" />
        <footer className='App-footer'>
          <small>
            This project was coded by{" "} 
            <a 
              href='https://joyful-tiramisu-ce3d71.netlify.app/' 
              target='_blank'
              rel="noreferrer"
            >
                Sarah VanTilburg
            </a> and is open-sourced on{" "}
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
