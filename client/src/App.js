import './App.css';
import Home from './pages/Home';
import {Switch, Route} from 'react-router-dom'
import {Container} from 'semantic-ui-react'
import NavBar from './components/NavBar';
import About from './pages/About';
import PRIMARY_COLOR from 'styles'

function App() {
  return (
    <>
    <h1 style={{color: PRIMARY_COLOR}}> Hi </h1>
    <NavBar />
    <Container>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
    </Switch>
    </Container>
    </>
  );
}

export default App;
