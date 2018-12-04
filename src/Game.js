import React from 'react' ;

export default class Game extends React.Component {
  render () {
    return (
      <div>
        <h1>
          {this.props.question.question}
        </h1>
        <img src={this.props.question.attachment.url} width="200"/>
        <input type="text" value={this.props.question.userAnswer || ""} onChange={(e) => {
            this.props.onQuestionAnswer(e.target.value);
        }}/>
      </div>
    );
  }
}
