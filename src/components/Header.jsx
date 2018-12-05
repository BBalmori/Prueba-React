import React from 'react' ;
import '../css/App.css';


export default class Header extends React.Component {
  render () {
    return (
      <h1 className="Question">
        {this.props.q.question}
      </h1>
    )
  }
}
