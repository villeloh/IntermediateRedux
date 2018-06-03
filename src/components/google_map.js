import React, { Component } from 'react';

class GoogleMap extends Component {

  componentDidMount() {

    // google maps functionality comes from a script that's included in index.html
    new google.maps.Map(
      this.refs.map, 
      {
        zoom: 12,
        center: {
          lat: this.props.lat,
          lng: this.props.lon
        }
      }
    );
  }

  render() {

    // the div can now be referred to as this.refs.map !
    return (<div ref="map"/>);
  }

}

export default GoogleMap;