import React from 'react';
import SongIcon from './SongIcon'
export default class SongList extends React.Component {


  constructor(props) {
    super(props);
  }

  render() {
  	var list = []
    var index = 0
    for(let song of this.props.songs){
      var currentSong = <SongIcon song={song} key={index}/>
      list.push(currentSong)
      index += 1

    }
    return (
      <div>
        {list}
      	
      </div>
        
    );
  }
}
