import React from 'react';

export default class Beat extends React.Component {


  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{
      	width: "25%",
      	height: "100%",
      	display: "inline-block"
      }}>
      	{this.props.chord}
      </div>
    );
  }
}
