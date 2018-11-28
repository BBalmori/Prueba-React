import { combineReducers } from 'redux';

function score(state = 0, action = {}) {
  switch (action.type) {
    /*    case expression:
        //rellenar todo esto con código
        break;*/
      default:
      return state

  }
}

function finished(state = false, action = {}) {
  switch (action.type) {
    /*    case expression:
        //rellenar todo esto con código
        break;*/
      default:
      return state
  }
}

function currentQuestion(state = 0, action = {}) {
  switch (action.type) {
    /*    case expression:
        //rellenar todo esto con código
        break;*/
      default:
    return state
  }
}

function questions(state = [], action = {}) {
  switch (action.type) {
    /*    case expression:
        //rellenar todo esto con código
        break;*/
      default:
    return state
  }
}

const GlobalState = (combineReducers({
  score,
  finished,
  currentQuestion,
  questions
}));

export default GlobalState;
