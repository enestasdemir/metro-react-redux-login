import React, {Component} from 'react';
import {connect} from "react-redux";


class Welcome extends Component {
    render() {
        return (
            <div className="ui middle aligned center aligned grid">
                <div className="column" style={{maxWidth: '30%', paddingTop: '10%'}}>
                    <h1>Hoş Geldin, {this.props.userdata}</h1>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userdata: state.USER
    }
}

export default connect(mapStateToProps, null)(Welcome)