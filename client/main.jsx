import React from 'react';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';
import App from '/imports/ui/App'
import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import {catcher} from "../imports/redux/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const storage = createStore(catcher, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
));

Meteor.startup(() => {
    render(
        <Provider store={storage}>
            <App/>
        </Provider>, document.getElementById('react-target'
        ));
});
