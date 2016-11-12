import React from 'react';
import Measure from './Measure'
import NewMeasureForm from './NewMeasureForm'
export default class Section extends React.Component {

	constructor(props) {
		super(props);

	}

	render() {
		console.log("Measures for Section: ", this.props.measures)
		var list = []
		var index = 0
		if (this.props.measures) {
			for(let measure of this.props.measures) {
				var currentMeasure = <Measure measure={measure} key={index} section_id={this.props.section_id}/>
				list.push(currentMeasure)
			}
		}
		return (
			<div style={{
        height: "30%",
        width: "100%",
        border: "1px solid green" }} >
			{list}

			<NewMeasureForm />
			</div>
		);
	}
}
