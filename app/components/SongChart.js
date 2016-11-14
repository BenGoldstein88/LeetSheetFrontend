import React from 'react';
import Axios from 'axios';
import Section from './Section'
import NewMeasureFormButton from './NewMeasureFormButton'
export default class SongChart extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      sections: [],
      measuresMap: {}

    }
    this.refreshSongChart = this.refreshSongChart.bind(this)
    this.handleNewSectionButtonClick = this.handleNewSectionButtonClick.bind(this)
    this.handleNewMeasureFormButtonClick = this.handleNewMeasureFormButtonClick.bind(this)
  }

  componentWillMount() {
    this.refreshSongChart();

  }

  handleNewMeasureFormButtonClick(sectionID) {
    var blankMeasure = ['', '', '', '']
    console.log("State of SongChart: ", this.state)
    this.state.measuresMap[sectionID].push(blankMeasure)

    console.log("State after new measure button click: ", this.state)
    this.setState({
      measuresMap: this.state.measuresMap
    })
  }

  handleNewSectionButtonClick() {
    var url = 'http://localhost:3000/songs/sections/'+ this.props.song.id
    var that = this
    Axios({
      method: 'patch',
      url: url
    })
    .then(function(response) {
      console.log("Response from New Section Creation: ", response)
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
      console.log("Response from Refresh Song Chart: ", response)
      that.setState({
        sections: response.data.sections,
        measuresMap: response.data.measures
      })
      console.log("New State after Refresh Song Chart: ", that.state)
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
        var currentSection = <Section measures={this.state.measuresMap[section.id]} section_id={section.id} key={index}/>
        list.push(currentSection)
        index += 1
      list.push(<NewMeasureFormButton sectionID={section.id} onButtonClick={this.handleNewMeasureFormButtonClick}/>)

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
