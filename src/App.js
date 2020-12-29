import './App.css';
import NavBar from './components/navbar'
import Inicio from './components/inicio'
import Acerca from './components/acerca'
import Proyectos from './components/proyectos'
import Contactame from './components/contactame'


export default function App() {

  return (
    <div>
      <NavBar />
      <Inicio />
      <Acerca />
      <Proyectos />
      <Contactame />
    </div>
  );
}
