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
import Actu1 from "./article/Actu1";
import Actu2 from "./article/Actu2";
import Actu3 from "./article/Actu3";
import Training from "./subMenu/Training";
import Formations from "./SubTraining/Formations";
import Intership from "./SubTraining/Intership";
import Advices from "./SubTraining/Advices";
import Offers from "./SubTraining/Offers";
import Coaching from "./subMenu/Coaching";
import Offices from "./subMenu/Offices";
import Achievements from "./subMenu/Achievements";
import CompanyVisits from "./SubAchievements/CompanyVisits";
import Quiz1 from "./Quizz/Quiz";
import Testimonials from "./SubAchievements/Testimonials";
import {PrivateRoute} from "./utils/PrivateRoute";

const routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={App}/>

                <Route path="/register" component={Register}/>
                <Route path="/login" component={Login}/>

                <Route exact path="/expertises" component={Expertises}/>
                <Route exact path="/expertises/studentProfil" component={StudentProfil}/>
                <Route exact path="/expertises/scolarOrientation" component={ScolarOrientation}/>
                <Route exact path="/expertises/schoolProject" component={SchoolProject}/>
                <Route exact path="/expertises/tutoring" component={Tutoring}/>
                <Route exact path="/expertises/studentDeposit" component={StudentDeposit}/>
                <Route exact path="/expertises/studentHousing" component={StudentHousing}/>

                <Route exact path="/training" component={Training}/>
                <Route exact path="/training/formations" component={Formations}/>
                <Route exact path="/training/intership" component={Intership}/>
                <Route exact path="/training/advices" component={Advices}/>
                <Route exact path="/training/offers" component={Offers}/>

                <Route exact path="/coaching" component={Coaching}/>

                <Route exact path="/office" component={Offices}/>

                <Route exact path="/achievements" component={Achievements}/>
                <Route exact path="/achievements/companyVisits" component={CompanyVisits}/>
                <Route exact path="/achievements/testimonials" component={Testimonials}/>

                <Route exact path="/actu/1" component={Actu1}/>
                <Route exact path="/actu/2" component={Actu2}/>
                <Route exact path="/actu/3" component={Actu3}/>


                <PrivateRoute exact path="/Quiz1" component={Quiz1}/>

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
