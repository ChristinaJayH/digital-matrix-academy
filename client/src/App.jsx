import { Route, Switch, HashRouter as Router } from 'react-router-dom';
import AboutUs from './components/AboutUs/AboutUs';
import ContactForm from './components/ContactForm/ContactForm';
import Join from './components/Join/Join';
import Footer from './components/Footer/Footer';
import HomeLayout from './components/Home/HomeLayout';
import ThankYou from './pages/ThankYou';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomeLayout} />
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/contact" component={ContactForm} />
          <Route exact path="/join" component={Join} />
          <Route exact path="/thank-you" component={ThankYou} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
