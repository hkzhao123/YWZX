import React from 'react';
//HashRouter,支持#识别,http://localhost:8080/#/Page3/
import { HashRouter as Router,Route} from 'react-router-dom';
import Home from './components/Home';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import './App.css';

class App extends React.Component {
  render(){
    return(
        <Router >
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/Page1" component={Page1} />
            <Route path="/Page2" component={Page2} />
            <Route path="/Page3" component={Page3} />
          </div>
        </Router>
    )

  }
}
export default App;

