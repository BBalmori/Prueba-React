import React from 'react' ;
import './css/Game.css';

export default class Game extends React.Component {


  render () {
    return (
      <div>
        <h1 className="GameQuestion">
          {this.props.question.question}
        </h1>
        <div className="cuadro">
          <img id="imagen" src={this.props.question.attachment.url} width="400" height="300" className="img"/>
            
          <input id="texto" type="text" placeholder="Introduzca aquí la respuesta" value={this.props.question.userAnswer || ""} onChange={(e)=> {
              this.props.onQuestionAnswer(e.target.value);
          }}/>
        </div>
      </div>
    );
  }
}
