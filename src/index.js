import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import App from './App';
import * as serviceWorker from './serviceWorker';
import Expertises from "./subMenu/Expertises";
import StudentProfil from "./SubExpertises/StudentProfil";
import ScolarOrientation from "./SubExpertises/ScolarOrientation";
import SchoolProject from "./SubExpertises/SchoolProject";
import Tutoring from "./SubExpertises/Tutoring";
import StudentDeposit from "./SubExpertises/StudentDeposit";
import StudentHousing from "./SubExpertises/StudentHousing";
import Register from "./connexion/Register";
import Login from "./connexion/Login";

const routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={App}/>

                <Route exact path="/expertises" component={Expertises}/>
                <Route exact path="/expertises/studentProfil" component={StudentProfil}/>
                <Route exact path="/expertises/scolarOrientation" component={ScolarOrientation}/>
                <Route exact path="/expertises/schoolProject" component={SchoolProject}/>
                <Route exact path="/expertises/tutoring" component={Tutoring}/>
                <Route exact path="/expertises/studentDeposit" component={StudentDeposit}/>
                <Route exact path="/expertises/studentHousing" component={StudentHousing}/>

                <Route path="/register" component={Register}/>
                <Route path="/login" component={Login}/>
                {/*<Route path="/signUp" component={Register}/>*/}
                {/*<PrivateRoute path="/home" component={Home}/>*/}
            </Switch>
        </div>
    </Router>
);

ReactDOM.render(routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
