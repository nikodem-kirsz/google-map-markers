import React from "react";
import {connect} from "react-redux";
import {addEnergySources} from "../redux/actions";

class UserSources extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            energy_sources: []
        }
    }

    componentDidMount() {
        fetch('/user_resources', {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify({user_email: this.props.user_email})
                    })
            .then(response => response.json())
            .then((data) => {
                console.log(data)
                this.setState({energy_sources: data});
                this.props.addEnergySources(this.state.energy_sources)
            });
    }

}

export default connect(null, {addEnergySources})(UserSources);