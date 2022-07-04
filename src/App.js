import './App.css';
import Dweeb from "./assets/dweeb.png";

function App() {
  return (
    <div className="App">
      <h1>Hello Dweebs</h1>
      <p>This site will help you on your life journey as a dweeb.</p>
      <img src={Dweeb} alt="dweeb" />
    </div>
  );
}

export default App;
