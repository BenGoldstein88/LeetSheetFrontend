import React from 'react';
import Axios from 'axios';
import Section from './Section'
import Measure from './Measure'
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
    var currentMeasuresMap = this.state.measuresMap
    var currentMeasuresArray = currentMeasuresMap[sectionID]

    var blankMeasure = <Measure section_id={sectionID} chords={['', '', '', '']} key={'newBlankMeasure'}  />
    console.log("TEST blankMeasure", blankMeasure)
    console.log("State of SongChart: ", this.state)

    currentMeasuresArray.push(blankMeasure)

    console.log("CurrentMeasuresArray TEST: ", currentMeasuresArray)



    currentMeasuresMap[sectionID] = currentMeasuresArray


    this.setState({
      measuresMap: currentMeasuresMap
    })
    console.log("State after new measure button click: ", this.state)
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
    var index = 0
    if(this.state.sections.length > 0) {

      for(let section of this.state.sections) {
        var currentSection = <Section measures={this.state.measuresMap[section.id]} sectionID={section.id} key={index} onNewMeasureFormButtonClick={this.handleNewMeasureFormButtonClick}/>
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
