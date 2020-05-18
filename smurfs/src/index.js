import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import App from "./components/App";
import {smurfsReducer} from './store/reducers/smurfsReducer';

const store=createStore(smurfsReducer, applyMiddleware(thunk));

const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);

