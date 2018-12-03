export const QUESTION_ANSWER = 'QUESTION_ANSWER';
export const CHANGE_QUESTION = 'CHANGE_QUESTION';
export const SUBMIT = 'SUBMIT';
export const INIT_QUESTION = 'INIT_QUESTION';

export function questionAnswer(index, answer) {
  return {type: 'QUESTION_ANSWER', playload: {index, answer}};
}

export function changeQuestion(index) {
  return {type: 'CHANGE_QUESTION', playload: {index}};
}

export function submit(questions, index, answer, finished) {
  return {type: 'SUBMIT', playload: {index, answer}, finished: finished}; //y no se si algun atrib mas
}

export function initQuestions(questions, finished) {
  return {type: 'INIT_QUESTION', questions: questions}
}
