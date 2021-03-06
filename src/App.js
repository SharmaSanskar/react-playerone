import Home from './pages/Home';
import GlobalStyles from './components/GlobalStyles';
import { Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <GlobalStyles />

      <Nav />

      <Route path={['/', '/game/:id']}>
        <Home />
      </Route>

      <Footer />
    </div>
  );
}

export default App;
