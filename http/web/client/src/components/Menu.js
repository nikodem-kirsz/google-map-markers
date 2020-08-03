import ListGroup from "react-bootstrap/ListGroup";
import React from "react";
import {connect} from "react-redux";
import {highlightEnergySource} from "../redux/actions";
import ListGroupItem from "react-bootstrap/ListGroupItem";

class Menu extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        const energy_sources = this.props.energy_sources
        console.log(this.props.energy_sources)
        return (
            <div style={{height: '90vh', width: '40vh', float: 'left', overflow: 'scroll'}}>
                <ListGroup>
                    {energy_sources.map((energy_source, i) => <ListGroupItem style={{height: '17vh'}} action
                                                                             onClick={() => this.props.highlightEnergySource(i)}>
                        <div style={{display: 'inlineBlock'}}>
                        <img src={energy_source.photo || 'https://m.wm.pl/2019/12/orig/fotowoltaika-597737.jpg'}
                             style={{float: 'left', width: "120px", height: "120px"}} alt="Photo"/>
                        <ul style={{fontSize: '13px'}}>
                                <p style={{margin: "0px", paddingLeft: '5px'}}><b>Nazwa</b>: {energy_source.name}</p>
                                <p style={{margin: "0px", marginLeft: '5px'}}><b>Typ Źródła Energii</b> {energy_source.source_type}</p>
                                <p style={{margin: "0px", marginLeft: '5px'}}><b>Cena</b>: {energy_source.price}zł</p>
                                <p style={{margin: "0px", marginLeft: '5px'}}><b>Moc</b>: {energy_source.power}W</p>
                                <p style={{margin: "0px", marginLeft: '5px'}}><b>Lokalizacja</b> {energy_source.location}</p>
                        </ul></div>
                    </ListGroupItem>)}
                </ListGroup>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps, {highlightEnergySource})(Menu);