
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store';
import Home from './Layout/Home';
import Navbar from './Layout/Navbar';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Build from './components/BuildPages';
import Resume_1 from './components/Resumes/Resume_1';

function App() {
  return (
    <Provider store={store} >
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/create" component={Build} exact  />
          <Route path="/resume" exact component={Resume_1} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
