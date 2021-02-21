import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './components/Home';
import About from './components/About';
import Courses from './components/Courses';
import Training from './components/Training';
import Testimonies from './components/Testimonies';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/courses" component={Courses} />
        <Route path="/training" component={Training} />
        <Route path="/testimonies" component={Testimonies} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
