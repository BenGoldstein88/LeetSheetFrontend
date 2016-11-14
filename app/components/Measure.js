import React from 'react';
import Beat from './Beat'
export default class Measure extends React.Component {
  // static propTypes = {
  //   name: React.PropTypes.string,
  // };

  constructor(props) {
    super(props);
  }

  render() {
    console.log("Chords: ", this.props.measure.chords)
    var index = 0
    var list = []
    for(let chord of this.props.measure.chords) {
      if(chord !== null) {
        var currentBeat = <Beat chord={chord} key={index} />
      } else {
        var currentBeat = <Beat chord="" key={index} />
      }
      list.push(currentBeat)
      index++;
    }
    console.log("List: ", list)
    return (
      <div style={{
        height: "30%",
        width: "24%",
        border: "1px solid red",
        display: "inline-block",
        verticalAlign: "top"
      }}>
        {list}
      </div>
    );
  }
}
