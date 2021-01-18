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
  console.log(html);
  let elementoAparece = document.getElementsByClassName('aparece');
  console.log(elementoAparece);
  
  window.addEventListener('scroll', (event) => {
    let topVent = html.scrollTop;
    console.log(topVent);
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
