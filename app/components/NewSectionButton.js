import React from 'react';

export default class NewSectionButton extends React.Component {


  constructor(props) {
    super(props);
  }

  handleButtonClick(e) {
  	this.props.onNewSectionButtonClick();
  }

  render() {
    return (
      <div>
      	<button onClick={this.handleButtonClick} >
      		New Section
      	</button>
      </div>
    );
  }
}
