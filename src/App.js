import './App.css';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {Helmet} from "react-helmet";


let BancoDeFrases = [["Que el sermón principal de tu vida lo predique tu conducta","Charles Spurgeon"],["La oración es el pequeño nervio que mueve el músculo del Omnipotente","Charles Spurgeon"],["Cuando no podamos ver el rostro de Dios, tengamos confianza bajo la sombra de sus alas","Charles Spurgeon"],["La moralidad puede mantenerte fuera de la cárcel pero solo la sangre de Jesús puede mantenerte fuera del infierno","Charles Spurgeon"],["Un hombre con Dios siempre es la mayoría","John Knox"],["Dios tiene dos tronos. Uno en lo más alto de los cielos y otro en el más humilde de los corazones","D.L. Moody"],["La paz no viene por la ausencia de problemas sino de la presencia de Dios","Alexander Maclaren"],["En ocasiones parecería que Dios nos está matando cuando en realidad nos está salvando","Tim Keller"],["No olvides orar hoy porque Dios no olvidó despertarte esta mañana","Oswald Chambers"],["Aunque la vida te de mil motivos para renunciar... Dios te da mil y un motivos más para seguir adelante","Anónimo"]];
let backgroundColors = ["#55B4B0","#FF6F61","#01FF70","#FFDC00","#F7CAC9","#92A8D1","#45B8AC","#EFC050","#98B4D4","#7FCDCD"];



class MyComponent extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        index: Math.floor(Math.random()*10)
      }
      this.randomIndex= this.randomIndex.bind(this);
    }
    randomIndex(){
      this.setState({
        index: Math.floor(Math.random()*10)
      });
    }
    render(){
      
      let Frase = BancoDeFrases[this.state.index][0]; 
      let Autor = BancoDeFrases[this.state.index][1];
      let link = `https://twitter.com/intent/tweet?hashtags=Cita,Quotes&text=${encodeURIComponent(Frase+"\n-"+Autor)}`;
      const fondo = `${backgroundColors[this.state.index]}`;


      return (
        <div id="quote-box" className="quotebox">
        <p id="text"><i className="fa-solid fa-quote-left"></i> {Frase} <i className="fa-solid fa-quote-right"></i></p>
        <p id="author"> - {Autor}</p>
        <div className="quote-box-buttom">
        <a href={link} id='tweet-quote' target="_blank" rel="noreferrer" title="Tweet this!"><FontAwesomeIcon icon={faTwitter} /></a>
        <button id="new-quote" onClick={this.randomIndex}>Siguiente</button>
        <Helmet
        style={[{
        "cssText": `
        html {
          height: 100%;
        }
        body {
          transition: background 2s;
          background : ${fondo};
          }
    
        `
        }]}
        />
        </div>
        </div>
      );
    }
  }


function App() {
  return (
    <div className="App">
      <MyComponent />
    </div>
  );
}

export default App;

//ssfsf
