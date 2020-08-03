import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import LOS_ANGELES_CENTER from '../const/la_center';
import fotowoltaika from './icons/fotowoltaika.svg';
import biofuel from './icons/biofuel.svg';
import pompa_ciepla from './icons/geothermal-energy.svg';
import hydro_power from './icons/hydro-power.svg';
import solar_energy from './icons/solar-energy.svg';
import wind_power from './icons/wind-power.svg'
import geotermia from './icons/geotermia.svg'

import {connect} from "react-redux";
import {addEnergySources, showProfile} from "../redux/actions";

let googleMap, googleMaps;

let markers = [];
let infowindows = [];

const getSourceTypeIcon = place => {
    switch (place.source_type) {
            case 'biomasa':
                return biofuel;
            case 'fotowoltaika':
                return fotowoltaika;
            case 'kolektory_sloneczne':
                return solar_energy;
            case 'turbina_wiatrowa':
                return wind_power;
            case 'pompa_ciepla':
                return pompa_ciepla;
            case 'geotermia':
                return geotermia;
            case 'elektrownia_wodna':
                return hydro_power;
            default:
                return '';
        }
    };

const sourceInfo = place => {
    return (`
    <div>
      <div>
        <img src=${place.user_picture || 'https://m.wm.pl/2019/12/orig/fotowoltaika-597737.jpg'}  style="float: left; width: 100px; height: 100px" alt="Profile"/>
      </div>
      <div>
        <img src=${place.photo || 'https://m.wm.pl/2019/12/orig/fotowoltaika-597737.jpg'} style="float: right; width: 100px; height: 100px" alt="Photo"/>
     </div>
      <div style="float:left; text-align: left; font-family: CeraRoundProLight,serif">
        <div style="font-size: 16px;">
            <b>Dodane przez</b> ${place.user_email}</a>
        </div>
        <div style="font-size: 16px;">
            <b>Nazwa</b>: ${place.name}
        </div>
        <div style="font-size: 16px;">
            <b>Typ Źródła Energii</b> ${place.source_type}
        </div>
        <div style="font-size: 16px;">
            <b>Cena</b>: ${place.price}zł
        </div>
        <div style="font-size: 16px;">
            <b>Moc</b>: ${place.power}W
        </div>
        <div style="font-size: 16px;">
            <b>Model</b>: ${place.model}
        </div>
        <div style="font-size: 16px;">
            <b>Data montażu</b>: ${place.assembly_data}
        </div>
        <div style="font-size: 16px;">
            <b>Lokalizacja</b> ${place.location}
        </div>
        <div style="font-size: 16px;">
            <b>Producent</b> ${place.manufacturer}
        </div>
        <div style="font-size: 16px">
            <b>Opis</b> ${place.description}
        </div>
        <div style="float: right; font-size: 16px">
            <b>Telefon:</b> ${place.user_phone}
        </div>
      </div>
    </div>`);
}

const handleApiLoaded = (map, maps, places) => {

    googleMap = map;
    googleMaps = maps;

    for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers = [];
    infowindows = [];

    places.forEach((place) => {
        markers.push(new maps.Marker({
                            map,
                            position: {
                                lat: parseFloat(place.lat),
                                lng: parseFloat(place.lng),
                            },
                            icon: {
                                url: getSourceTypeIcon(place),
                                scaledSize: new maps.Size(50, 50),
                                origin: new maps.Point(0, 0),
                                anchor: new maps.Point(0, 0)
                            }
                }));

        infowindows.push(new maps.InfoWindow({
            content: sourceInfo(place),
        }));

        markers.forEach((marker, i) => {
            marker.addListener('click', (e) => {
                console.log(e.target)
                for(let window=0; window < infowindows.length; window++) {
                    infowindows[window].close(googleMap, marker);
                }
                infowindows[i].open(map, marker);
            });
        });
    });
};

class Map extends Component {
    constructor(props) {
        super(props);

        this.state = {
            energy_sources: this.props.energy_sources || [],
        };
    }

    componentDidMount() {
        if (!this.props.profiledisplay) {
            fetch('/energy_sources')
            .then(response => response.json())
            .then((data) => {
                this.setState({energy_sources: data});
                this.props.addEnergySources(this.state.energy_sources);
            });
        }
    }

    render() {
        console.log(this.props.energy_sources)
        let energy_sources = this.props.energy_sources;
        let highlight_source = this.props.highlight_source;

        markers.forEach((marker, i) => {
                infowindows[i].close(googleMap, marker);
            });



        if (googleMap && googleMaps) {
            // handleApiLoaded(googleMap, googleMaps, [this.props.energy_sources[this.props.energy_sources.length - 1]]);
            handleApiLoaded(googleMap, googleMaps, this.props.energy_sources);

        }

        if(typeof(highlight_source) === 'number') {

            markers.forEach((marker, i) => {
                if(i === highlight_source) {
                    infowindows[i].open(googleMap, marker);
                }
            });
        }
        return (
            // Important! Always set the container height explicitly
            // <div style={{'z-index': 2, height: '80vh', width: '140vh', position: 'relative', float: 'right'}}>
            //     <div style={{height: '80vh', width: '65vw', position: 'relative', float: 'right'}}>
                    <GoogleMapReact
                        bootstrapURLKeys={{key: 'AIzaSyDYUxRGQlsfZZ688F2p4Fq0rkU3Q4yLD78'}}
                        // style={{marginLeft: 0}}
                        defaultCenter={LOS_ANGELES_CENTER}
                        defaultZoom={12}
                        yesIWantToUseGoogleMapApiInternals
                        onGoogleApiLoaded={({map, maps}) => handleApiLoaded(map, maps, energy_sources)}
                    >
                    </GoogleMapReact>
        );
    }
}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps, {addEnergySources, showProfile})(Map);