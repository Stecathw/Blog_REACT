import { Polyline } from '@react-google-maps/api';

const ScriptLoaded = require("../../docs/ScriptLoaded").default;

const onLoad = polyline => {
  console.log('polyline: ', polyline)
};

const path = [
  {lat: 37.772, lng: -122.214},
  {lat: 21.291, lng: -157.821},
  {lat: -18.142, lng: 178.431},
  {lat: -27.467, lng: 153.027}
];

const optionsPolyline= {
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#FF0000',
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 30000,
  zIndex: 1
};

export default function Polyline() {
    return (
        <ScriptLoaded>
            <Polyline
                onLoad={onLoad}
                path={path}
                options={options}
            />
        </ScriptLoaded>
    )
}
