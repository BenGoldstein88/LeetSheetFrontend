import React from 'react';
import AppBanner from './AppBanner'
import AppMainWindow from './AppMainWindow'

export default class Home extends React.Component {

  render() {
    return (
      <div>
      	<AppBanner />
      	<AppMainWindow />

      </div>
    );
  }
}
