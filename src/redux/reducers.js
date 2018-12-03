import { combineReducers } from 'redux';

function score(state = 0, action = {}) {
  switch (action.type) {
    case "SCORE_QUIZ":
      let newState = state;
      return newState;
      break;
    default:
      return state;
  }
}

function finished(state = false, action = {}) {
  switch (action.type) {
    case "FINISH_QUIZ":
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
    case "PLAY_QUIZ":
      let newState = state;
        //segun la pregunta actual pongo la siguiente preg en this.currentQuestion
      return newState;
      break;
    default:
      return state;
  }
}

function questions(state = [], action = {}) {
  switch (action.type) {
    case "QUESTIONS":
      let newState = state;
        //aqui no se muy bien
      return newState;
      break;
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
