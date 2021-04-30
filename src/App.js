import './App.css';
import Home from './component/pages/Home';
import About from './component/pages/About';
import Contact from './component/pages/Contact';
import Pagenotfound from './component/pages/Pagenotfound';
import Header from './component/layout/Header';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom' ;
import AddUser from './component/users/AddUser';
import EditIser from './component/users/EditUser';
import View from './component/users/View';




function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/add" component={AddUser} />
        <Route exact path="/update/id"  component={EditIser} />
        <Route exact path="/view/:id"  component={View} />

        <Route  exact path ="*" component={Pagenotfound} />

      </Switch>
    </Router>
  );
}

export default App;
