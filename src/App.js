import './App.css';
import Home from './Components/Home.js'
import Header from './Components/Header.js'
import Menu from './Components/Menu'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
    <Header/>

    <Router>
      <Routes>
        <Route exact path='/Menu' component={Menu}/>
        <Route exact path='/Story' component={Menu}/>
        <Route exact path='/Contact' component={Menu}/>
        <Route path='/' component={Home}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
