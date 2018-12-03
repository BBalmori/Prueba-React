import { combineReducers } from 'redux';
import { QUESTION_ANSWER } from './actions'
import { CHANGE_QUESTION  } from './actions'
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
    case "CHANGE_QUESTION":
      let newState = state;
        //modificar currentQuestion cuando hago click en next y previous si hay pregs
      return newState;
      break;
    default:
      return state;
  }
}

function questions(state = [], action = {}) {
  switch (action.type) {
    case "QUESTIONS_ANSWER":
      return state.map((question, i) => {
        return {...question, userAnswer: action.playload === i ? action.playload.answer : question.userAnswer}
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
