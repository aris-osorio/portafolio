<<<<<<< HEAD
<<<<<<< HEAD
import './App.css';
import React, { useEffect } from 'react'
import NavBar from './components/navbar'
import Inicio from './components/inicio'
import Acerca from './components/acerca'
import Proyectos from './components/proyectos'
import Contactame from './components/contactame'

export default function App() {

  useEffect(() => {
    elementoAparece[0].style.opacity = 1;
  });

  let html = document.getElementsByTagName('html')[0];
  let navBar = document.getElementsByClassName('navbar');
  let elementoAparece = document.getElementsByClassName('aparece');
  
  window.addEventListener('scroll', (event) => {
    let topVent = html.scrollTop;
    for(let i = 0; i < elementoAparece.length; i++){
      let topelemAparece = elementoAparece[i].offsetTop;
      if(topVent > topelemAparece - 400){
        elementoAparece[i].style.opacity = 1;
        for(let j = 0; j < elementoAparece.length; j++){
          if(j !== i)
          {
            elementoAparece[j].style.opacity = 0;
          }
        }
      }
      if(topVent === 0)
      {
        navBar[0].classList.remove("obscuro")
      }
      else
      {
        navBar[0].classList.add("obscuro")
      }
    }
  });
  
  document.title = 'Aris Osorio';
  return (
    <div className="app">
      <NavBar />
      <Inicio />
      <Acerca />
      <Proyectos />
      <Contactame />
    </div>
  );
}
=======
import logo from './logo.svg';
=======
>>>>>>> 186a602 (react project 'portafiolio' created)
import './App.css';
import Intro from './components/intro';

export default function App() {

  
  return (
    <div>
      <Intro/>
    </div>
  )
}
<<<<<<< HEAD

export default App;
>>>>>>> 5f08165 (Initialize project using Create React App)
=======
>>>>>>> 186a602 (react project 'portafiolio' created)
