import './App.css';
import NavBar from './components/navbar'
import Inicio from './components/inicio'
import Acerca from './components/acerca'
import Proyectos from './components/proyectos'
import Contactame from './components/contactame'
import {Router, Route} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <NavBar />
      <Route path="/" component={Inicio}/>
      <Route path="/Acerca" component = {Acerca}/>
      <Route path="/Proyectos" component={Proyectos}/>
      <Route path="/Contactame" component={Contactame}/>
    </Router>
  );
}
