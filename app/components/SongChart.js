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
    this.refreshSongChart = this.refreshSongChart.bind(this)
    this.handleNewSectionButtonClick = this.handleNewSectionButtonClick.bind(this)
  }

  componentWillMount() {
    this.refreshSongChart();

  }

  handleNewSectionButtonClick() {
    var url = 'http://localhost:3000/songs/sections/'+ this.props.song.id
    var that = this
    Axios({
      method: 'patch',
      url: url
    })
    .then(function(response) {
      console.log("Response: ", response)
      that.refreshSongChart(); 
    })
    .catch(function(error) {
      console.log("Error: ", error)

    }) 

    
  }



  refreshSongChart() {
    console.log("Props: ", this.props)
    console.log("State: ", this.state)
    var url = 'http://localhost:3000/songs/'+ this.props.song.id
    var that = this
    Axios.get(url)
    .then(function(response) {
      console.log("Response: ", response)
      that.setState({
        sections: response.data.sections,
        measuresMap: response.data.measures
      })
    })
    .catch(function(error) {
      console.log("Error: ", error)
    })
  }

  render() {
    var list = []
    var index = 1
    if(this.state.sections.length > 0) {

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

      <button onClick={this.handleNewSectionButtonClick} >
      New Section
      </button>
      <button onClick={this.props.onHomeButtonClick} >
      Home
      </button>
      </div>
      );
  }
}
