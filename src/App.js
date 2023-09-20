import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Welcome2 from './components/Welcome2';
import Welcome3 from './components/Welcome3';
import Greeting from './components/Greeting';
import Greeting2 from './components/Greeting2';

function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
      <Welcome/>
      <Welcome2/>
      <Welcome3 name="Parmendra"/>

      <Greeting/>
      <Greeting2 name ="Kumar"/>
    </div>
  );
}

export default App;
