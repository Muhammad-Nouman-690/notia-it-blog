import { Component } from 'react';
import ReactMapGL from 'react-map-gl';

class Map extends Component {
  state = {
    viewport: {
      width: '60vw',
      height: '60vh',
      latitude: 41.5868,
      longitude: -93.625,
      zoom: 13
      
    }
  };

  render() {
    return (
      <ReactMapGL
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxApiAccessToken="pk.eyJ1Ijoibm9taTY5MCIsImEiOiJja20zYnpjcDEwaG9wMnJucmQ2MnlnYno0In0.OqicEU_5ZmK5QOx5c36OJg"
        onViewportChange={(viewport) => this.setState({ viewport })}
        {...this.state.viewport}
      />
    );
  }
}

export default Map;