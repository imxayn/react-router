import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Users from './users';
import Contact from './contact';
import Notfound from './notfound';
import { Route, Link,NavLink, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <div>
            <ul>
                <li>
                    <NavLink exact ClassName="active" to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink ClassName="active" to="/users/:id">Users</NavLink>
                </li>
                <li>
                    <NavLink ClassName="active" to="/contact">Contact</NavLink>
                </li>
            </ul>
            <Route exact path='/' component={App} />
            <Route path='/users/:id' component={Users} />
            <Route path='/contact' component={Contact}/>
            {/* <Route component={Notfound}></Route> */}
           
        </div>
    </Router>
)


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
