import React from 'react';

export default class NewMeasureForm extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
    	chords: ['', '', '', '']
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
  	var chord = e.target.value
  	var arrayIndex = e.target.getAttribute("name")

  	this.state.chords[arrayIndex] = chord
  	console.log("State after change: ", this.state)
  }



  render() {
    return (
      <div style={{
        height: "30%",
        width: "25%",
        border: "1px solid blue",
        display: "inline-block"
        }} >
        <input type='text' name={0} onChange={this.handleChange} style={{
    		height: "99%",
    		width: "24%",
    		display: "inline-block"
        }}/>

        <input type='text' onChange={this.handleChange} name={1} style={{
    		height: "99%",
    		width: "24%",
    		display: "inline-block"
        }}/>
        <input type='text' onChange={this.handleChange} name={2} style={{
    		height: "99%",
    		width: "24%",
    		display: "inline-block"
        }}/>
        <input type='text' onChange={this.handleChange} name={3} style={{
    		height: "99%",
    		width: "24%",
    		display: "inline-block"
        }}/>
        


      </div>
    );
  }
}
