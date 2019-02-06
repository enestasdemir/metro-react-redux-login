import React, {Component} from 'react';
import Login from "./Login";
import Welcome from "./Welcome";
import {connect} from "react-redux";

class Valid extends Component {
    render() {
        const valid = this.props.log;
        let view;

        if (valid) {
            //Giriş yapıldı
            view = <Welcome/>
        } else {
            //Giriş başarısız
            view = <Login/>
        }

        return (
            <div>
                {view}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        usr: state.USER,
        pass: state.PASS,
        log: state.LOG
    }
}

export default connect(mapStateToProps, null)(Valid)