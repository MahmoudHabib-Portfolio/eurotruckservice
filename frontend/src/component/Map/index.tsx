import { Map, Marker } from "react-map-gl";
import { FaMapMarkerAlt } from "react-icons/fa";

const TruckMap = () => {

  const mapboxToken = 'pk.eyJ1IjoibWFobW91ZGhhYmViOTYiLCJhIjoiY20ydW92cHhrMDN0NzJpcXFyZ3IwYW9vZCJ9.DwwRqjISj0zfaXu-e3mUgQ';

  return (
    <Map
      mapboxAccessToken={mapboxToken}
      initialViewState={{
        longitude: 8.53090292313911,
        latitude: 47.38339486126438,
        zoom: 12
      }}
      mapStyle="mapbox://styles/mapbox/light-v11"
      style={{ width: '100%', height: '100%' }}
    >
    <Marker longitude={8.53090292313911} latitude={47.38339486126438} anchor="bottom">
      <FaMapMarkerAlt style={{fontSize: "8em", color:"tomato"}} />
    </Marker>
    </Map>
  )
}

export default TruckMap;