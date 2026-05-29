
import {
  GoogleMap,
  LoadScript,
  Marker,
  Polyline
} from "@react-google-maps/api";

interface Props {
  coordinates: {
    lat: number;
    lng: number;
  }[];
}

const containerStyle = {
  width: "100%",
  height: "220px",
  borderRadius: "24px"
};

export default function RouteMap({
  coordinates
}: Props) {

  const center = coordinates[0];

  return (

    <LoadScript
      googleMapsApiKey={
        import.meta.env.VITE_GOOGLE_MAPS_API_KEY
      }
    >

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
      >

        {/* Start Marker */}
        <Marker position={coordinates[0]} />

        {/* End Marker */}
        <Marker
          position={
            coordinates[
              coordinates.length - 1
            ]
          }
        />

        {/* Route Line */}
        <Polyline
          path={coordinates}
          options={{
            strokeColor: "#FFD600",
            strokeOpacity: 1,
            strokeWeight: 5
          }}
        />

      </GoogleMap>

    </LoadScript>
  );
}

