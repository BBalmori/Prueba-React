import React, { Component } from 'react';
import { connect } from 'react-redux';
import {questionAnswer} from './redux/actions.js';
import Game from './Game.js';

//export default
class App extends Component {
  constructor(props){
      super(props);
  }
  render() {
    let attach = this.props.questions[this.props.currentQuestion].attachment.filename;
    console.log(attach);
    return(
      <div>
        <div>
          <Game question = {this.props.questions[this.props.currentQuestion]}
            onQuestionAnswer={(answer) => {
              this.props.dispatch(questionAnswer(this.props.currentQuestion, answer))
          }} />
        </div>
        <img src = "attach" width="150"/>
        <nav>
          <ul>
            <button>NEXT</button>
            <button>PREVIOUS</button>
            <button>SUBMIT</button>
          </ul>
        </nav>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    score: state.score,
    finished: state.finished,
    currentQuestion: state.currentQuestion,
    questions: state.questions
  };
}

export default connect(mapStateToProps)(App)
