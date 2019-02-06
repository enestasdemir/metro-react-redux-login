import React, {Component} from 'react';
import {Input, Button, Message} from 'semantic-ui-react';
import {creator} from "../redux/actioncreator";
import {connect} from "react-redux";

class Login extends Component {
    state = {
        usr: '',
        pass: '',
        logerr: false
    };

    //Kullanıcı adını yakala
    getUser(event) {
        this.setState({usr: event.target.value})

    };

    //Parolayı yakala
    getPass(event) {
        this.setState({pass: event.target.value})

    };

    //Giriş tuşu
    submit = (event) => {
        event.preventDefault(); //Sayfa refresh engelle
        let name = this.state.usr, pasw = this.state.pass, logd = false;

        //Kullanıcı adı ve parolayı kontrol et
        if (name === 'enes' && pasw === '123') {
            logd = true;
        } else {
            this.setState({err: true})
        }
        this.props.catchit(name, pasw, logd);
    };

    render() {
        let err;

        //Hata mesajı: Hatalı bir kullanıcı adı veya parola girildiğinde
        if (this.state.err) {
            err =
                <Message negative>
                    <Message.Header>Giriş başarısız!
                    </Message.Header><p>Kullanıcı adı veya parola hatalı.</p>
                </Message>;
        }

        return (
            <div className="ui middle aligned center aligned grid">
                <div className="column" style={{maxWidth: '30%', paddingTop: '10%'}}>
                    <form className="ui large form">
                        <div className="ui stacked segment">
                            <div className="field">
                                <Input onChange={(event) => {
                                    this.getUser(event)
                                }}
                                       autoComplete="off" placeholder={'Kullanıcı Adı'} id='un'/>
                            </div>
                            <div className="field">
                                <Input onChange={(event) => {
                                    this.getPass(event)
                                }}
                                       autoComplete="off" placeholder={'Parola'} id='ps'/>
                            </div>
                            <div>
                                <Button onClick={this.submit} fluid color='green'>Giriş</Button>
                            </div>
                        </div>
                    </form>
                    {err}
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        catchit: function (usr, pass, log) {
            return (dispatch(creator(usr, pass, log)))
        }
    }
};

export default connect(null, mapDispatchToProps)(Login)