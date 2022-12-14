import React, {useRef, useState} from 'react';
import "./gmap.scss";
import {GoogleMap, Marker, InfoWindow, LoadScript} from "@react-google-maps/api"

const containerStyle = {
    width: '100%',
    height: '100%'
};

const center = {
    lat: 62.093710,
    lng: 129.837861
};






const markersLocation = [{
    lat: 61.987080,
    lng: 129.840565
    },
    {
        lat: 62.093710,
        lng: 129.837861
    },
    {
        lat: 61.855131,
        lng: 129.616340
    }];

const locations = [
    {
        name: "Location 1",
        location: {
            lat: 41.3954,
            lng: 2.162
        },
    },
    {
        name: "Location 2",
        location: {
            lat: 41.3917,
            lng: 2.1649
        },
    },
    {
        name: "Location 3",
        location: {
            lat: 41.3773,
            lng: 2.1585
        },
    },
    {
        name: "Location 4",
        location: {
            lat: 41.3797,
            lng: 2.1682
        },
    },
    {
        name: "Location 5",
        location: {
            lat: 41.4055,
            lng: 2.1915
        },
    }
];



const GMap = ({ title, center }) => {
    const [ selected, setSelected ] = useState({});

    const onSelect = item => {
        setSelected(item);
    }

    const mapRef = React.useRef(undefined)
    const onLoad = React.useCallback(function callback(map) {
        mapRef.current = map;
    }, [])
    const onUnmount = React.useCallback(function callback(map) {
        mapRef.current = undefined;
    }, [])



    return (
        <div className="GMap">
            {/*<div className="title">{title}</div>*/}
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={14}
                onLoad={onLoad}
                onUnmount={onUnmount}>
                {
                    locations.map(item => {
                        return (
                            <Marker key={item.name}
                                    position={item.location}
                                    onClick={() => onSelect(item)}
                            />
                        )
                    })
                }
                {
                    selected.location &&
                    (
                        <InfoWindow
                            position={selected.location}
                            clickable={true}
                            onCloseClick={() => setSelected({})}
                        >
                            <p>{selected.name}</p>

                        </InfoWindow>
                    )
                }


                {/*<Marker*/}
                {/*    icon={"https://icons8.com/icon/55036/leaving-geo-fence"}*/}
                {/*    position={markersLocation[1]}*/}
                {/*/>*/}

            </GoogleMap>
        </div>
    );
};

export default GMap;