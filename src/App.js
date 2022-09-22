import React,{ useState }  from "react";
// import logo from './logo.svg';
import './App.css';
//Marker
import {useJsApiLoader,GoogleMap , Marker, InfoWindow ,MarkerClusterer,LoadScript} from '@react-google-maps/api'
//import {MarkerClusterer} from '@react-google-maps/marker-clusterer'
import Skeleton from 'react-loading-skeleton'
//import { MarkerClusterer } from "@googlemaps/markerclusterer";
//import { withScriptjs, withGoogleMap } from "@react-google-maps";

//const { useState } = React;


//const WrappedMap = withScriptjs(withGoogleMap(App))

function App() {

  const [ selected, setSelected ] = useState({});
  
  const onSelect = item => {
    setSelected(item);
  }

const center= {lat: 34.73639770798405, lng: 36.73350960688921};

const exampleMapStyles = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e30202"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#263c3f"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6b9a76"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#38414e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#212a37"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9ca5b3"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#1f2835"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#f3d19c"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2f3948"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#515c6d"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  }
];


// const handleApiLoaded = (map, maps) => {
//   const markers = [];

//   const locations = [
//     { lat: 34.8959, lng: 35.8867 },
//   ];

//   locations.forEach((location) => {
//     markers.push(
//       new maps.Marker({
//         position: {
//           lat: location.lat,
//           lng: location.lng,
//         },
//         map,
//       })
//     );
//   });

//   new MarkerClusterer({ markers, map });
// };


  
  const {isLoaded} = useJsApiLoader({

    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  })
 
  if(!isLoaded){
     return <Skeleton />
  }

     
  let markers = [ // Just an example this should probably be in your state or props. 
  {
    name: "marker1",
    position: { lat: 34.8959, lng: 35.8867 }
  },
  {
    name: "marker2",
    position: { lat: 34.8919, lng: 35.9867 }
  },
  {
    name: "marker3",
    position: { lat: 34.8919, lng: 35.9866 }
  },
  {
    name: "marker4",
    position: { lat: 34.8919, lng: 35.9865 }
  },
  {
    name: "marker5",
    position: { lat: 34.8919, lng: 35.9864 }
  },
  {
    name: "marker6",
    position: { lat: 34.8919, lng: 35.9863 }
  },
  {
    name: "marker7",
    position: { lat: 34.8919, lng: 35.9862 }
  },
  {
    name: "marker8",
    position: { lat: 34.8919, lng: 35.9861 }
  },
  {
    name: "marker9",
    position: { lat: 34.8919, lng: 35.9860 }
  },
  {
    name: "marker10",
    position: { lat: 34.8919, lng: 35.9859 }
  },
  {
    name: "marker11",
    position: { lat: 34.8919, lng: 35.9858 }
  },
  {
    name: "marker12",
    position: { lat: 34.8919, lng: 35.9857 }
  },
  {
    name: "marker13",
    position: { lat: 34.72587602280578, lng: 36.72004267831149 }
  }
];

//const markerCluster = new MarkerClusterer({ markers });

var mapOptions = {
  zoom: 7,
  minZoom:7,
  maxZoom:20,
  center: center,
  disableDefaultUI: true,
  draggable: true,
  scaleControl: false,
  scrollwheel: true,
  styles: exampleMapStyles
};



// this.state = {
//   activeMarker: {},
//   selectedPlace: {},
//   showingInfoWindow: false
// };

// const onMarkerClick = (props, marker) =>
//     this.setState(
//       {
//         activeMarker: marker,
//         selectedPlace: props,
//         showingInfoWindow: true
//       },
//       () => {
//         console.log("Click on marker");
//       }
//     );
 
    // const onMarkerClustererClick = (markerClusterer) => {
    //   const clickedMarkers = markerClusterer.getMarkers()
    //   console.log(`Current clicked markers length: ${clickedMarkers.length}`)
    //   console.log(clickedMarkers)
    // };
    const options = {
      imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m" // so you must have m1.png, m2.png, m3.png, m4.png, m5.png and m6.png in that folder
    };
    

    class LoadScriptOnlyIfNeeded extends LoadScript {
      componentDidMount() {
        const cleaningUp = true;
        const isBrowser = typeof document !== "undefined"; // require('@react-google-maps/api/src/utils/isbrowser')
        const isAlreadyLoaded =
          window.google &&
          window.google.maps &&
          document.querySelector("body.first-hit-completed"); // AJAX page loading system is adding this class the first time the app is loaded
        if (!isAlreadyLoaded && isBrowser) {
          // @ts-ignore
          if (window.google && !cleaningUp) {
            console.error("google api is already presented");
            return;
          }
    
          this.isCleaningUp().then(this.injectScript);
        }
    
        if (isAlreadyLoaded) {
          this.setState({ loaded: true });
        }
      }
    }

    const calculator = function (markers, numStyles) {
      var index = 0;
      var count = markers.length;
      var dv = count;
      while (dv !== 0) {
        dv = parseInt(dv / 10, 10);
        index++;
      }
    debugger;
      index = Math.min(index, numStyles);
    
      return {
        text: count,
        index: index,
        title: "s"
      };
    };


  return (
    <div>
        <LoadScriptOnlyIfNeeded
      id="script-loader"
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
      libraries={["places", "drawing"]}
      language={"en"}
      region={"en"}
    >
        <GoogleMap 
                options={mapOptions}
                mapContainerStyle={{width:'90%', height:'90%',position: 'absolute'}}>

                <MarkerClusterer 
                     options={options} 
                     minimumClusterSize={5}
                     calculator={calculator}>

                        {(clusterer) =>
                            markers.map((marker, index) => (
                            <Marker
                              key={index} // Need to be unique
                              name={marker.name}
                              position={marker.position}
                              onMouseOver={() => onSelect(marker)}
                              clusterer={clusterer}
                            />
                            

                        ))}
                     
                     </MarkerClusterer>


                     {
                        selected.position && 
                          (
                            <InfoWindow
                            position={selected.position}
                            clickable={true}
                            onCloseClick={() => setSelected({})}
                          >
                            <p>{selected.name}</p>
                          </InfoWindow>
                          )
                    }
                  
        </GoogleMap>
        </LoadScriptOnlyIfNeeded>

        {/* <Marker position={center}/> <Marker position={center}/>    <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      
    </div>
  );
}

// function Map(props) {

//   return (
//       <WrappedMap
//       googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=gemotry,drawing,places&key=AIzaSyBMX1L2qGSwctfPzhN8efs4DWUywcbWOag'}
//       loadingElement={<div style={{ height: `100%` }} />}
//       containerElement={<div style={{ height: `100%` }} />}
//       mapElement={<div style={{ height: `100%` }} />}
//       />
//   );
// }

export default App;
