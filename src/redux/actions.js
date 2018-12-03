export function playQuiz( ){
  return {
    type: "PLAY_QUIZ",
    currentQuestion: currentQuestion,
    questions: questions,
    finished: finished,
    score: score
  }
}

export function questions( ){
  return {
    type: "QUESTIONS",
    currentQuestion: currentQuestion,
    questions: questions,
    finished: finished,
    score: score
  }
}

export function finishQuiz( ){
  return {
    type: "FINISH_QUIZ",
    currentQuestion: currentQuestion,
    questions: questions,
    finished: finished,
    score: score
  }
}

export function scoreQuiz( ){
  return {
    type: "SCORE_QUIZ",
    currentQuestion: currentQuestion,
    questions: questions,
    finished: finished,
    score: score
  }
}
