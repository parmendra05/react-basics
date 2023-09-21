import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Welcome2 from './components/Welcome2';
import Welcome3 from './components/Welcome3';
import Greeting from './components/Greeting';
import Greeting2 from './components/Greeting2';
import { FirstComponent, SecondComponent } from './components/MyComponent';
// Another Ways
import { FirstComponent as FC, SecondComponent as SC} from './components/MyComponent';
import HelloJSXWorld from './components/HelloJSXWorld';
import HelloJSXWorld2 from './components/HelloJSXWorld2';
import HelloJSXWorld3 from './components/HelloJSXWorld3';
import Student from './components/Student';
function App() {
  return (
    <div className="App"> {/*
      <h1>Hello React</h1>
      <Welcome/>
      <Welcome2/>
      <Welcome3 name="Parmendra"/>

      <Greeting/>
      <Greeting2 name ="Kumar"/>
      
      <FirstComponent/>
      <SecondComponent/>
      <hr/>
      <FC/>
  <SC/> */}
  {/*
      <HelloJSXWorld/>
      <HelloJSXWorld2/>
      <hr/>
      <HelloJSXWorld3/>
*/}
<Student 
firstName="Parmendra"
lastName="Kumar"
email="pk@gm.com"
/>
    </div>
  );
}

export default App;
