import React from 'react';
import Axios from 'axios';
import Section from './Section'
export default class SongChart extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      sections: [],
      measuresMap: {}

    }
    this.updateSongChart = this.updateSongChart.bind(this)
  }

  componentWillMount() {
    this.updateSongChart();

  }



  updateSongChart() {
    var url = 'http://localhost:3000/songs/'+ this.props.song.id
    var that = this
    Axios.get(url)
    .then(function(response) {
      console.log("Response: ", response)
      that.setState({
        sections: response.data.sections,
        measuresMap: response.data.measures
      })
      console.log("State: ", that.state)
    })
    .catch(function(error) {
      console.log("Error: ", error)
    })
  }

  render() {
    var list = []
    var index = 1
    if(this.state.sections.length > 0) {
      console.log("Sections: ", this.state.sections)
      console.log("MeasuresMap: ", this.state.measuresMap)
      for(let section of this.state.sections) {
        var currentSection = <Section measures={this.state.measuresMap[index]} section_id={section.id} key={index}/>
        list.push(currentSection)
        index += 1

      }

    }
    console.log("List: ", list)
    return (
      <div>
      {this.props.song.name}
      <br />
      Sections: 
      {list}


      <button onClick={this.props.onHomeButtonClick} >
      Home
      </button>
      </div>
      );
  }
}
