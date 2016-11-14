import React from 'react';

export default class NewMeasureFormButton extends React.Component {


  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
  	this.props.onButtonClick(this.props.sectionID);

  }

  render() {
    return (
      <button onClick={this.handleClick}>
      	+
      </button>
    );
  }
}
