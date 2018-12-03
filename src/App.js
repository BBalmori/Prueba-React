import React, { Component } from 'react';
import { connect } from 'react-redux'
import Game from './Game.js'

//export default
class App extends Component {
  constructor(props){
      super(props);
  }
  render() {
    return(
      <div>
        <Game question = {this.props.questions[this.props.currentQuestion]} />
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
