import React from 'react';

export default class Beat extends React.Component {


  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{
      	width: "24%",
      	height: "99%",
      	display: "inline-block",
        border: "1px dotted orange",
        verticalAlign: "top",
        textAlign: "center"

      }}>
      	{this.props.chord}
      </div>
    );
  }
}
