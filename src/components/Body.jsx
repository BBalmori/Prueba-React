import React from 'react' ;
import '../css/App.css';


export default class Body extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <div>
        <img id="imagen" display="none" src={this.props.attach.attachment.url} width="400" height="300" alt=""/>
      </div>
    );
  }
}
