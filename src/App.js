import React, { Component } from 'react';
import { connect } from 'react-redux';
import {questionAnswer, nextQuestion, prevQuestion, submit, initQuestions} from './redux/actions.js';
import Game from './Game.js';

//export default
class App extends Component {
  constructor(props){
      super(props);
  }
  render() {
    console.log(this.props);
    return(
      <div>
        <div>
          <Game question = {this.props.questions[this.props.currentQuestion]}
            onQuestionAnswer={(answer) => {
              this.props.dispatch(questionAnswer(this.props.currentQuestion, answer))
          }} />
          <button id = "next" onClick={()=>this.props.dispatch(nextQuestion(this.props.currentQuestion, this.props.questions.length))}>NEXT</button>
          <button onClick={()=>this.props.dispatch(prevQuestion(this.props.currentQuestion, this.props.questions.length))}>PREV</button>
          <button onClick={()=>this.props.dispatch(submit())}>SUBMIT</button>
        </div>
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
