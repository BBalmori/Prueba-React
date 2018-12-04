import { combineReducers } from 'redux';
import { QUESTION_ANSWER } from './actions'
import { NEXT_QUESTION  } from './actions'
import { PREV_QUESTION } from './actions'
import { SUBMIT } from './actions'
import { INIT_QUESTION } from './actions'

function score(state = 0, action = {}) {
  switch (action.type) {
    case "SUBMIT":
      let newState = state;
        // evaluar todas las respuestas
      return newState;
      break;
    default:
      return state;
  }
}

function finished(state = false, action = {}) {
  switch (action.type) {
    case "SUBMIT":
      let newState = state;
        //cambiamos this.state.finished = true si ya he jugado 10 preguntas
      return newState;
      break;
    default:
      return state;
  }
}

function currentQuestion(state = 0, action = {}) {
  switch (action.type) {
    case "NEXT_QUESTION":
      if( state === action.load.length-1 ){
        state = 0;
        return state;
      }
      return state + 1;
    case "PREV_QUESTION":
      if( state === 0 ){
        return state;
      }
      return state - 1;
    default:
      return state;
  }
}

function questions(state = [], action = {}) {
  switch (action.type) {
    case "QUESTIONS_ANSWER":
      return state.map((question, i) => {
        return {...question, userAnswer: action.load.index === i ? action.load.answer : question.userAnswer}
      })
    default:
      return state;
  }
}

const GlobalState = (combineReducers({
  score,
  finished,
  currentQuestion,
  questions
}));

export default GlobalState;
