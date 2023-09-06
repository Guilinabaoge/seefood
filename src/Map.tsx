import { GoogleMap, Marker, useLoadScript, InfoWindow } from "@react-google-maps/api";
import './css/Map.css';
import NettoLogo from './icons/NETTO_logo.svg'

function Map(props : any) {
    
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY || '',
    });
    

    const onMapClick = (e:any) => {
        props.setCenter(
          {
            lat: e.latLng.lat(),
            lng: e.latLng.lng()
          }
        );
    };

    const onStoreClick = (e:any,store:any) => {
        props.setCurrentStore(store);

    }

    const closeInfoWindow = () => {
        props.setCurrentStore(null);
    };


    return isLoaded ? (
        <GoogleMap
            onClick={onMapClick}
            mapContainerClassName="map-container"
            center={props.center}
            zoom={13}>
            <Marker position={props.center}/>
            {props.nettos.map((store : any) => (
                <Marker 
                    icon={
                        {url: NettoLogo,
                        scaledSize: new window.google.maps.Size(25, 25),}}
                    key={store.id} 
                    position={{ lng: store.coordinates[0], lat: store.coordinates[1] }}
                    onClick={(e) => onStoreClick(e,store)}
                />
            ))}
            {props.currentStore && (
                <InfoWindow
                    position={{ 
                        lng: props.currentStore.coordinates[0],
                        lat: props.currentStore.coordinates[1] }}
                    onCloseClick={closeInfoWindow}
                >
                <div>
                    <h3>{props.currentStore.name}</h3>
                    <p>{props.currentStore.address.street}</p>
                </div>
                    
                </InfoWindow>
            )}
            
        </GoogleMap>
    ) : <></>
}

export default Map;
